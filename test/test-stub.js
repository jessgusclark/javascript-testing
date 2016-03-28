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
		
        it('local JSON testing', function(){

            var data = '[{ "x": 2,  "y": 2,  "radius": 5 },{ "x": 3, "y": 5,  "radius": 8 },{ "x": 20, "y": 15, "radius": 2 }]';
            
            //convert string to json:
            var jsonData = JSON.parse(data);
            var jsonJqueryData = $.parseJSON(data);
            
            // string !== JSON:      
            assert.notEqual(data, jsonData);
            
            // Both JSON Objects but not the same:
            assert.notEqual(jsonData, jsonJqueryData);
            
            // Assets:
            assert.equal(jsonData[1].x, 3);
            assert.equal(jsonJqueryData[1].x, 3);
            assert.typeOf(jsonData[1].x, 'number', 'we have a number');      
            
        });
        
        it('calls local "stubbed" json object instead of returned', function(){
           
           // Not Stub:
           var nonStub = app.stubDemo.returnJsonObject();
           assert.equal(nonStub[1].x, 2);
           
           // Data:
           var data = '[{ "x": 1,  "y": 1,  "radius": 1 },{ "x": 1, "y": 1,  "radius": 1 },{ "x": 1, "y": 1, "radius": 1 }]';
           var jsonData = JSON.parse(data);
           
           // Stub:
           app.stubDemo.returnJsonObject = sinon.stub().returns(jsonData);
           var stubVersion = app.stubDemo.returnJsonObject();
           
           // Check Assertions:
           assert.notEqual(stubVersion[1].x, 2);
           assert.equal(stubVersion[1].x, 1);
            
        })
        
        it('calls stub data instead of AJAX Request', function(){
           
           // data:
           var jsonData = JSON.parse('[{ "x": 1,  "y": 1,  "radius": 1 },{ "x": 1, "y": 1,  "radius": 1 },{ "x": 1, "y": 1, "radius": 1 }]');
           
           // Stub the function to return jsonData:
           app.stubDemo.jsonCall = sinon.stub().returns(jsonData);
           
           // Call Method and save:
           var results = app.stubDemo.jsonCall();
          
           // Assert:
           assert.equal(results[1].x, 1);
           assert.notEqual(results[1].x, 12)    // data/data.js --> [1].x
            
        });

	});

});