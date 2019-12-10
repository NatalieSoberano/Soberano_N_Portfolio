// importing the two files so they can be used
const config = require("../config");
const sql = require('mysql');

const connect = sql.createPool({
    host: config.host,
    // port: config.port,
    user: config.uname,
    password: config.pword,
    database: config.dbase,
    connectionLimit: 10
});

module.exports = connect;