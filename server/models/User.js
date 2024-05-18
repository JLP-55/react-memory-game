const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new Schema(
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
		password: {
			type: String,
			required: true,
			minLength: 8
		},
		latestScore: {
			type: Number,
		},
		wincount: [{
			type: Schema.Types.ObjectId,
			// we don't define the reference to Highscores model here, do it in the typeDefs
			ref: "Highscores"
		}],
	}
);

// middleware to create a password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare incoming password with hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

// virtual to get the number of wins the user has accumulated
userSchema.virtual("otherWinCount").get(function () {
	const schema = `${this.winCount.length}`;
	return schema
});

// // virtual to get the number of losses the user has accumulated
// lossCount.virtual("lossCount").get(function () {
// 	const schema = `${this.lossCount.length}`;
// 	return schema
// });

// define User and set it's value to the new mongoose model
const User = model('User', userSchema);
const errorHandler = (err) => console.log(err);

module.exports = User;
