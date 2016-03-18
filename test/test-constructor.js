var assert = require('chai').assert,
    constructor = require('../app/constructor.js')
    ;

describe("constructor()", function(){
    
    it('should execute the constructor', function(){
        assert.equal("init! - jesse", constructor.constructorDemo("jesse"));
    });
    
});  