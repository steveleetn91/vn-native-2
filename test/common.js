var expect  = require('chai').expect;
var request = require('request');
    it('Start server', function() {
        request('http://localhost:9000' , function(error, response, body) {
            console.error(error);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
function done(){
    console.log("Vn Native Framework Testing Unit Done");
}    