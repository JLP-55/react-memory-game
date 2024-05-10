const express = require("express");
const db = require("./config/connection");
// getting an error when routing the models/api endpoints:
// Error: Route.get() requires a callback function but got a [object Undefined]
const routes = require("./routes");/*create these later, comment out for now*/

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes); /*comment this out for now to not recieve an error*/

// have to sync the models on startup of the server
db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`server is listening at port ${PORT}`);
	});
});