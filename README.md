## TODO next:

- go through week18 homework to set up the schemas? At least use the models as some kind of scaffold for models in this react application

**currently:**
- am unable to post using generic express routes
- am unable to query using graphql endpoint - see relevant files for notes on error messages

- find and look into the activity `tech thoughts`/`whats on your techy mind` for how to do user authentication/decode with JWT's `week21/day_03/activity_24`
- don't forget about week 18 for mongoose activities to refer to
- don't forget about week 19 for pwa activities to refer to

### Project Description

This will be an online game of memory (collect pairs of cards to score points from a standard 52 card deck, laid face down)<br>
The goal will be to also have a way for users to play with other players who are online, as well as be able to take the application offline as a progressive web app<br>

### Project requirments

* Use React for the front end.

* Use GraphQL with a Node.js and Express.js server.

* Use MongoDB and the Mongoose ODM for the database.

* Use queries and mutations for retrieving, adding, updating, and deleting data.

* Be deployed using Heroku (with data).

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Include authentication (JWT).

* Protect sensitive API key information on the server.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).

* Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

### User story

As a boardgame enthusiast, I would like to be able to play online, so that I can interact with other fellow board game enthusiasts. 

### Acceptance Criteria

When I open the game in the browser,<br>
Then I see the game of memory set up and ready to play.<br>
When I want start the game,<br>
Then I can turn over the first pair of tiles to begin my turn.<br>
When I get a match of cards,<br>
Then my score increases by one.<br>
When I find all the matches,<br>
Then the amount of turns it took me to finish the game are displayed.<br>
When I want to play with other players,<br>
Then I have to sign up and create an account.<br>
When I play against other players,<br>
Then I have to take turns with them.<br>
When I find a match against an online player,<br>
Then my score increases by one AND I get another turn.<br>
When I either win or loose against a player,<br>
Then my running win/loss tally is updated.<br>
When I want to play offline against a person in real life,<br>
Then I can install the application and play without an internet connection, taking turns with another player on the same machine.<br>
