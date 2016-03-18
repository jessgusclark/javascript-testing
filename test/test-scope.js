var assert = require('chai').assert,
    expect = require('chai').expect,
    
    app = require('../build/app.js');


describe("scope()", function(){
    
    it('should be okay', function(){
        assert.isOk(true, app.scopeDemo);
        console.log(app.scopeDemo);
    });
    
    it('should throw an error', function(){
        expect (function() { place.updateAddress ( [] ); }).to.throw ( ReferenceError );
    })
        
    it('should not return privateFunction', function(){
        expect (function() { app.scopeDemo.privateMethod() }).to.throw ( TypeError );
    });
    
    it('should return publicMethod', function(){
        assert.equal("public method", app.scopeDemo.publicMethod());
    });
    
    it('should return the privateMethod via a public function', function(){
        assert.equal("private method", app.scopeDemo.publicPrivateMethod());
    })
    
})