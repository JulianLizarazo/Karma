var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var UsuarioModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
UsuarioModel.getUsuarios = function (callback){
    
    if (connection){
        var sql = "SELECT id_user, "
                        +" user_name1, "
                        +" user_name2, "
                        +" user_lastname1, "
                        +" user_lastname2, "
                        +" user_email, "
                        +" user_phone, "
                        +" u.id_document, "
                        +" document_initials, "
                        +" user_document"
                        +" FROM user u"
                        +" INNER JOIN document_type dt on u.id_document =  dt.id_document";
                        +" ORDER BY id_user;";        
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
    
    if (connection){
        var sql = "SELECT id_user, "
                        +" user_name1, "
                        +" user_name2, "
                        +" user_lastname1, "
                        +" user_lastname2, "
                        +" user_email, "
                        +" user_phone, "
                        +" u.id_document, "
                        +" document_initials, "
                        +" user_document"
                        +" FROM user u "
                        +" INNER JOIN document_type dt on u.id_document =  dt.id_document";
                        +" where id_user ="
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
        var sql = "INSERT INTO user SET ?";
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
        var sql = "UPDATE user SET user_name1 = " + connection.escape(UsuarioData.user_name1)
                    + ", user_name2 = " + connection.escape(UsuarioData.user_name2)
                    + ", user_lastname1 = " + connection.escape(UsuarioData.user_lastname1)
                    + ", user_lastname2 = " + connection.escape(UsuarioData.user_lastname2)
                    + ", user_email = " + connection.escape(UsuarioData.user_email)
                    + ", user_phone = " + connection.escape(UsuarioData.user_phone)
                    + ", user_document = " + connection.escape(UsuarioData.user_document)
                    + " WHERE  id_user  =  " + connection.escape(UsuarioData.id_user)+";";
        
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
