var mysql = require("mysql")
var settings = require("./config.json")
var connection;

function connectDatabase(){
    if(!connection){
        connection = mysql.createConnection(settings)
        connection.connect(function(err, result){
            if(!err){
                console.log("Conectada")
            }else{
                throw err;
                console.log(result.rows[0])
                
            }
        });
        return connection;
    }
}

module.exports = connectDatabase();