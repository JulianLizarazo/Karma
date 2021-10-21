var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var UserModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
UserModel.getUsers = function (callback){
    
    if (connection){
        var sql = "SELECT id_user, "
                        +" user_name1, "
                        +" user_name2, "
                        +" user_lastname1, "
                        +" user_lastname2, "
                        +" user_email, "
                        +" user_phone "
                        +" FROM user "
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
UserModel.getUser = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_user, "
                        +" user_name1, "
                        +" user_name2, "
                        +" user_lastname1, "
                        +" user_lastname2, "
                        +" user_email, "
                        +" user_phone "
                        +" FROM user   "
                        +" where id_user ="
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
UserModel.insertUser = function (UserData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO user SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, UserData, function (error, result){
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
UserModel.updateUser = function (UserData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE user SET user_name1 = " + connection.escape(UserData.user_name1)
                    + ", user_name2 = " + connection.escape(UserData.user_name2)
                    + ", user_lastname1 = " + connection.escape(UserData.user_lastname1)
                    + ", user_lastname2 = " + connection.escape(UserData.user_lastname2)
                    + ", user_email = " + connection.escape(UserData.user_email)
                    + ", user_phone = " + connection.escape(UserData.user_phone)
                    + " WHERE  id_user  =  " + connection.escape(UserData.id_user)+";";
        
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
module.exports = UserModel;
