# Tina Rocks Read Me

## Synopsis

The aim of the project was to build a browser based game. The game had to be built using HTML, CSS and JavaScript to demostrate the skills we have learned.

### The Game

**Tina Rocks** is a free browser based single player game. 


The aim of the game is to destroy the incoming asteroids, by clicking on them, before they collide with the player's ship or the sides of the gamepage. The player controls the ship using a trackpad or mouse.

The following package managers were included for this game: 

* **Audio**: this was to enable a background sound and sound effects when shooting the laser beam.

# Motivation

## Initial plan

The inital plan was to create a game with three rounds.  

* Round 1: 6 asteroids moving randomly with a slow speed.
* Round 2: 6 asteroids moving randomly with a varying speeds.
* Round 3: 8 asteroids of different sizes moving randomly with slow speeds.

At the end of the game the user was to input their name and their score would be added to a leaderboard.  

A detailed plan is outlined below.

### How to play

* Start as a spaceship in the center of the screen, as asteroids approach you must click on them to disintergrate them.
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


Tests

Describe and show how to run the tests with code examples.

##Contributors

Ollie Holden, Niall Wallace, SDET-8, WebDev4.

## References

Asteroid photo

star trek theme

pew pew

background gif