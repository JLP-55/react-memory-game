## TODO next:

- go through week18 homework to set up the schemas? At least use the models as some kind of scaffold for models in this react application

**currently:**
- am unable to sign in, receive an error on the front end. See comments in `client/src/pages/signup` and look at the variable `handle form submit`

**TODO**
- enable PWA functionality
- finish front-end and the memory game
- find and look into the activity `tech thoughts`/`whats on your techy mind` for how to do user authentication/decode with JWT's `week21/day_03/activity_24`
- don't forget about week 18 for mongoose activities to refer to
- don't forget about week 19 for pwa activities to refer to

### Presentation requirments

- elevator pitch
- concept - description, motivation, user story
- process - technologies challenges, successes
- demonstration
- future development - other features,
- links to deployed application, repo

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

# DELETE EVERYTHING ABOVE BEFORE SUBMITING

### Description

This is the final project for coding bootcamp where we were required to build a full stack web application using React.<br>
I have chosen a relativly simple project, an online game of memory, where you turn over cards and collect matches when you come across them.<br>

### Installation

Should you wish to install the source code and add to this project, simply:<br>

- clone the repository
- navigate to the directory
- run `npm install`from the root directory <!-- test that this command actually works from a fresh git clone directory -->
- then run `npm run start`from the same directory

You should have a working version of the application ready test and make changes to.

### Deployed application

Here is a [link](https://link.com) to the live webpage

### Screenshots

### Features

In using this application, you will be able to create an an account (in fact, you will be required to sign up to view the rest of the application), and after doing so, will then be able to start/restart a game, by pressing the start game and randomise cards buttons respectively.<br>
###### Future development?
The user will also be able to keep track of how many turns they have taken as well as the wins and losses they have accrued against other players.<br>
Furthermore, the user will be able to download the application and use it offline, without requiring an internet connection.<br>

### Technologies used

This project has made use of a wide range of different Javascript packages, all of which are listed below.<br>

**Dependancies**

_Server_
-    ["@apollo/server"](https://www.npmjs.com/package/@apollo/server)
-    ["bcrypt"](https://www.npmjs.com/package/bcrypt)
-    ["dotenv"](https://www.npmjs.com/package/dotenv)
-    ["express"](https://www.npmjs.com/package/express)
-    ["graphql"](https://www.npmjs.com/package/graphql)
-    ["jsonwebtoken"](https://www.npmjs.com/package/jsonwebtoken)
-    ["mongoose"](https://www.npmjs.com/package/mongoose)
_Client_
-    ["@apollo/client"](https://www.npmjs.com/package/@apollo/client)
-    ["jwt-decode"](https://www.npmjs.com/package/jwt-decode)
-    ["react"](https://www.npmjs.com/package/react)
-    ["react-dom"](https://www.npmjs.com/package/react-dom)
-    ["react-router-dom"](https://www.npmjs.com/package/react-router-dom)

**Dev dependancies**

_Server_
-    ["nodemon": "^3.1.0"](https://www.npmjs.com/package/nodemon)
_Client_
-	 ["@types/react": "^18.2.15",](https://www.npmjs.com/package/@types/react)
-	 ["@types/react-dom": "^18.2.7",](https://www.npmjs.com/package/@types/react-dom)
-	 ["@vitejs/plugin-react": "^4.0.3",](https://www.npmjs.com/package/@vitejs/plugin-react)
-	 ["eslint": "^8.45.0",](https://www.npmjs.com/package/eslint)
-	 ["eslint-plugin-react": "^7.32.2",](https://www.npmjs.com/package/eslint-plugin-react)
-	 ["eslint-plugin-react-hooks": "^4.6.0",](https://www.npmjs.com/package/eslint-plugin-react-hooks)
-	 ["eslint-plugin-react-refresh": "^0.4.3",](https://www.npmjs.com/package/eslint-plugin-react-refresh)
-	 ["vite": "^4.4.5"](https://www.npmjs.com/package/vite)

### Credits

I was heavily inspired by the video series [Make a memory game with React](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm) by Net Ninja for much of the front end source code. Follow the link to see his work or for a step by step guide on the creation of your own version of this application.

### Licence
MIT Licence
