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
    
});  