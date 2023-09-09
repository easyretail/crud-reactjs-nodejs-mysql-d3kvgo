const mysql = require("mysql");
const dbConfig = require('./config.js');

const db = mysql.createConnection({  
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
});
//Connection à phpMyAdmin mysql
db.connect(error => {
  if (error) throw error;
  console.log("Connection réussie à la base de donnée");
});
module.exports = db;