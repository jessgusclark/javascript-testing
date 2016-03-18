/*module.exports.namescape = function() {
    return "Hi";
};*/

function topOutside(){
    return "Hello From the Outside!";
}

module.exports.jesse = (function () {
        
    return {
        
        init: function(){
            return "Hi";
        },
        
        outside: function(){
            return topOutside();
        }
        
    }
    
})();

///
/// Module Export
/// NameScape: 
var outsideYo = (function () {
	
    //private functions:
    function privateFunction(){
        return 2;
    }
    
    // written in a different format:
    var privateFunction2 = function(){
        return 4;
    }
    
    /*var __construct = function() {
        console.log("constructor");
        return 3;
    }();*/
   
	//public functions:
    return {
        init : function(){
            return 1;
        },
        getPrivate : function(){
            return privateFunction();
        },
        getPrivateTwo :function(){
            return privateFunction2();
        }        
    }
     
    
}());

// attach namescape to the outputs:
module.exports.out = outsideYo;