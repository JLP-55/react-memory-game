const User = require("../models/userModel.js");

	module.exports = {
	async testRouter(rq, rs) {
		try {
			rs.status(200).json({message: "hello"});
		} catch (err) {
			rs.status(500).json(err);
			console.log(err);
		}
	},
}