const {User, HighScores} = require('../models');
const {signToken, AuthenticationError} = require("../utils/auth");

const resolvers = {
	Query: {
		user: async () => {/*ERROR:Cannot populate path `highscores` because it is not in your schema. Set the `strictPopulate` option to false to override.*/
			return await User.find({})/*.populate('highscores').populate({
				// what is the significance of the "path" and "populate"?
				path: 'highscores',
				populate: "user"
			})*/;
		},
		highscores: async () => {
			return await HighScores.find({});
		}
		// Use mutations for CRUD functionality
	},
		Mutation: {
			addUser: async (parent, {username, email, password}) => {
				// create a new use and define a new variable as said user
				console.log("User in resolver")
				const user = await User.create({username, email, password});
				console.log(user);
				// pass the user into the signToken function
				const token = signToken(user);
				return {user, token};
			},
			login: async (parent, {email, password}) => {
				// find a user, using a specific email
				const user = await User.findOne({email});

				// check to see if that user exists
				if(!user) {
					throw AuthenticationError
				};

				// await the confirmation of correct password
				const correctPw = await user.isCorrectPassword(password);

				// check if the password is correct
				if(!correctPw) {
					throw AuthenticationError
				};

				// sign token and return it
				const token = signToken(user);
				return {token, user};
			},
			updateTurns: async (parent, {overallTurns}, context) => {
				if (context.user) {
					const user = await User.findByIdAndUpdate(context.user._id, {
						/*What should I insert here?
						How do I get the turns from the client side and add them to the database?*/
						// put what I want to update here
						// use subdocument means I can use findbyidandupdate
					})

				}
				// look up user and get highscores based on the user.
			}
		}
};

module.exports = resolvers;
