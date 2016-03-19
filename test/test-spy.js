var assert = require('chai').assert,
    expect = require('chai').expect,
    sinon = require('sinon'),
    
    app = require('../build/app.js');


describe("Spy()",function(){
    var callbackOnce;
    var callbackTwice;
    var callbackThrice;

    //before is called once before the tests below are executed.
    before(function() {
      //console.log("BEFORE HIT!");
      //setup the spies before:
      callbackOnce = sinon.spy(app.spy, "once");
      callbackTwice = sinon.spy(app.spy, "twice");
      callbackThrice = sinon.spy(app.spy, "thrice");
      callbackCallAll = sinon.spy(app.spy, "callAll");
    });

    //beforeEach is called each time before the tests below
    beforeEach(function(){
      //console.log("BEFORE EACH!");
    })

    it('function to be spied on can be accessed', function(){
        assert.equal(1, app.spy.once());
    })
    
    it('calls the function', function(){
       
       
       app.spy.once();       
       assert.isTrue(callbackOnce.called);
               
    });
    
    it('does not call function', function(){
       
       
       app.spy.once();       
       assert.isFalse(callbackTwice.called);

    });
    
    it('calls function from other function', function(){
       
       
       app.spy.callAll();
       assert.isTrue(callbackThrice.called);
       
    });

    it('count the number of callbacks', function(){

      assert.equal(callbackThrice.callCount, 1);
      app.spy.thrice();

      assert.equal(callbackOnce.callCount, 4);
      assert.equal(callbackTwice.callCount, 1);
      assert.equal(callbackThrice.callCount, 2);

      assert.equal(callbackCallAll.callCount, 1);

    });
    
})