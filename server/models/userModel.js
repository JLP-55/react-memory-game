const mongoose = require("mongoose");
const {Schema, Model} = require("mongoose");

const userProfile = new Schema (
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
		},
		// winCount: [{
		// 	type: Schema.Types.ObjectId,
		// 	ref: "userProfile"
		// }],
		// lossCount: [{
		// 	type: Schema.Types.ObjectId,
		// 	ref: "displossCount"
		// }]
	},
	{
		toJSON: {
			virtuals: true,
			getters: true
		},
		id: false,
	}
);

// virtual to get the number of wins the user has accumulated
// userProfile.virtual("winCount").get(function () {
// 	const schema = `${this.winCount.length}`;
// 	return schema
// });

// // virtual to get the number of losses the user has accumulated
// lossCount.virtual("lossCount").get(function () {
// 	const schema = `${this.lossCount.length}`;
// 	return schema
// });

// define User and set it's value to the new mongoose model
const User = mongoose.model("User", userProfile);
const errorHandler = (err) => console.log(err);

module.exports = User