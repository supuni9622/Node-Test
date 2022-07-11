const HutchProvider = require('./HutchProvider');
const HutchProvider2 = require('./HutchProvider2');
let hutchProvider = new HutchProvider();
let hutchProvider2 = new HutchProvider();
let hutchProvider3 = new HutchProvider();
let hutchProvider4 = new HutchProvider();
let hutchProvider5 = new HutchProvider();

const messageData = {
    mobile_number:'94719425366',
    message:'Test',
    sender_id:'ShoutDEMO',
    owner_id:'43'
};

hutchProvider2._send(messageData,null,()=>{console.log("done")});

// hutchProvider._send(messageData,null,()=>{console.log("done 1")});
// hutchProvider2._send(messageData,null,()=>{console.log("done 2")});
// hutchProvider3._send(messageData,null,()=>{console.log("done 3")});
// hutchProvider4._send(messageData,null,()=>{console.log("done 4")});
// hutchProvider5._send(messageData,null,()=>{console.log("done 5")});
// hutchProvider2._send(messageData,null,()=>{console.log("done 6")});
// hutchProvider._send(messageData,null,()=>{console.log("done 7")});
// hutchProvider2._send(messageData,null,()=>{console.log("done 8")});
// hutchProvider3._send(messageData,null,()=>{console.log("done 9")});
// hutchProvider4._send(messageData,null,()=>{console.log("done 10")});
// hutchProvider5._send(messageData,null,()=>{console.log("done 11")});
// hutchProvider2._send(messageData,null,()=>{console.log("done 12")});
// hutchProvider._send(messageData,null,()=>{console.log("done 13")});
// hutchProvider2._send(messageData,null,()=>{console.log("done 14")});
// hutchProvider3._send(messageData,null,()=>{console.log("done 15")});
// hutchProvider4._send(messageData,null,()=>{console.log("done 16")});
// hutchProvider5._send(messageData,null,()=>{console.log("done 17")});
// hutchProvider2._send(messageData,null,()=>{console.log("done 18")});