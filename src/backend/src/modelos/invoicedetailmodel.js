var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var InvoiceDetailModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
InvoiceDetailModel.getInvoiceDetails = function (callback){
    
    if (connection){
        var sql = "SELECT id_invoice_det "
                        +", amount "
                        +", id_invoice "
                        +", price "
                        +", id_vehicle_detail "
                        +" FROM invoice_detail   "
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
        var sql = "select id_invoice_det, "
                    +"amount, "
                    +"id_invoice, "
                    +"price, "
                    +"id_vehicle_detail "
                    +"from invoice_detail "
                    +"where id_invoice_det ="
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