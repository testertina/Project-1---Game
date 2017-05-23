// window.addEventListener('DOMContentLoaded', function() {
// 	var button = document.getElementsByClassName("button");
// 	console.log(button);


// });

$(function() {
	console.log("DOM ready");

	$("#gamepage").css("visibility", "hidden");
	$("#instructions").css("visibility", "hidden");
	$("#scoreboard").css("visibility", "hidden");


	$("#beginGame").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#gamepage").css("visibility", "visible");
  			

  		});

  	});

	$("#howToPlay").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#instructions").css("visibility", "visible");
  			

  		});
  	});

  	$("#leaderboard").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#scoreboard").css("visibility", "visible");
  			

  		});

  	});


});
