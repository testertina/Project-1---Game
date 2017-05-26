# Tina Rocks Read Me

## Motivation

The aim of the project was to build a browser based game. The game had to be built using HTML, CSS and JavaScript to demostrate the skills we have learned.

### The Game

**Tina Rocks** is a free browser based single player game. 

The aim of the game is to destroy the incoming asteroids, by clicking on them, before they collide with the player's ship or the sides of the gamepage. The player controls the ship using a trackpad or mouse.

The following package managers were included for this game: 

* **Audio**: this was to enable a background sound and sound effects when shooting the laser beam.

## Initial plan

The inital plan was to create a game with three rounds.  

* Round 1: 6 asteroids moving randomly with a slow speed.
* Round 2: 6 asteroids moving randomly with a varying speeds.
* Round 3: 8 asteroids of different sizes moving randomly with slow speeds.

At the end of the game the user was to input their name and their score would be added to a leaderboard.  

A detailed plan is outlined below.

### How to play

* Start as a spaceship in the center of the screen, as asteroids approach you must click on them to disintegrate them.
* Your XP and points boost with each destroyed asteroid.
* Once XP bar is filled, the speed of the asteroids increase in the next round.
* Third round the size of the asteroid decrease/vary. Speed remains the same as round 2.
* Fourth round the speed of the asteroids increase.
* Fifth round you get asteroids and comets/space junk. 
* At the end of the game the users points get added to the leaderboard.

### Logic

* The title screen needs to load.
* Buttons for begin game, how to play, leaderboard.
* Swipe homescreen up and load game if begin game is selected.
* On gamepage there should be an XP bar and a points bar which increase with each asteroid.
* Player must be able to click on the asteroids and it should explode.  
* If the asteroid reaches the player then it is game over.
* If the player sucessfully destroys all asteroids in the round then the XP bar is filled and they move on to the next round where the XP bar resets.
* At the end of the game user should be prompted with a scoreboard so user can add their name to input their time it took to solve.  So we can create a leaderboard.


**HTML**

Homepage

* Asteroids title (div h1)
* Begin game button - pop up with gamepage. (div h2)
* Instructions button - pop up with instructions. (div h2)
* Leaderboard button to check high scores. (div h2)

Gamepage

* Background set to image
* Spaceship (div)
* 12 asteroids coming in sporadically (divs)
* XP bar (div)
* Points bar (div)
* Quit button (returns to homepage)

Instructions

* Background set to image
* Instructions title (div h1)
* Instructions text (div h2)
* Begin game button (div)
* Back to homepage button (div)

Leaderboard

* Leaderboard title (div h1)
* Array containing inputted user names and corresponding scores. (Array)
* Back to homepage button (div).

**CSS**


**Javascript and jQuery**

Homepage

* Load page
* Event handlers for begin game button, instructions button and leaderboard button


Gamepage

* set Interval 12 asteroids coming in sporadically (divs)
* setInterval XP bar (div)
* setInterval Points bar (div)
* Event handler Quit button.
* Click event handler which use explosion gif when asteroids are clicked.

Instructions

* Event handler begin game button (div)
* Event handler back to homepage button (div)

Leaderboard

* Append: Array containing inputted user names and corresponding scores. (Array)
* event handler back to homepage button (div). 


## Progress

Provide code examples and explanations of how to get the project.

* First step: Get the homepage set up.  

Created a div within the body of the HTML which incases the option buttons "begin game", "instructions" and "leaderboard".  Styling type is to remain consistent for each page and set via CSS.  A space theme background is chosen for each page, with Courier New font styling and white font colour.  The homepage div has a grey background. Buttons are grey with black borders.

* Second step: set up the gamepage.

Created a div which incased the asteroids and spaceship.  The chosen background of the gamepage section was a gif of outer space, to allow the player to feel as though they were hurtling through space as they played.

* Third step: The gamepage, instructions and leaderboard should not be visibile on the load of the homepage.

The pages can be hidden upon page load using .css("visibility", "hidden").

* Fourth step: Link the gamepage with the "begin game button". 

The functionality is to have the homepage disappear upon click of the "begin game" button on the homepage, and then have the gamepage appear.  This is achieved by .click method in jquery on the "begin game" button, to change the visibiiity of the homepage div to hidden and the visibility of the gamepage to visible.

* The asteroids should not be visibile upon load of the gamepage.

The asteroids can be hidden upon page load using .css("visibility", "hidden").

* Need to create an outcome div within the gamepage that will become visible upon either losing or winning the game.  

Created a div in gamepage div. Set to hidden using css upon load of the gamepage. 

* The asteroids need to move randomly across the gamepage section.

Create a functions "moveX(asteroid id)" (X from 1 to 10), which make the chosen asteroid visible and then move the asteroid from their initial start position (chosen by .offset) to their desired position using .animate().  If the asteroid reached its final position then the game is over. Make var outcome equal to "Mission Failed", and change the innerHTML element of the outcome div to outcome.

Use Math.floor and Math.random to generate a random number from 0 to 9. Then use an if statement to assign a number to a function, if that number is chosen then run its assigned move function.

* The asteroids need to explode once the player clicks on them.

Use a .click method on the asteroids by assigning each asteroid an id, upon the click use .stop() to stop the animation and .remove() to remove the asteroid.  Within this function the random move function is called to get the next asteroid moving.

* Need a final clickCheck function to check when the final asteroid is clicked and print outcome of the game to screen.

Use a .click method with .remove and .stop but this time do not call another move function.  Instead chnaged the innerHTML element of the outcome div to "MISSION SUCCESSFUL!".
Tests

* Need to make the pointer of the ship follow the mouse pointer.

Use .mousemove element with .eventY and eventX to determine co ordinates of the mouse pointer.  Take away the corodinates of the center of the ship.  Use the arctan2 function to determine the angle of movement.  Use .css transform with rotate to rotate the ship by the calculated angle.

* Would like to add a laser beam.

Created a div within the ship div and styled it in CSS to look like a beam. Made its visibility hidden at first and onclick it fades in and fades out.

Describe and show how to run the tests with code examples.

##Contributors

Ollie Holden, Niall Wallace, SDET-8, WebDev4.

## References

Asteroid photo

star trek theme

pew pew

background gif