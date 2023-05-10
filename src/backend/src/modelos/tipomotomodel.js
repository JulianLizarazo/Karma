var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoMotoModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoMotoModel.getTipoMotos = function (callback){
    
    if (connection){
        var sql = "SELECT id_tipo_moto, "
                        +" tipo_carroceria, "
                        +" descripcion "
                        +" FROM tipo_moto "
                        +" ORDER BY id_tipo_moto;";
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
        var sql = "SELECT id_tipo_moto, "
                        +" tipo_carroceria, "
                        +" descripcion "
                        +" FROM tipo_moto "
                        +" where id_tipo_moto ="
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
        var sql = "INSERT INTO tipo_moto SET ?";
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
        var sql = "UPDATE tipo_moto SET tipo_carroceria = " + connection.escape(TipoMotoData.tipo_carroceria)
                    + ", descripcion = " + connection.escape(TipoMotoData.descripcion)
                    + " WHERE  id_tipo_moto  =  " + connection.escape(TipoMotoData.id_tipo_moto)+";";
        
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
