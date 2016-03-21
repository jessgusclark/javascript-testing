var stubDemo = (function (){

	var defaultValue = 4;

	return {

		getDefaultValue : function(){
			return defaultValue;
		},

		/*getJson : function(){
			url = "http://unco.oudemo.com/_training/docs/superheroes.xml";
			$.ajax({ 
				type: "GET",
				dataType: "json",
				url: url,
				success: function(data){
			  		return data;
				}
			});

		}*/ 
        
        jsonCall : function(){
            url = "../data/data.js";
            var jqxhr = $.getJSON( url, function(data) {
                return (data);
            })
            .fail(function() {
                return ("Error!");
            });
            
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