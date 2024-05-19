const db = require("../config/connection");
const {User, HighScores} = require("../models");
const cleanDB = require("./cleanDB");

const userData = require("./userdata.json");
const highScoreData = require("./highScoreData.json");

db.once("open", async () => {
	await cleanDB("User, user");
	await cleanDB("HighScores, highscores");

	const user = await User.insertMany(userData);
	const highscores = await HighScores.insertMany(highScoreData);

	console.log("finished adding data");
	process.exit(0);
});