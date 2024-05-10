const User = require("../models/userModel.js");

module.exports = {
	async getUsers(rq, rs) {
		try {
			rs.status({message: "hello"});
		} catch (err) {
			rs.status(500).json(err);
			console.log(err);
		}
	}
}