var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoDocumentoModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoDocumentoModel.getDocumentos = function (callback){
    
    if (connection){
        var sql = "SELECT id_documento, "
                        +" documento "
                        +" FROM tipo_documento "
                        +" ORDER BY id_documento;";
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
TipoDocumentoModel.getDocumento = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_documento, "
                        +" documento "
                        +" FROM tipo_documento "                        
                        +" WHERE id_documento ="
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
TipoDocumentoModel.insertDocumento = function (TipoDocumentoData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO tipo_documento SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, TipoDocumentoData, function (error, result){
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
TipoDocumentoModel.updateDocumento = function (TipoDocumentoData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE tipo_documento SET documento = " + connection.escape(TipoDocumentoData.documento)
                    + " WHERE  id_documento  =  " + connection.escape(TipoDocumentoData.id_documento)+";";
        
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
module.exports = TipoDocumentoModel;
