<p align="center">
<img align="center" src="assets/images/background.jpg" width="100%" alt="NBA Draft Game"/>
</p>

# HEROKU APP

http://nbadraft.herokuapp.com/

# SUMMARY

On this Click-Function Application Project, I've created a quick mini-game for a new NBA Team -"Las Vegas, Stallions" and their NBA Draft. Players are given a Salary Cap at the beginning of the game, and have to match the exact given salary cap by clicking on different available players. Each time the game is restarted, the salary cap is randomized and the players have different salary value. Players can click on the same draft players multiple times as long as it does not exceed the given salary cap. Wins and Losses are recorded at the end of each round. P.S. please enjoy the gif(t) :)

# APP FUNCTIONS

This application demonstrates the use of math.random, which randomizes a number from selected range of variables - math.floor. Each player is given a variable of n1-n8. After the application selects a random number for both the salary cap and value of each player, on-click functions determine a conditonal statements - IF userTotal + n# (player variables) = Random Number (Salary Cap), player wins & ELSE IF userTotal > Random Number, player loses. Both winning and losing of the game will have an alert function and append the results to score counter. 

# OBSTACLES

The main obstable for this project was appending all functions to one component. I had to set up the random numbers per variable, then outline the functions which one click has to call - adding to the total number, script for not passing the total number, script for passing the total number, counting the score board, and making it reset again. It seemed very easy as a sketch, but had to re-code many times to find the best algorithm to make it work all together. 

# COPYRIGHT

Terry Kim, 2018 - All rights reserved. 
Photos - ESPN
GIF - SB*Nation