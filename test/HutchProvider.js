'use strict';

const HutchProvider = require('..//HutchProvider');

const hutchProvider = new HutchProvider();

// UNIT test begin

describe("Hutch provider tests", function () {

    this.timeout(7000);
    
    before((done) => {
        done();
      });


    it("send message", function (done) {
        try {
            let messageData = {
                mobile_number:'94776449328',
                message:'EtisalatSL Test',
                sender_id:'ShoutDEMO',
                owner_id:'43'
            };
            hutchProvider._send(messageData,null,done);
        } catch (e) {
            done(e);
        }
    });
});