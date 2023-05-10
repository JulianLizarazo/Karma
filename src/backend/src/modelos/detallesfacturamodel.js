var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var DetallesFacturaModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
DetallesFacturaModel.getDetallesFacturas = function (callback){
    
    if (connection){
        var sql = "SELECT id_invoice_det"
                        +", id_invoice"
                        +", id.id_vehicle_detail"
                        +", vd.car_plate"
                        +", vd.engine_num"
                        +", vd.chassis_num"
                        +", id.id_campus"
                        +", name_campus"
                        +", CONCAT(brand,' ',name,' ',vt.body_type, ' ', color) as vehicle_model"
                        +" from invoice_detail id"
                        +" inner join campus c on c.id_campus = id.id_campus"
                        +" inner join vehicle_detail vd on id.id_vehicle_detail = vd.id_vehicle_detail"
                        +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                        +" inner join vehicle_type vt on v.id_vehicle_type = vt.id_vehicle_type"
                        +" ORDER BY id_invoice_det;";
        
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
DetallesFacturaModel.getDetallesFactura = function (id, callback){
    
    if (connection){
        var sql = "select id_invoice_det "
                    +", id_invoice"
                    +", id.id_vehicle_detail"
                    +", vd.car_plate"
                    +", vd.engine_num"
                    +", vd.chassis_num"
                    +", id.id_campus"
                    +", name_campus"
                    +", CONCAT(brand,' ',name,' ',vt.body_type, ' ', color) as vehicle_model"
                    +" from invoice_detail id"
                    +" inner join campus c on c.id_campus = id.id_campus"
                    +" inner join vehicle_detail vd on id.id_vehicle_detail = vd.id_vehicle_detail"
                    +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                    +" inner join vehicle_type vt on v.id_vehicle_type = vt.id_vehicle_type"
                    +" where id_invoice_det ="
                    + connection.escape(id)

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

DetallesFacturaModel.getReporteMoto = function (id,fechaInicial,fechaFinal,callback){
    
    if (connection){
        var sql = "select id_invoice_det," 
                        +" i.id_invoice,"
                        +" v.price,"
                        +" id.id_vehicle_detail,"
                        +" DATE_FORMAT(date,'%d %M %Y') as date, "
                        +" CONCAT(name,' ',color) as vehicle,"
                        +" vd.car_plate,"
                        +" vd.engine_num,"
                        +" vd.chassis_num,"
                        +" v.id_vehicle as vehicle_model"
                        +" from invoice_detail id "
                        +" inner join vehicle_detail vd on id.id_vehicle_detail = vd.id_vehicle_detail"
                        +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                        +" inner join invoice i on i.id_invoice = id.id_invoice"
                        +" where v.id_vehicle = "+connection.escape(id)+" and date BETWEEN"+connection.escape(fechaInicial)+" and "+connection.escape(fechaFinal)
        
        
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
DetallesFacturaModel.getReporteTipoMoto = function (id,fechaInicial,fechaFinal,callback){
    
    if (connection){
        var sql = "select id_invoice_det," 
                        +" i.id_invoice,"
                        +" v.price,"
                        +" id.id_vehicle_detail,"
                        +" DATE_FORMAT(date,'%d %M %Y') as date, "
                        +" CONCAT(name,' ',color) as vehicle,"
                        +" v.id_vehicle as vehicle_model,"
                        +" body_type"
                        +" from invoice_detail id "
                        +" inner join vehicle_detail vd on id.id_vehicle_detail = vd.id_vehicle_detail"
                        +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                        +" inner join vehicle_type vt on vt.id_vehicle_type = v.id_vehicle_type"
                        +" inner join invoice i on i.id_invoice = id.id_invoice"
                        +" where v.id_vehicle_type = "+connection.escape(id)+" and date BETWEEN"+connection.escape(fechaInicial)+" and "+connection.escape(fechaFinal)
        
        
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
//añadir un nuevo tipo de documento
DetallesFacturaModel.insertDetallesFactura = function (DetallesFacturaData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO invoice_detail SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, DetallesFacturaData, function (error, result){
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
DetallesFacturaModel.updateDetallesFactura = function (DetallesFacturaData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE invoice_detail SET amount = " + connection.escape(DetallesFacturaData.amount)
                    + ", id_invoice = " + connection.escape(DetallesFacturaData.id_invoice)
                    + ", id_vehicle_detail = " + connection.escape(DetallesFacturaData.id_vehicle_detail)
                    + " WHERE  id_invoice_det  =  " + connection.escape(DetallesFacturaData.id_invoice_det)+";";
        
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
module.exports = DetallesFacturaModel;