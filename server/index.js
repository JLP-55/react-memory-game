// // !!! NOTE this is the working piece of code
// const express = require('express');
// // Import the ApolloServer class
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');

// // Import the two parts of a GraphQL schema
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

// const app = express();

// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async () => {
//   await server.start();
  
//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());
  
//   app.use('/graphql', expressMiddleware(server));

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

// // Call the async function to start the server
// startApolloServer();

/*
!!!	NOTE
Issue with reaching the graphql api endpoint.
Error "cannot get" on specific endpoint
spelling mistake perhaps? 
something wrong in typeDefs/resolvers

Express routes still here in case of future use
*/
const express = require("express");
const routes = require("./routes"); /*use apollo routes instead */

// all apollo-server requirements
// const {ApolloServer} = require("@apollo/server");
// const {expressMiddleware} = require("@apollo/server/express4");
// // error: cannot find module "./schemas" ???????? why?, answer: no index file in schemas
// const {typeDefs, resolvers} = require("./schemas");

const db = require("./config/connection");
const PORT = process.env.PORT || 3001;

// a new instance of an apollo server, passing in typeDefs and resolvers
// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers
// });

const app = express();

app.use(routes); /*use apollo routes instead*/

// const startApolloServer = async () => {

// 	await server.start();

	// Middleware go inside the startApolloServer
	app.use(express.urlencoded({ extended: false }));
	app.use(express.json());

	// mount express middleware on the graphql endpoint, imported above
	// so that there is only one endpoint
	// app.use("/graph", expressMiddleware(server));

	// have to sync the models on startup of the server
	db.once("open", () => {
		app.listen(PORT, () => {
			console.log(`server is listening at port ${PORT}`);
			// console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
		});
	});
// }

// startApolloServer();