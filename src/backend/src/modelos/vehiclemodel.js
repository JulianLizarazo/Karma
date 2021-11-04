var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var VehicleModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
VehicleModel.getVehicles = function (callback){
    
    if (connection){
        var sql = "SELECT id_vehicle, "
                        +" color, "
                        +" description, "
                        +" brand, "
                        +" url, "
                        +" id_vehicle_type "
                        +" FROM vehicle "
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
VehicleModel.getVehicle = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_vehicle, "
                        +" color, "
                        +" description, "
                        +" brand, "
                        +" url, "
                        +" id_vehicle_type "
                        +" FROM vehicle "
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
VehicleModel.insertVehicle = function (VehicleData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO vehicle SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, VehicleData, function (error, result){
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
VehicleModel.updateVehicle = function (VehicleData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE vehicle SET color = " + connection.escape(VehicleData.color)
                    + ", description = " + connection.escape(VehicleData.description)
                    + ", brand = " + connection.escape(VehicleData.brand)
                    + ", url = " + connection.escape(VehicleData.url)
                    + ", id_vehicle_type = " + connection.escape(VehicleData.id_vehicle_type)
                    + " WHERE  id_vehicle  =  " + connection.escape(VehicleData.id_vehicle)+";";
        
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
module.exports = VehicleModel;
