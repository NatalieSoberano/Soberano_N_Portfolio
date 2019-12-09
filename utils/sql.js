// importing the two files so they can be used
const config = require("../config");
const sql = require('mysql');

const connect = sql.createPool({
    host: config.host,
    // port: config.port,
    uname: config.uname, 
    pword: config.pword, 
    dbase: config.dbase,
    connectionLimit : 10
});

module.exports = connect;