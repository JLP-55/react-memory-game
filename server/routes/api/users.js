const router = require("express").Router();

const {
	testRouter,
} = require("../../controllers/userController.js");

router.route("/").get(testRouter);

module.exports = router