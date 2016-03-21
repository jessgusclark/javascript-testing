var assert = require('chai').assert,
	sinon = require('sinon'),
    app = require('../build/app.js'),
    $ = require('jquery');


describe('Stubs', function(){
	describe('Basic', function(){

   		it('should be called', function(){
   			assert.equal(app.stubDemo.getDefaultValue(), 4);
   		});


   		it('should be called with a stub that changes the value', function(){

   			sinon.stub(app.stubDemo, 'getDefaultValue').returns(8);

   			assert.equal(app.stubDemo.getDefaultValue(), 8);

   		});
   	});

	/*describe('JSON Data', function(){
		
		it('can call the json object', function(){

			var data = app.stubDemo.jsonCall();
			console.log(data);

		});

	});*/

});
/*
describe("Source Data", function() {
    describe("Data for External Modules", function() {
        it("returns the source data from a file", function(done){
            
            var stub = sinon.stub($, "ajax");
            
             app.stubDemo.jsonCall(function(sourceData){
                expect(sourceData.spec[0].name).to.equal("Spec");
                done();
            });
        });
    });
});*/