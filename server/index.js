const express = require("express");
const db = require("./config/connection");
// const routes = require("./routes");/*create these later, comment out for now*/

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes); /*comment this out for now to not recieve an error*/

db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`server is listening at port ${PORT}`);
	});
});