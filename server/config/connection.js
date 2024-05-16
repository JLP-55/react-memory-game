const {connect, connection} = require("mongoose");

// use process.env.MONGODB_URI (understood by heroku) or the local database
connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/memory_gameDB");

module.exports = connection;
