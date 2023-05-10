var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemosafsjkafsjkasfjk
var MotoModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
MotoModel.getMotos = function (callback){
    
    if (connection){
        var sql = "SELECT v.id_moto, "
                        +" v.nombre, "
                        +" v.color, "
                        +" v.descripcion, "
                        +" v.marca, "
                        +" precio, "
                        +" v.url, "
                        +" v.id_tipo_moto, "
                        +" vd.tipo_carroceria "
                        +" FROM moto v "
                        +" inner join tipo_moto vd on v.id_tipo_moto = vd.id_tipo_moto"
                        +" ORDER BY id_moto;";        
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
MotoModel.getMoto = function (id, callback){
    
    if (connection){
        var sql = "SELECT v.id_moto, "
                        +" v.nombre, "
                        +" v.color, "
                        +" v.descripcion, "
                        +" v.marca, "
                        +" precio, "
                        +" v.url, "
                        +" v.id_tipo_moto, "
                        +" vd.tipo_carroceria "
                        +" FROM moto v"
                        +" inner join tipo_moto vd on v.id_tipo_moto = vd.id_tipo_moto"
                        +" where id_moto ="
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
MotoModel.insertMoto = function (MotoData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO moto SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, MotoData, function (error, result){
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
MotoModel.updateMoto = function (MotoData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE moto SET color = " + connection.escape(MotoData.color)
                    + ", nombre = " + connection.escape(MotoData.nombre)
                    + ", descripcion = " + connection.escape(MotoData.descripcion)
                    + ", marca = " + connection.escape(MotoData.marca)
                    + ", precio = " + connection.escape(MotoData.precio)
                    + ", url = " + connection.escape(MotoData.url)
                    + ", id_tipo_moto = " + connection.escape(MotoData.id_tipo_moto)

                    + " WHERE  id_moto  =  " + connection.escape(MotoData.id_moto)+";";
        
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
module.exports = MotoModel;