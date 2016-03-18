var assert = require('chai').assert,
    constructor = require('../build/app.js')
    ;

describe("constructor()", function(){
    
    it('should execute the constructor', function(){
        assert.equal("init! - jesse", constructor.constructorDemo("jesse"));
    });
    
});  