const typeDefs = `
	type User {
		_id: ID
		username: String
		email: String
		password: String
		scores: Int
		latestScore: Int
		winCount: [HighScores]
	}

	type Auth {
		token: ID!
		user: User 
	}

	type HighScores {
		_id: ID
		user: [User] 
		streak: Int
		wins: Int
		losses: Int
		overallTurns: Int
	}

	type Query {
		user: [User]
		highscores: [HighScores]
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth 
		login(email: String!, password: String!): Auth
		updateTurns(overallTurns: Int!): HighScores
	}
`;
		// error, HighScores not defined, @ line 33

module.exports = typeDefs;

// it is important to use the exact names used in the type Query so that the sever can access them
// eg, when you type school, get the [school] model
// see the resolver for what is being populated from the Query
