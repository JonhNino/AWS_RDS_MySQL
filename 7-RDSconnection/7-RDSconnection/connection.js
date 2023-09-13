const mysql = require('mysql');

const configDB = {
    connectionLimit: 10,
    host: 'aqui va el Host :V ',
    user: 'aui el usuario de la DB',
    password: ' ______ ',
    port: '3306',
    database: 'RDScurso',
    debug: true
};

var  pool = mysql.createPool(configDB);

module.exports = pool;