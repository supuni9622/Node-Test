const HutchProvider = require('./HutchProvider');
const HutchProvider2 = require('./HutchProvider2');
let hutchProvider = new HutchProvider();
let hutchProvider2 = new HutchProvider();
let hutchProvider3 = new HutchProvider();
let hutchProvider4 = new HutchProvider();
let hutchProvider5 = new HutchProvider();

const messageData = {
    mobile_number:'94776449328',
    message:'Test',
    sender_id:'ShoutDEMO',
    owner_id:'43'
};

hutchProvider2._send(messageData,null,()=>{console.log("done")});

// hutchProvider._send(messageData,null,()=>{console.log("done")});
// hutchProvider2._send(messageData,null,()=>{console.log("done")});
// hutchProvider3._send(messageData,null,()=>{console.log("done")});
// hutchProvider4._send(messageData,null,()=>{console.log("done")});
// hutchProvider5._send(messageData,null,()=>{console.log("done")});
// hutchProvider2._send(messageData,null,()=>{console.log("done")});
// hutchProvider._send(messageData,null,()=>{console.log("done")});
// hutchProvider2._send(messageData,null,()=>{console.log("done")});
// hutchProvider3._send(messageData,null,()=>{console.log("done")});
// hutchProvider4._send(messageData,null,()=>{console.log("done")});
// hutchProvider5._send(messageData,null,()=>{console.log("done")});
// hutchProvider2._send(messageData,null,()=>{console.log("done")});
// hutchProvider._send(messageData,null,()=>{console.log("done")});
// hutchProvider2._send(messageData,null,()=>{console.log("done")});
// hutchProvider3._send(messageData,null,()=>{console.log("done")});
// hutchProvider4._send(messageData,null,()=>{console.log("done")});
// hutchProvider5._send(messageData,null,()=>{console.log("done")});
// hutchProvider2._send(messageData,null,()=>{console.log("done")});