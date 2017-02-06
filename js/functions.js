(function($) {

    "use strict"; // Start of use strict
	$(document).ready(function(){
		$("#MilanButton").click(function(){
			$("#GraceText").hide();
			$("#GraceImg").hide();
			$("#YungmiText").hide();
			$("#YungmiImg").hide();
			$("#MilanText").show();
			$("#MilanImg").show();
		});

	});

	$(document).ready(function(){
		$("#GraceButton").click(function(){
			$("#MilanText").hide();
			$("#MilanImg").hide();
			$("#YungmiText").hide();
			$("#YungmiImg").hide();
			$("#GraceText").show();
			$("#GraceImg").show();
		});

	});

	$(document).ready(function(){
		$("#YungmiButton").click(function(){
			$("#GraceText").hide();
			$("#GraceImg").hide();
			$("#MilanText").hide();
			$("#MilanImg").hide();
			$("#YungmiText").show();
			$("#YungmiImg").show();
		});

	});

	

})(jQuery); // End of use strict
