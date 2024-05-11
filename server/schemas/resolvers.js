// we require the model we want to query from
const {User} = require("../models");

const resolvers = {
	Query: {
		classes: async () => {
			// User.find will find the model of the user?
			return await User.find({});
		}
	}
};

module.exports = resolvers;