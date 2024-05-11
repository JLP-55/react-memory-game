const typeDefs = `
type User {
	_id: ID
	name: String
	email: String
}

type Query {
	classes: [User]
}
`;

module.exports = typeDefs;