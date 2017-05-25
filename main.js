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
  			document.getElementById("audioBG").play(); // Play background audio.
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

  			$("#a1, #a2, #a3, #a4, #a5, #a6").css("visibility", "hidden");

  			// XPs need to be hidden on load.

  			$("#XP1, #XP2, #XP3, #XP4, #XP5, #XP6").css("visibility", "hidden");

  			// Asteroids need to move across the gamepage randomly. Asteroids are called here.
  			
  			move3("#a1");
  			clickCheck("#a1", "#XP1", "#a2");
  			clickCheck("#a2", "#XP2", "#a3");
  			clickCheck("#a3", "#XP3", "#a4");
  			clickCheck("#a4", "#XP4", "#a5");
  			clickCheck("#a5", "#XP5", "#a6");
  			final("#XP6", '#a6');
  			

  			// Function to return gameover if player does not click on asteroid.

	  		function gameOver () {
		  		setTimeout(function () {
					outcome = "MISSION FAILED";
			  		document.getElementById("outcome").innerHTML = outcome;
			  		$('#outcome').css("visibility", "visible");
			  	}, 1000);
			};

			// Functions to make asteroids move in the first round. Using .animate. 10 functions for random movements.

			function animatedAsteroidsHori (x, a, b, c) {
				$(x).offset({top: a, right: b}).animate({left: c}, 10000, "linear", function () {
		  			$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
		  			setTimeout(function () {
				  		$(x).remove();
				  	}, 1000);
		  			gameOver();
				});
			}

			function animatedAsteroidsHori2 (x, a, b, c) {
				$(x).offset({top: a, left: b}).animate({left: c}, 10000, "linear", function () {
		  			$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
		  			setTimeout(function () {
				  		$(x).remove();
				  	}, 1000);
		  			gameOver();
				});
			}			

			function animatedAsteroidsVert (x, a, b, c) {
				$(x).offset({top: a, right: b}).animate({top: c}, 10000, "linear", function () {
		  			$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
		  			setTimeout(function () {
				  		$(x).remove();
				  	}, 1000);
		  			gameOver();
				});
			}


  			function move (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsVert(x, 350, 200, "450px");

  			};

  			function move2 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsHori(x, 580, 210, "850px");
  			};

  			function move3 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsHori2(x, 200, 1000, "500px");

  			};

  			function move4 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsHori2(x, 550, 1000, "0px");

  			};

  			function move5 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsHori(x, 500, 210, "850px");

  			};

  			function move6 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsVert(x, 100, 1050, "500px");

  			};

  			function move7 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsHori(x, 600, 1000, "850px");

  			};

  			function move8 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsVert(x, 200, 210, "500px");

  			};

  			function move9 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsVert(x, 480, 1050, "0px");

  			};

  			function move10 (x) {
  				$(x).css("visibility", "visible");
  				animatedAsteroidsHori2(x, 300, 1050, "500px");

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

	  		// Next round!

	  		// function round2 (x, y, z) {
	  		// 	$('#outcome').css("visibility", "hidden");
		  	// 	moveTwo(x);
		  	// 	clickCheck2(y, z)
	  		// };

	  		// // Round 2 move functions
  			// function moveTwo (x) {
  			// 	$('#outcome').css("visibility", "hidden");
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 400, right: 200}).animate({left:"400px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");

	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
					// outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move2Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 700, left: 210}).animate({left:"850px"}, 5000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
					// outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move3Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 500, left: 1050}).animate({left:"500px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
					// outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move4Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 750, left: 300}).animate({top:"0px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
		  	// 		outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move5Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 500, left: 210}).animate({left:"450px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
		  	// 		outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
		  	// 	});
  			// };

  			// function move6Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
		  	// 		outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move7Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 850, left: 830}).animate({top:"-25px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
		  	// 		outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move8Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 650, left: 210}).animate({left:"850px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
		  	// 		outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move9Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 480, left: 1050}).animate({left:"500px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
		  	// 		outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

  			// function move10Two (x) {
  			// 	$(x).css("visibility", "visible");
	  		// 	$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 10000, "linear", function () {
	  		// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
		  	// 			$(x).remove();
		  	// 			return "Game Over!";
		  	// 		}, 1000);
		  	// 		outcome = "MISSION FAILED";
		  	// 		document.getElementById("outcome").innerHTML = outcome;
		  	// 		$('#outcome').css("visibility", "visible");
	  		// 	});
  			// };

	  		// // Round 2 clickCheck function


  			// function clickCheck2 (x, y, z) {

	  		// 	$(x).click(function (event) {
	  		// 		beam("#beam");
		  	// 		$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  		// 		setTimeout(function () {
	  		// 			addPoints();	// Points need to be updated.
  			// 			$(x).stop().remove();
	  		// 			$(y).css("visibility", "visible");  // XP bar needs to increase
	 
					// }, 1000);

	  		// 		var choice = Math.floor(Math.random() * 10);

	  		// 		if (choice === 0) {
	  		// 			moveTwo(z);
	  		// 			return choice;
	  		// 		} else if (choice === 1) {
	  		// 			move2Two(z);
	  		// 			return choice;
	  		// 		} else if (choice === 2) {
	  		// 			move3Two(z);
	  		// 			return choice;
	  		// 		} else if (choice === 3) {
	  		// 			move4Two(z);
	  		// 			return choice;
	  		// 		} else if (choice === 4) {
	  		// 			move5Two(z);
	  		// 			return choice;
	  		// 		} else if (choice === 5) {
	  		// 			move6Two(z);
	  		// 			return choice;
	  		// 		} else if (choice === 6) {
	  		// 			move7Two(z);
	  		// 			return choice;
	  		// 		} else if (choice === 7) {
	  		// 			move8Two(z);
	  		// 			return choice;
	  		// 		} else if (choice === 8) {
	  		// 			move9Two(z);
	  		// 			return choice;
	  		// 		} else {
	  		// 			move10Two(z);
	  		// 			return choice;
	  		// 		} 

	  		// 	});
	  		// };

	  		// Need a function beam, which displays the laser beam when the player clicks.

	  		function beam (x) {
	  			$(x).css("visibility", "visible");
  				$(x).fadeIn(100);
  				$(x).fadeOut(100);
  				
  				document.getElementById("audioLaser").play(); // Play laser audio.
  				
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