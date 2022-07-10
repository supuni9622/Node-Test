'use strict';
 const request = require('requestretry');
 var fs = require('fs');
 const TokenUtils = require('./TokenUtils');

 const messageStatus = {
    QUEUED: "1000",
    SUCCESS: "1001",
    INVALID_REQUEST: "1005",
    INVALID_DESTINATION: "1006",
    INVALID_SOURCE: "1007",
    INTERNAL_ERROR: "1010",
    INSUFFICIENT_CREDITS: "1025",
    SUBMITTED: "1026",
    NO_ROUTE: "1012",
    UNKNOWN: "1013",
    BLOCKED: "1015",
    INVALID_PROVIDER: "1027",
    INVALID_TRANSPORT: "1028"
};

const HUTCH_USERNAME="administrator+Shotout_2@getshoutout.com";
const HUTCH_PASSWORD="uJC32T8kwsyQAGg@";
const HUTCH_BASE_URL="https://bsms.hutch.lk/api/";


const sendMessages = (message, routeMetadata, callback, accessToken, refreshToken) => {

    const payload = {
        "campaignName": "Test 1",
        "mask" : message.sender_id,
        "numbers" : message.mobile_number,
        "content" : message.message,
        "deliveryReportRequest": true
    };

    if(accessToken){

        request({
             url: `${HUTCH_BASE_URL}sendsms`,
             headers:
             {
                 'Content-Type': 'application/json',
                 'Accept': '*/*',
                 'X-API-VERSION': 'v1',
                 'Authorization' : `Bearer ${accessToken}`
             },
             method: 'POST',
             strictSSL: false,
             body: JSON.stringify(payload), 
             time: true,
             timeout: 7000,
             maxAttempts: 3,   // (default) try 3 times
             retryDelay: 3000,  // (default) wait for 3s before trying again
             retryStrategy: (err, response, body) => {
                 if(err !== null){
                     console.log('retrying hutch request');
                 }
                 return err !== null;
             }
         },
         function (error, result) {
             if (error) {
                 console.log('error submitting to hutch ', error);
                 callback(null, error);
             } else {
              //  console.log('elapsed time %s ms', result.elapsedTime);
                //console.log('attempts %s', result.attempts);
                 const resultBody = JSON.parse(result.body);
                // console.log('hutch response', result.body );

                 if(resultBody){

                  //  console.log("resultBody.status", resultBody.status)
                    if (resultBody.status === 401){
                        TokenUtils.renewToken(`${HUTCH_BASE_URL}token/accessToken`, 
                        refreshToken,
                        (error, result) => {
                         if (error) {
                             console.log('sending error', error);
                         } else {
         
                             //console.log("tokens",result)
                             accessToken = result.accessToken;
                             sendMessages(message, routeMetadata, callback)
                             
                         }
                     }
                    );
                    }
                    if (resultBody.serverRef) {

                       message.status = messageStatus.SUCCESS;
                       message.provider_response = resultBody;
                            
                   } else {
                           message.provider_response = resultBody;
                           message.status = messageStatus.UNKNOWN;
                   }
                 }else {
                   // console.log("Http response:" + JSON.stringify(result));
                    message.status = messageStatus.INTERNAL_ERROR;
                }
                
                 message.sent_on = new Date();
                 message.modified_on = message.sent_on;
                 callback(null, message);
                 console.log("message", message);
             }
         }
     );
      }
}
 
 class HutchProvider2 {
     constructor() {

     }
 
     _send(message, routeMetadata, callback) {
           
            TokenUtils.generateToken(`${HUTCH_BASE_URL}login`, {
                "username" : HUTCH_USERNAME,
                "password" : HUTCH_PASSWORD
            },
            (error, result) => {
                if (error) {
                    console.log('sending error', error);
                } else {
                    //console.log("tokens",result)
                    fs.writeFile ("tokens.json", JSON.stringify(result), function(err) {
                        console.log("result", result)
                        if (err) throw err;
                        console.log('complete');
                        }
                    );

                    fs.readFile('tokens.json',function(err,content){
                        if(err) throw err;
                        if(content){

                            console.log('content', content)
                            var parseJson = JSON.parse(content);
                            sendMessages(message, routeMetadata, callback, parseJson.accessToken, parseJson.refreshToken);
                        }
                        
    
                    });
                }
            }
            );
              
         } 
         
     }
 
 
 module.exports = HutchProvider2;