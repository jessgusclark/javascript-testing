var assert = require('chai').assert,
    expect = require('chai').expect,
    
    scope = require('../app/scope.js');


describe("scope()", function(){
    
    it('should be okay', function(){
        assert.isOk(true, scope);
        console.log(scope);
    });
    
    it('should throw an error', function(){
        expect (function() { place.updateAddress ( [] ); }).to.throw ( ReferenceError );
    })
        
    it('should not return privateFunction', function(){
        expect (function() { scope.privateMethod() }).to.throw ( TypeError );
    });
    
    it('should return publicMethod', function(){
        assert.equal("public method", scope.publicMethod());
    });
    
    it('should return the privateMethod via a public function', function(){
        assert.equal("private method", scope.publicPrivateMethod());
    })
    
})