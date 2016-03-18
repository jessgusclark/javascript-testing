///
/// Module Export
/// NameScape: 
var spy = (function () {
	
	//public functions:
    return {
        once : function(){
            return 1;
        },
        twice : function(){
            return 2;
        },
        thrice : function(){
            return 3;
        },
        callAll : function(){
            return thrice();
        }
    }
     
    
}());

// attach namescape to the outputs:
module.exports.spy = spy;