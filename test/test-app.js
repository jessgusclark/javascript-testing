var assert = require('chai').assert,
    app = require('../build/app.js')
    ;

describe('Second File', function() {
   
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
        var answer = app.first.returnMath(8,7);
        assert.equal(15, answer);  
    });
    
    it('should return a number', function(){
        assert.typeOf(app.first.returnMath(5,5), 'number'); 
    });
    
    it('should not return a string', function(){
        assert.notEqual("hello", app.first.returnMath(1,1));
    });
    
  });
  
  describe("sayHello()", function(){
    
    it('should return english', function(){        
        assert.equal("Hello", app.first.sayHello("en"));         
    });
    
    it('should return spanish', function(){        
        assert.equal("Hola", app.first.sayHello("es"));         
    });
    
    it('should return french', function(){        
        assert.equal("Bonjour", app.first.sayHello("fr"));         
    });
    
    it ('should return blank', function(){
        assert.equal("", app.first.sayHello("gr"));
    })
    
  });
  
  describe("Misc app", function(){
      
     it('should have access to function', function(){
         assert.equal("Hello!", app.first.nested());
     });
     
     it('should have access to a "root" function', function(){
         
         assert.equal("Outside Yo!", app.outsideMethod());
         
     })
     
  });
    
});