# A Game of Memory

### Table of contents

[Description](#description)<br>
[Side note](#side-note)<br>
[Installation](#installation)<br>
[How to play](#how-to-play)<br>
[Links](#links)<br>
[Screenshots](#screenshots)<br>
[Features](#features)<br>
[Future development](#future-development)<br>
[Technologies used](#technologies-used)<br>
[Credits](#credits)<br>
[Licence](#licence)

## Description

This is the final project for coding bootcamp where we were required to build a full stack web application using React as the view engine, as well as various node.js packages for the back end.<br>
While in theory this is a relativly simple project, it should serve as a great way to piece together all that has been learned over the past six monthes into a fully featured web application.<br>

#### Side note
This project is in an unfinished state, with only a minimal number of the overall planned features implemented. There are plenty more features coming but as of now, only a basic application exists.<br>

### Installation

Should you wish to install the source code and add to this project, or even modify it for your own purposes, simply:<br>

- clone the repository
- navigate to the directory
- run `npm install` from the root directory 
- then run `npm run develop` from the same directory to get the project up and running

You should have a working version of the application ready test and make changes to.

### How to play

The basics of the game are quite simple, you turn over cards and collect matches when you come across them.<br>
You will only be able to match similar colours with their equivalent numbers, so the ten of hearts and diamonds are a legitimate match, as are the five of clubs and spades.

### Links

Here is a [link](https://memory-game-react-app-d89d6af4da07.herokuapp.com/) to the live webpage<br>
Here is a [link](https://github.com/JLP-55/react-memory-game) to the Github repository

### Screenshots

**a brief view of the application displayed in the browser, showing the matching cards a player has found**

<img src="./images/screenshot.PNG" width="650px" height="100%">

### Features

In using this application, you will be able to create an an account (in fact, you will be required to sign up to view the rest of the application)<br> 
After doing so, will then be able to start/restart a game, by pressing the start game and randomise cards buttons respectively.<br>
Upon starting a new game, the user will be prompted to flip cards over to find a match.<br>
Once matches have been found, the matched cards will remain in the face up position.<br>
If all matches have been found, the user will be able to begin a new game by pressing the randomise cards button, or, can begin a new game whenever they like.

### Future development

As stated above in the project description, only a minimal number of the overall amount of features intended to be implemented are actually present in this version of the project.<br>
In future versions of this application, the user should be able to:

- Play against other players online
- Keep track of how many turns they have taken as well as the wins and losses they have accrued against other players
- Have their scores displayed on the overall player leaderboard
- Chat to other players online
- Create friend requests for other players, as well as block other players if they so desire

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

I was heavily inspired by the video series [Make a memory game with React](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm) by Net Ninja for much of the front end source code.<br> 
Follow the link to see his work or for a step by step guide on the creation of your own version of this application.

### Licence
MIT Licence
