$(document).ready(function() {
	
	$(document).on("click", ".clearWay", function() {
		way.clear();
	});

	way.watchAll(function(selector, value) {
		console.log("Something changed.", {
			selector: selector,
			value: value
		});
	});
	
});
