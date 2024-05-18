const { Schema, model } = require('mongoose');
const {User} = require("./User.js");

const scores = new Schema(
	{
		// user: {
		// 	type: String,
		// 	required: true,
		// 	unique: false,
		// },
		streak: {
			type: Number,
			required: true,
			unique: false 
		},
		wins: {
			type: Number
		},
		losses: {
			type: Number
		},
		overallTurns: {
			type: Number
		}
	},
	{
		toJSON: {
			getters: true,
			virtuals: true
		},
		id: false
	}
);

// highscores should be a subdocument
const HighScores = model('HighScores', scores);
const errorHandler = (err) => console.log(err);

module.exports = HighScores;
