var assert = require('chai').assert,
    app = require('../build/app.js')
    ;

describe("constructor()", function(){
    
    it('should execute the constructor', function(){
        assert.equal("init! - jesse", app.constructorDemo("jesse"));
    });
    
});  