module.exports.scopeDemo = (function () {
  
  // private function:
  var privateMethod = function () {
    return "private method";
  };
  
  return {
    //fully public method:
    publicMethod: function () {
        return "public method";
    },

    // get and return privateMethod()
    publicPrivateMethod: function(){
        return privateMethod();
    } 

  };
  
})();