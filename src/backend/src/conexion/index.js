var mysql = require("pg")
var settings = require("./config.json")
var connection;

function connectDatabase(){
    if(!connection){
        connection = mysql.createConnection(settings)
        connection.connect(function(err){
            if(!err){
                console.log("Conectada")
            }else{
                console.log("Error Conexion")
            }
        });
        return connection;
    }
}

module.exports = connectDatabase();