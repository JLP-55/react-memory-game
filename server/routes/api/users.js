const router = require("express").Router();

const {
	testRouter,
	testPostRouter
} = require("../../controllers/userController.js");

router.route("/").get(testRouter).post(testPostRouter);

module.exports = router