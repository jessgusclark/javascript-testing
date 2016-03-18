var assert = require('chai').assert,
    expect = require('chai').expect,
    should = require('chai').should,
    
    app = require('../app/app.js'),
    scope = require('../app/scope.js');

describe('Array', function() {
  describe('#indexOf()', function () {
    
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    
    it('should return 0 when the value is 0', function () {
      assert.equal(0, 0);
      assert.equal(5, 3+2);
    });    
  });
  
  describe("returnMath()", function(){
    
    it('should return addition of two numbers', function(){
        var answer = app.returnMath(8,7);
        assert.equal(15, answer);  
    });
    
    it('should return a number', function(){
        assert.typeOf(app.returnMath(5,5), 'number'); 
    });
    
    it('should not return a string', function(){
        assert.notEqual("hello", app.returnMath(1,1));
    });
    
  });
  
  describe("sayHello()", function(){
    
    it('should return english', function(){        
        assert.equal("Hello", app.sayHello("en"));         
    });
    
    it('should return spanish', function(){        
        assert.equal("Hola", app.sayHello("es"));         
    });
    
    it('should return french', function(){        
        assert.equal("Bonjour", app.sayHello("fr"));         
    });
    
    it ('should return blank', function(){
        assert.equal("", app.sayHello("gr"));
    })
    
  });
  
  
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
  
  
});