const mysql = require('promise-mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'up'
})


function getConnection() {
    return connection
}

module.exports = { getConnection }