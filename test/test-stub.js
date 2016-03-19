var assert = require('chai').assert,
	sinon = require('sinon'),
    
    app = require('../build/app.js');


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
});