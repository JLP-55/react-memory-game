const typeDefs = `
  type User {
    _id: ID
    username: String
    latestScore: Int
    email: String
    winCount: [HighScores]
    lossCount:  [HighScores]
  }

  type HighScores {
    _id: ID
    user: String
    streak: Int
    wins: Int
    losses: Int
  }

  type Query {
    user: [User]
    highscores: [HighScores]
  }
`;

module.exports = typeDefs;

// it is important to use the exact names used in the type Query so that the sever can access them
// eg, when you type school, get the [school] model
// see the resolver for what is being populated from the Query
