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
            url = "http://unco.oudemo.com/_training/docs/superheroes.xml";
            var jqxhr = $.getJSON( url, function(data) {
                return (data)
            })
            .fail(function() {
                return ("Error!");
            });
            
        }
        

	}

})();

module.exports.stubDemo = stubDemo;  