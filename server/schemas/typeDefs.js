const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    latestScore: Int
    winCount: [HighScores]
    lossCount:  [HighScores]
  }

  type Auth {
    token: ID!
    user: User 
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

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth 
  }
`;

module.exports = typeDefs;

// it is important to use the exact names used in the type Query so that the sever can access them
// eg, when you type school, get the [school] model
// see the resolver for what is being populated from the Query
