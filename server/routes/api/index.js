const router = require("express").Router();
const testRoutes = require("./users.js");

router.use("/test", testRoutes);

module.exports = router;