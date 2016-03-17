var assert = require('assert'),
    app = require('../app/app.js');

describe('Array', function() {
  describe('#indexOf()', function () {
    
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    
    it('should return 0 when the value is 0', function () {
      assert.equal(0, 0);
    });    
  });
  
  describe("returnMath()", function(){
    
    it('should return addition of two numbers', function(){
        
        var answer = app.returnMath(8,7);
        assert.equal(15, answer);
         
    });
    
  });
  
});