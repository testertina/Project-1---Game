// Load JS to webpage.

$(function() {
	console.log("DOM ready");

	// Hide gamepage, instructions and leaderboard.
	$("#gamepage").css("visibility", "hidden");
	$("#instructions").css("visibility", "hidden");
	$("#scoreboard").css("visibility", "hidden");

	// Click event to begin game. Upon click of "begin game" button the gamepage becomes visible.
	$("#beginGame").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#gamepage").css("visibility", "visible");
  			// Make a quit button which returns user back to homepage when clicked.
  			$("#quit").click(function (event) {
  				$("#gamepage").css("visibility", "hidden");
  				$("#homepage").show("slow", function () {
  				});	
  			});

  			// Spaceship needs to appear and rotate with cursor.


  			// Asteroids need to fly across screen

  			// $("#a1").css("visibility", "hidden");
  			// $("#a2").css("visibility", "hidden");
  			// $("#a3").css("visibility", "hidden");
  			// $("#a4").css("visibility", "hidden");
  			// $("#a5").css("visibility", "hidden");
  			// $("#a6").css("visibility", "hidden");


  			move("#a1");
  			clickCheck("#a1", "#a2");
  			clickCheck("#a2", "#a3");
  			clickCheck("#a3", "#a4");
  			clickCheck("#a4", "#a5");
  			clickCheck("#a5", "#a6");

  			function move (x) {
	  			$(x).animate({bottom:"800px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function clickCheck (x, y) {

	  			$(x).click(function (event) {
	  				$(x).css("visibility", "hidden");
	  				move(y);
	  			})
	  		};
  			
  			// XP bar needs to increase

  			// Points bar needs to increase

  		});

  	});

	// Click event to show instructions. Upon click of "how to play" button the instruction page becomes visible.
	$("#howToPlay").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#instructions").css("visibility", "visible");
  			

  		});
  	});

	// Click event to show leaderboard. Upon click of "leaderboard" button the leaderboard page becomes visible.
  	$("#leaderboard").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#scoreboard").css("visibility", "visible");
  			

  		});

  	});


});
