$(document).ready(function() {
	
	$(document).on("click", ".clearWay", function() {
		way.remove();
	});
	
	way.watch("formData", function(value) {
		console.log('"formData" property changed.', value);
	});
	
});
