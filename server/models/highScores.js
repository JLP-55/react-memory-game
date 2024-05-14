const { Schema, model } = require('mongoose');

const scores = new Schema(
	{
		user: {
			type: String,
			required: true,
			unique: false,
		},
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
		}
	}
);

const HighScores = model('HighScores', scores);
const errorHandler = (err) => console.log(err);

module.exports = HighScores;
