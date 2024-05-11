// This is unused as far as I am aware
const User = require("../models/userModel.js");

	module.exports = {
	async testRouter(rq, rs) {
		try {
			// rs.status(200).json({message: "hello"});
			const user = await User.find({});
			rs.status(200).json(user);
		} catch (err) {
			rs.status(500).json(err);
			console.log(err);
		}
	},
	async testPostRouter(rq, rs) {
		try {
			const newUser = await User.create(rq.body);
			rs.status(200).json(newUser);
			console.log(newUser);
		} catch (err) {
			rs.status(500).json(err);
			console.log(err);
		}
	}
}