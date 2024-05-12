const { User, HighScores} = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return await User.find({}).populate('highscores').populate({
        // what is the significance of the "path" and "populate"?
        path: 'highscores',
      });
    },
    highscores: async () => {
      return await HighScores.find({});
    },
  }
};

module.exports = resolvers;
