var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var DetallesModeloMoto = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
DetallesModeloMoto.getDetallesMotos = function (callback){
    
    if (connection){
        var sql = "SELECT id_detalles_moto "
                        +", placa_moto "
                        +", serie_motor "
                        +", serie_chassis "
                        +", v.id_moto "
                        +", marca"
                        +", color"
                        +" FROM detalles_moto vd,moto v"
                        +" WHERE v.id_moto = vd.id_moto "
                        +" ORDER BY id_detalles_moto;";
        
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
DetallesModeloMoto.getDetallesMoto = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_detalles_moto "
                    +", placa_moto "
                    +", serie_motor "
                    +", serie_chassis "
                    +", v.id_moto "
                    +", marca"
                    +", color"
                    +" FROM detalles_moto vd,moto v"
                    +" WHERE v.id_moto = vd.id_moto and id_detalles_moto ="
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
DetallesModeloMoto.insertDetallesMoto = function (DetallesMotoData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO detalles_moto SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, DetallesMotoData, function (error, result){
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
DetallesModeloMoto.updateDetallesMoto = function (DetallesFacturaData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE detalles_moto SET placa_moto = " + connection.escape(DetallesFacturaData.placa_moto)
                    + ", serie_motor = " + connection.escape(DetallesFacturaData.serie_motor)
                    + ", serie_chassis = " + connection.escape(DetallesFacturaData.serie_chassis)
                    + ", id_moto = " + connection.escape(DetallesFacturaData.id_moto)
                    + " WHERE  id_detalles_moto  =  " + connection.escape(DetallesFacturaData.id_detalles_moto)+";";
        
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
module.exports = DetallesModeloMoto;