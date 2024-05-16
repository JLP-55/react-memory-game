const {connect, connection} = require("mongoose");

// this process.env is set in heroku, not local .env file
connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/memory_gameDB");

module.exports = connection;
