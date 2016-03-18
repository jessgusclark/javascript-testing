var assert = require('chai').assert,
    expect = require('chai').expect,
    sinon = require('sinon'),
    
    app = require('../build/app.js');


describe("Spy()",function(){
    
    it('function to be spied on can be accessed', function(){
        assert.equal(1, app.spy.once());
    })
    
    it('calls the function', function(){
       
       var callback = sinon.spy(app.spy, "once");
       app.spy.once();       
       assert.isTrue(callback.called);
               
    });
    
    it('does not call function', function(){
       
       var callback = sinon.spy(app.spy, "twice");
       app.spy.once();       
       assert.isFalse(callback.called);

    });
    
    it('calls function from other function', function(){
       
       var callback = sinon.spy(app.spy, "thrice");
       app.spy.callAll();
       assert.isTrue(callback.called);

    });
    
})