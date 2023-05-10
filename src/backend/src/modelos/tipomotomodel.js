var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoMotoModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoMotoModel.getTipoMotos = function (callback){
    
    if (connection){
        var sql = "SELECT id_vehicle_type, "
                        +" body_type, "
                        +" description "
                        +" FROM vehicle_type "
                        +" ORDER BY id_vehicle_type;";
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
TipoMotoModel.getTipoMoto = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_vehicle_type, "
                        +" body_type, "
                        +" description "
                        +" FROM vehicle_type "
                        +" where id_vehicle_type ="
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
TipoMotoModel.insertTipoMoto = function (TipoMotoData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO vehicle_type SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, TipoMotoData, function (error, result){
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
TipoMotoModel.updateTipoMoto = function (TipoMotoData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE vehicle_type SET body_type = " + connection.escape(TipoMotoData.body_type)
                    + ", description = " + connection.escape(TipoMotoData.description)
                    + " WHERE  id_vehicle_type  =  " + connection.escape(TipoMotoData.id_vehicle_type)+";";
        
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
module.exports = TipoMotoModel;
