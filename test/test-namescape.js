var assert = require('chai').assert,
    expect = require('chai').expect,
    
    namescape = require('../app/namescape.js');
    

describe("constructor()", function(){
    
    /*it('should execute the constructor', function(){
        assert.equal("Hi", namescape.namescape());
    });*/
    
    it('should execute the constructor', function(){
        assert.equal("Hi", namescape.jesse.init());
    });
    
    it('has access to the outside?', function(){
        assert.equal("Hello From the Outside!", namescape.jesse.outside());
    });
    
});  

describe("Module Export", function(){
   
   it('should have access to outsideYo', function(){
       assert.equal(1, namescape.out.init() );
   });
   
   it('should not have access to privateFunction()', function(){
       expect (function() { namescape.out.privateFunction() }).to.throw ( TypeError );
   });
   
});