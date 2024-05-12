const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true
		},
		latestScore: {
			type: Number,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
		},
		winCount: [{
			type: Schema.Types.ObjectId,
			ref: "Class"
		}],
		lossCount: [{
			type: Schema.Types.ObjectId,
			ref: "Class"
		}]
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

const User = model('User', userSchema);
const errorHandler = (err) => console.log(err);

module.exports = User;
