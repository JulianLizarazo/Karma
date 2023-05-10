var connection = require('../conexion')
//creamos un objeto para ir almacenando todo lo que necesitemos
var SedeModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
SedeModel.getSedes = function (callback){
    
    if (connection){
        var sql = "SELECT id_campus, "
                        +" name_campus, "
                        +" address "
                        +" FROM campus "
                        +" ORDER BY id_campus;";        
        connection.query(sql, function (error, rows){
            if (error){
                throw error;
            }
            else{
                callback(null, rows);
            }
        });
       // console.log("25  " );
    }
}

//---------------------------------------------------------------
//obtenemos un tipo doc por su id
SedeModel.getSede = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_campus, "
                        +" name_campus, "
                        +" address "
                        +" FROM campus "
                        +" where id_campus ="
                    + connection.escape(id) + ";";

        //console.log(id);
        //console.log(" 31  tal  " );
        connection.query(sql, function (error, row){
            //se muestra el mensaje correspondiente
            if (error){
                throw error;
            }else{
                callback(null, row);
            }
        });
    }
}

//---------------------------------------------------------------
//añadir un nuevo tipo de documento
SedeModel.insertSede = function (SedeData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO campus SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, SedeData, function (error, result){
            //se muestra el mensaje correspondiente
            if (error){
                throw error;
            }
            else{
                callback(null,{"msg": "Registro Insertado"});
            }
        });
    }
}

//---------------------------------------------------------------
//actualizar un tipo de documento
SedeModel.updateSede = function (SedeData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE campus SET name_campus = " + connection.escape(SedeData.name_campus)
                    + ", address = " + connection.escape(SedeData.address)
                    + " WHERE  id_campus  =  " + connection.escape(SedeData.id_campus)+";";
        
        ///console.log(" 37  tal  " + sql);

        connection.query(sql, function (error, result){
            //se muestra el mensaje correspondiente
            if (error){
                throw error;
            }else{
                callback(null, {"msg": "Registro Actualizado"});
            }
        });
    }
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = SedeModel;
