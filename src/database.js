const mysql = require('promise-mysql');


// Créer la connexion à la base de donnée
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'up'
})


// Récupère la connexion à la base de données
function getConnection() {
    return connection
}

module.exports = { getConnection }