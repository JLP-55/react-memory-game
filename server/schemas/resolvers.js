const {User, HighScores} = require('../models');
const {signToken, AuthenticationError} = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {/*ERROR:Cannot populate path `highscores` because it is not in your schema. Set the `strictPopulate` option to false to override.*/
      return await User.find({})/*.populate('highscores').populate({
        // what is the significance of the "path" and "populate"?
        path: 'highscores',
      });*/
    },
    highscores: async () => {
      return await HighScores.find({});
    }
    // Use mutations for CRUD functionality
  },
    Mutation: {
      addUser: async (parent, {username, email, password}) => {
        // create a new use and define a new variable as said user
        const user = await User.create({username, email, password});
        // pass the user into the signToken function
        const token = signToken(user);
        return {user, token};
      }
    }
};

module.exports = resolvers;
