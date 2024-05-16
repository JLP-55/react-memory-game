const {GraphQLError} = require("graphql");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET
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