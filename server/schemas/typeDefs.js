const typeDefs = `
type User {
	_id: ID
	name: String
	email: String
}

type Query {
	firstQuery: [User]
}
`;

module.exports = typeDefs;

/*
!!! has access to the model "User"
type Query {
	firstQuery: [User]	
}
*/