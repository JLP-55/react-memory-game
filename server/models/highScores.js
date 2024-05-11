const mongoose = require("mongoose");
const {Schema, Model} = require("mongoose");

const leaderboard = new Schema (
	{
		// _id: {
		// 	type: Schema.Types.ObjectId
		// }
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

const Leaderboard = mongoose.model("Leaderboard", leaderboard);
const errorHandler = (err) => console.log(err);

module.exports = Leaderboard;