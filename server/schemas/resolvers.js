// we require the model we want to query from
const {User} = require("../models");

const resolvers = {
	Query: {
		firstQuery: async () => {
			// User.find will find the model of the user?
			// error cannot read properties of undefined (reading "find")
			// !!! NOTE
			// in changing the imported variable User, we still get the same error.
			// could be some kind of spelling mistake? Are we importing the right model?
			return await User.find({});
		}
	}
};

module.exports = resolvers;