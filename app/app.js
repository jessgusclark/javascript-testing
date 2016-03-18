/*var returnMath = function (a, b){
    return a + b;
}*/

module.exports.first = {
    returnMath: function( a, b ){
        return a + b;
    },
    
    sayHello: function(language){
        
        switch(language){
            case "en":
                return "Hello";
            case "es":
                return "Hola";
            case "fr":
                return "Bonjour";
            default:
                return "";
        }
                
    },
    
    nested: function(){
        
        hello = function(){
           return "Hello!"; 
        };
        
        return hello(); 
    }
}


module.exports.outsideMethod = function() {
    return "Outside Yo!";
};
