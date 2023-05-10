var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var UsuarioModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
UsuarioModel.getUsuarios = function (callback){
    
    if (connection){
        var sql = "SELECT id_usuario, "
                        +" usuario_nombre1, "
                        +" usuario_nombre2, "
                        +" usuario_apellido1, "
                        +" usuario_apellido2, "
                        +" usuario_email, "
                        +" usuario_telefono, "
                        +" u.id_documento, "
                        +" iniciales_documento, "
                        +" usuario_documento"
                        +" FROM usuario u"
                        +" INNER JOIN tipo_documento dt on u.id_documento =  dt.id_documento";
                        +" ORDER BY id_usuario;";        
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
UsuarioModel.getUsuario = function (id, callback){
    console.log(id);
    if (connection){
        var sql = "SELECT id_usuario, "
                        +" usuario_nombre1, "
                        +" usuario_nombre2, "
                        +" usuario_apellido1, "
                        +" usuario_apellido2, "
                        +" usuario_email, "
                        +" usuario_telefono, "
                        +" u.id_documento, "
                        +" iniciales_documento, "
                        +" usuario_documento"
                        +" FROM usuario u "
                        +" INNER JOIN tipo_documento dt on u.id_documento =  dt.id_documento"
                        +" where id_usuario ="
                        + connection.escape(id)+";" 

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
UsuarioModel.insertUsuario = function (UsuarioData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO usuario SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, UsuarioData, function (error, result){
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
UsuarioModel.updateUsuario = function (UsuarioData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE usuario SET usuario_nombre1 = " + connection.escape(UsuarioData.usuario_nombre1)
                    + ", usuario_nombre2 = " + connection.escape(UsuarioData.usuario_nombre2)
                    + ", usuario_apellido1 = " + connection.escape(UsuarioData.usuario_apellido1)
                    + ", usuario_apellido2 = " + connection.escape(UsuarioData.usuario_apellido2)
                    + ", usuario_email = " + connection.escape(UsuarioData.usuario_email)
                    + ", usuario_telefono = " + connection.escape(UsuarioData.usuario_telefono)
                    + ", usuario_documento = " + connection.escape(UsuarioData.usuario_documento)
                    + " WHERE  id_usuario  =  " + connection.escape(UsuarioData.id_usuario)+";";
        
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
module.exports = UsuarioModel;
