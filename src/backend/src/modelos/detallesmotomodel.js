var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var DetallesModeloMoto = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
DetallesModeloMoto.getDetallesMotos = function (callback){
    
    if (connection){
        var sql = "SELECT id_vehicle_detail "
                        +", car_plate "
                        +", engine_num "
                        +", chassis_num "
                        +", v.id_vehicle "
                        +", brand"
                        +", color"
                        +" FROM vehicle_detail vd,vehicle v"
                        +" WHERE v.id_vehicle = vd.id_vehicle "
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
DetallesModeloMoto.getDetallesMoto = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_vehicle_detail "
                    +", car_plate "
                    +", engine_num "
                    +", chassis_num "
                    +", v.id_vehicle "
                    +", brand"
                    +", color"
                    +" FROM vehicle_detail vd,vehicle v"
                    +" WHERE v.id_vehicle = vd.id_vehicle and id_vehicle_detail ="
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
        var sql = "INSERT INTO vehicle_detail SET ?";
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
        var sql = "UPDATE vehicle_detail SET car_plate = " + connection.escape(DetallesFacturaData.car_plate)
                    + ", engine_num = " + connection.escape(DetallesFacturaData.engine_num)
                    + ", chassis_num = " + connection.escape(DetallesFacturaData.chassis_num)
                    + ", id_vehicle = " + connection.escape(DetallesFacturaData.id_vehicle)
                    + " WHERE  id_vehicle_detail  =  " + connection.escape(DetallesFacturaData.id_vehicle_detail)+";";
        
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