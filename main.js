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
  			$("#gamepage").css("visibility", "visible"); // Make gamepage visible.
  			// document.getElementById("audioBG").play(); // Play background audio.
  			var count = 0;
  			document.getElementById("pts").innerHTML = count;
  			var outcome = "";


  			// Hide outcome bar

  			$("#outcome").css("visibility", "hidden");

  			// Spaceship needs to appear and rotate with cursor.

  			var shipCenter=[$("#ship").offset().left + $("#ship").width() / 2, $("#ship").offset().top + $("#ship").height() / 2];


  			$(document).mousemove(function(e) {
  				// console.log(event.pageY);
  				// console.log(event.pageX);
  				var radAngle = Math.atan2((e.pageX - shipCenter[0]),-(e.pageY - shipCenter[1]));
 				var degAngle = (radAngle * (180 / (Math.PI)));
 				console.log(degAngle);
 				
 			// 	if (45 > degAngle > 0) {
   	// 				 degAngle = (degAngle);
				// } else if (90 > degAngle > 45) {
   	// 				degAngle = (degAngle * 0.5);
				// }

	  			$("#ship").css({'transform' : 'rotate('+ (degAngle) +'deg)'});
			});

  			// Spaceship laser beam must be hidden and called only when the user clicks.

			$("#beam").css("visibility", "hidden");
			$("#gamepage").click(function () {
  				beam("#beam");
  			})

  			// Asteroids need to be hidden on page load.

  			$("#a1").css("visibility", "hidden");
  			$("#a2").css("visibility", "hidden");
  			$("#a3").css("visibility", "hidden");
  			$("#a4").css("visibility", "hidden");
  			$("#a5").css("visibility", "hidden");
  			$("#a6").css("visibility", "hidden");

  			// XPs need to be hidden on load.

  			$("#XP1").css("visibility", "hidden");
  			$("#XP2").css("visibility", "hidden");
  			$("#XP3").css("visibility", "hidden");
  			$("#XP4").css("visibility", "hidden");
  			$("#XP5").css("visibility", "hidden");
  			$("#XP6").css("visibility", "hidden");

  			// Asteroids need to move across the gamepage randomly. Asteroids are called here.
  			
  			move("#a1");
  			clickCheck("#a1", "#XP1", "#a2");
  			clickCheck("#a2", "#XP2", "#a3");
  			clickCheck("#a3", "#XP3", "#a4");
  			clickCheck("#a4", "#XP4", "#a5");
  			clickCheck("#a5", "#XP5", "#a6");
  			final("#XP6", '#a6');

  			// Functions to make asteroids move in the first round. Using .animate. 10 functions for random movements.

  			function move (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 400, right: 200}).animate({left:"400px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");

	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
					outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move2 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 700, left: 210}).animate({left:"850px"}, 5000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
					outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move3 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 500, left: 1050}).animate({left:"500px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
					outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move4 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 750, left: 300}).animate({top:"0px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
		  			outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move5 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 500, left: 210}).animate({left:"450px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
		  			outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
		  		});
  			};

  			function move6 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
		  			outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move7 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 850, left: 830}).animate({top:"-25px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
		  			outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move8 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 650, left: 210}).animate({left:"850px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
		  			outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move9 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 480, left: 1050}).animate({left:"500px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
		  			outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};

  			function move10 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
		  				$(x).remove();
		  				return "Game Over!";
		  			}, 1000);
		  			outcome = "MISSION FAILED";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
	  			});
  			};


  			// Need a function that checks if an asteroid has been clicked.  If it has the next asteroid is called with a random move.

  			function clickCheck (x, y, z) {

	  			$(x).click(function (event) {
	  				beam("#beam");
		  			$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function () {
	  					addPoints();	// Points need to be updated.
  						$(x).stop().remove();
	  					$(y).css("visibility", "visible");  // XP bar needs to increase
	 
					}, 1000);

	  				var choice = Math.floor(Math.random() * 10);

	  				if (choice === 0) {
	  					move(z);
	  					return choice;
	  				} else if (choice === 1) {
	  					move2(z);
	  					return choice;
	  				} else if (choice === 2) {
	  					move3(z);
	  					return choice;
	  				} else if (choice === 3) {
	  					move4(z);
	  					return choice;
	  				} else if (choice === 4) {
	  					move5(z);
	  					return choice;
	  				} else if (choice === 5) {
	  					move6(z);
	  					return choice;
	  				} else if (choice === 6) {
	  					move7(z);
	  					return choice;
	  				} else if (choice === 7) {
	  					move8(z);
	  					return choice;
	  				} else if (choice === 8) {
	  					move9(z);
	  					return choice;
	  				} else {
	  					move10(z);
	  					return choice;
	  				} 

	  			});
	  		};

	  		// Need a final clickCheck function to see if the last asteroid is clicked.

	  		function final (y, z) {
	  			$(z).click(function (event) {
	  				beam("#beam");
	  				$(z).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
		  			setTimeout(function(){
		  				$(y).css("visibility", "visible"); // XP bar needs to increase
		  				addPoints(); // Points need to be updated.
		  				$(z).stop().remove();
		  			}, 1000);
		  			setTimeout(function () {
		  			outcome = "MISSION COMPLETE!";
		  			document.getElementById("outcome").innerHTML = outcome;
		  			$('#outcome').css("visibility", "visible");
		  		}, 1500);
	  				
	  			});
	  		};

	  		// Need a function beam, which displays the laser beam when the player clicks.

	  		function beam (x) {
	  			$(x).css("visibility", "visible");
  				$(x).fadeIn(100);
  				$(x).fadeOut(100);
  			};

  			// Function to add points when user clicks on an asteroid.

  			function addPoints () {
  				count = count + 5;
  				console.log(count);
  				document.getElementById("pts").innerHTML = count;
  				return count;
  			}
	  		// Make a quit button which returns user back to homepage and resets the game when clicked.

  			$("#quit").click(function (event) {
  				location.reload();
  			});

  			// To determine ships coordinates.
  			// $("#gamepage").click(function (event) {
  			// 	var ship = event.pageX + ' , ' + event.pageY;
  			// 	console.log(ship);
  				
  			// })

  		});

  	});

	// Click event to show instructions. Upon click of "how to play" button the instruction page becomes visible.

	$("#howToPlay").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#instructions").css("visibility", "visible");
  			$("#home").click(function (event) {
  				location.reload();
  			});

  		});
  	});

	// Click event to show leaderboard. Upon click of "leaderboard" button the leaderboard page becomes visible.

  	$("#leaderboard").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#scoreboard").css("visibility", "visible");
  			

  		});

  	});


});