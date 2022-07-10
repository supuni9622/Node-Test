const request = require('requestretry');

class TokenUtils {
    static generateToken(url, requestBody, callback) {

        let tokens;
        request({
            url: url,
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'X-API-VERSION': 'v1'
            },
            method: 'POST',
            body: JSON.stringify(requestBody), 
            maxAttempts: 5,   
            retryDelay: 1000,  
            retryStrategy: request.RetryStrategies.HTTPOrNetworkError 
          }, 
          function(err, response, body){

            if(err){
                console.log('error generating token ', err);
            }else{
               // console.log('response ',response.body);

               tokens =JSON.parse(response.body);
              
            }
            callback(null, tokens);
          }
        );
        
    }

    static renewToken(url, token, callback) {

        let newToken;
        request({
            url: url,
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'X-API-VERSION': 'v1',
                'Authorization' : `Bearer ${token}`
            },
            method: 'GET',
            maxAttempts: 5,   
            retryDelay: 1000,  
            retryStrategy: request.RetryStrategies.HTTPOrNetworkError 
          }, function(err, response, body){

            if(err){
                log.error('error renew token ', err);
            }else{
                newToken = JSON.parse(response.body);
            }
            callback(null, newToken);
          });
    }
}

module.exports = TokenUtils;