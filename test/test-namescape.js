var assert = require('chai').assert,
    expect = require('chai').expect,
    
    app = require('../build/app.js');
    

describe("constructor()", function(){
    
    /*it('should execute the constructor', function(){
        assert.equal("Hi", app.namescape());
    });*/
    
    it('should execute the constructor', function(){
        assert.equal("Hi", app.jesse.init());
    });
    
    it('has access to the outside?', function(){
        assert.equal("Hello From the Outside!", app.jesse.outside());
    });
    
});  

describe("Module Export", function(){
   
   it('should have access to outsideYo', function(){
       assert.equal(1, app.out.init() );
   });
      
   it('should not have access to privateFunction()', function(){
       expect (function() { app.out.privateFunction() }).to.throw ( TypeError );
   });
   
   it('should get access to privateFunction through getPrivate', function(){
       assert.equal(2, app.out.getPrivate());
   });
   
   it('should get access to privateFunction2 through getPrivateTwo', function(){
       assert.equal(4, app.out.getPrivateTwo());
   });
   
});