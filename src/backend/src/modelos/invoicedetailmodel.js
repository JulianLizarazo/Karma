var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var InvoiceDetailModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
InvoiceDetailModel.getInvoiceDetails = function (callback){
    
    if (connection){
        var sql = "SELECT id_invoice_det "
                        +", id_invoice "
                        +", price "
                        +", id.id_vehicle_detail "
                        +", vd.car_plate "
                        +", vd.engine_num "
                        +", vd.chassis_num "
                        +", CONCAT(brand,' ', vt.body_type, ' ', color) as vehicle_model"
                        +" from invoice_detail id, vehicle_detail vd"
                        +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                        +" inner join vehicle_type vt on v.id_vehicle_type = vt.id_vehicle_type"
                        +" WHERE  id.id_vehicle_detail = vd.id_vehicle_detail"
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
InvoiceDetailModel.getInvoiceDetail = function (id, callback){
    
    if (connection){
        var sql = "select id_invoice_det "
                    +", id_invoice "
                    +", price "
                    +", id.id_vehicle_detail "
                    +", vd.car_plate "
                    +", vd.engine_num "
                    +", vd.chassis_num "
                    +", CONCAT(brand,' ', vt.body_type, ' ', color) as vehicle_model"
                    +" from invoice_detail id, vehicle_detail vd"
                    +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                    +" inner join vehicle_type vt on v.id_vehicle_type = vt.id_vehicle_type"
                    +" where id.id_vehicle_detail = vd.id_vehicle_detail and id_invoice_det ="
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

InvoiceDetailModel.getVehicleReport = function (id,initialDate,finalDate,callback){
    
    if (connection){
        var sql = "select id_invoice_det," 
                        +" i.id_invoice,"
                        +" price,"
                        +" id.id_vehicle_detail,"
                        +" DATE_FORMAT(date,'%d %M %Y') as date, "
                        +" CONCAT(brand,' ',color) as vehicle,"
                        +" vd.car_plate,"
                        +" vd.engine_num,"
                        +" vd.chassis_num,"
                        +" v.id_vehicle as vehicle_model"
                        +" from invoice_detail id "
                        +" inner join vehicle_detail vd on id.id_vehicle_detail = vd.id_vehicle_detail"
                        +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                        +" inner join invoice i on i.id_invoice = id.id_invoice"
                        +" where v.id_vehicle = "+connection.escape(id)+" and date BETWEEN"+connection.escape(initialDate)+" and "+connection.escape(finalDate)
        
        
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
InvoiceDetailModel.getVehicleTypeReport = function (id,initialDate,finalDate,callback){
    
    if (connection){
        var sql = "select id_invoice_det," 
                        +" i.id_invoice,"
                        +" price,"
                        +" id.id_vehicle_detail,"
                        +" DATE_FORMAT(date,'%d %M %Y') as date, "
                        +" CONCAT(brand,' ',color) as vehicle,"
                        +" v.id_vehicle as vehicle_model,"
                        +" body_type"
                        +" from invoice_detail id "
                        +" inner join vehicle_detail vd on id.id_vehicle_detail = vd.id_vehicle_detail"
                        +" inner join vehicle v on v.id_vehicle = vd.id_vehicle"
                        +" inner join vehicle_type vt on vt.id_vehicle_type = v.id_vehicle_type"
                        +" inner join invoice i on i.id_invoice = id.id_invoice"
                        +" where v.id_vehicle_type = "+connection.escape(id)+" and date BETWEEN"+connection.escape(initialDate)+" and "+connection.escape(finalDate)
        
        
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
InvoiceDetailModel.insertInvoiceDetail = function (InvoiceDetailData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO invoice_detail SET ?";
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
InvoiceDetailModel.updateInvoiceDetail = function (InvoiceDetailData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE invoice_detail SET amount = " + connection.escape(InvoiceDetailData.amount)
                    + ", price = " + connection.escape(InvoiceDetailData.price)
                    + ", id_invoice = " + connection.escape(InvoiceDetailData.id_invoice)
                    + ", id_vehicle_detail = " + connection.escape(InvoiceDetailData.id_vehicle_detail)
                    + " WHERE  id_invoice_det  =  " + connection.escape(InvoiceDetailData.id_invoice_det)+";";
        
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
module.exports = InvoiceDetailModel;
