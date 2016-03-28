var stubDemo = (function (){

	var defaultValue = 4;

	return {

		getDefaultValue : function(){
			return defaultValue;
		},
        
        jsonCall : function(){
            url = "../data/data.js";
            var jqxhr = $.getJSON( url, function(data) {
                return (data);
            })
            .fail(function() {
                return ("Error!");
            });
            
        },
        
        returnJsonObject: function(){
          var data = '[{ "x": 2,  "y": 2,  "radius": 2 },{ "x": 2, "y": 2,  "radius": 2 },{ "x": 2, "y": 2, "radius": 2 }]';
          return jsonData = JSON.parse(data);   
        },
        
        formatData : function(data){

            console.log(data); 
            //return data[1].x;
            //return data[0].x; 
            return data[0].x;
        }
        

	}

})();

module.exports.stubDemo = stubDemo;  