var mysql = require('mysql2');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-app',
    password: 'qwert%$#@!'
});

module.exports = connection.promise();