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

	describe('JSON Data()', function(){
		
		/*it('can call the json object', function(done){

			var data = app.stubDemo.jsonCall();
            
            assert.equal(data[0].x, 1);
            done();
            
		});*/
        
        it('retunrs the data', function(){

            var data = '[{ "x": 1,  "y": 1,  "radius": 5 },{ "x": 12, "y": 5,  "radius": 8 },{ "x": 20, "y": 15, "radius": 2 }]';
            //var data = "{ x=1,  y=1,  radius=5 }";
            //var data = '[{ "x":1,  "y":1,  "radius":5 }]';
            //var data = '[{ "x": "1",  "y": "1",  "radius": "5" }]'; 
            
            var jsonData = JSON.stringify(eval(data));
            //var formatted = 1;
            var formatted = app.stubDemo.formatData(jsonData);
                        
            assert.typeOf(formatted, 'number', 'we have a number');
            //assert.equal(formatted, 1);
            
        });

	});/**/

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