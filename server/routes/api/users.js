const router = require("express").Router();

const {
	testRouter
} = require("../../controllers/userController");

router.route("/").get(testRouter);

module.exports = router