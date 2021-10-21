var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var VehicleDetailModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
VehicleDetailModel.getVehicleDetails = function (callback){
    
    if (connection){
        var sql = "SELECT id_vehicle_detail "
                        +", car_plate "
                        +", engine_num "
                        +", chassis_num "
                        +" FROM vehicle_detail "
                        +" ORDER BY id_vehicle_detail;";
        
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
VehicleDetailModel.getVehicleDetail = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_vehicle_detail "
                    +", car_plate "
                    +", engine_num "
                    +", chassis_num "
                    +" FROM vehicle_detail "
                    +"where id_vehicle_detail ="
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
VehicleDetailModel.insertVehicleDetail = function (InvoiceDetailData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO vehicle_detail SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, InvoiceDetailData, function (error, result){
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
VehicleDetailModel.updateVehicleDetail = function (InvoiceDetailData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE vehicle_detail SET car_plate = " + connection.escape(InvoiceDetailData.car_plate)
                    + ", engine_num = " + connection.escape(InvoiceDetailData.engine_num)
                    + ", chassis_num = " + connection.escape(InvoiceDetailData.chassis_num)
                    + " WHERE  id_vehicle_detail  =  " + connection.escape(InvoiceDetailData.id_vehicle_detail)+";";
        
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
module.exports = VehicleDetailModel;
