var mysql = require('mysql');


const DB = {
    connetDB() {
      var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "rpgwork"
      });
    
      connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      return connection;
    },
    
    endConnection(connection) {
        connection.end();
    }
}

module.exports = DB;