var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemosafsjkafsjkasfjk
var MotoModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
MotoModel.getMotos = function (callback){
    
    if (connection){
        var sql = "SELECT v.id_vehicle, "
                        +" v.name, "
                        +" v.color, "
                        +" v.description, "
                        +" v.brand, "
                        +" price, "
                        +" v.url, "
                        +" v.id_vehicle_type, "
                        +" vd.body_type "
                        +" FROM vehicle v "
                        +" inner join vehicle_type vd on v.id_vehicle_type = vd.id_vehicle_type"
                        +" ORDER BY id_vehicle;";        
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
        var sql = "SELECT v.id_vehicle, "
                        +" v.name, "
                        +" v.color, "
                        +" v.description, "
                        +" v.brand, "
                        +" price, "
                        +" v.url, "
                        +" v.id_vehicle_type, "
                        +" vd.body_type "
                        +" FROM vehicle v"
                        +" inner join vehicle_type vd on v.id_vehicle_type = vd.id_vehicle_type"
                        +" where id_vehicle ="
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
        var sql = "INSERT INTO vehicle SET ?";
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
        var sql = "UPDATE vehicle SET color = " + connection.escape(MotoData.color)
                    + ", name = " + connection.escape(MotoData.name)
                    + ", description = " + connection.escape(MotoData.description)
                    + ", brand = " + connection.escape(MotoData.brand)
                    + ", price = " + connection.escape(MotoData.price)
                    + ", url = " + connection.escape(MotoData.url)
                    + ", id_vehicle_type = " + connection.escape(MotoData.id_vehicle_type)

                    + " WHERE  id_vehicle  =  " + connection.escape(MotoData.id_vehicle)+";";
        
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