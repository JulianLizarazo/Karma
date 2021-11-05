var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var CampusModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
CampusModel.getCampuses = function (callback){
    
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
CampusModel.getCampus = function (id, callback){
    
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
CampusModel.insertCampus = function (CampusData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO campus SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, CampusData, function (error, result){
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
CampusModel.updateCampus = function (CampusData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE campus SET name_campus = " + connection.escape(CampusData.name_campus)
                    + ", address = " + connection.escape(CampusData.address)
                    + " WHERE  id_campus  =  " + connection.escape(CampusData.id_campus)+";";
        
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
module.exports = CampusModel;
