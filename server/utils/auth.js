const {GraphQLError} = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "secret"/*define this in an environment variable later + change the secret*/
const expiration = "2h";

module.exports = {
	AuthenticationError: new GraphQLError("couldn't authenticate the user", {
		extensions: {
			code: "UNAUTHENTICATED"
		}
	}),
	signToken: function ({username, email, _id}) {
		const payload = {username, email, _id};
		return jwt.sign({data: payload}, secret, {expiresIn: expiration});
	}
}