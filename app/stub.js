var stubDemo = (function (){

	var defaultValue = 4;

	return {

		getDefaultValue : function(){
			return defaultValue;
		},

		getJson : function(){
			url = "http://unco.oudemo.com/_training/docs/superheroes.xml";
			$.ajax({
				type: "GET",
				dataType: "json",
				url: url,
				success: function(data){
			  		return data;
				}
			});

		}

	}

})();

module.exports.stubDemo = stubDemo;