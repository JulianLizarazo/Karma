var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var InvoiceModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
InvoiceModel.getInvoices = function (callback){
    
    if (connection){
        var sql = "SELECT id_invoice, "
                        +" VAT, "
                        +" payment_method, "
                        +" date, "
                        +" id_user, "
                        +" id_campus "
                        +" FROM invoice "
                        +" ORDER BY id_invoice;";
        
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
InvoiceModel.getInvoice = function (id, callback){
    
    if (connection){
        var sql = "select id_invoice, "
                    +" VAT, "
                    +" payment_method, "
                    +" date, "
                    +" id_user, "
                    +" id_campus "
                    +" from invoice "
                    +" where id_invoice = "
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
InvoiceModel.insertInvoice = function (InvoiceData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO invoice SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, InvoiceData, function (error, result){
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
InvoiceModel.updateInvoice = function (InvoiceData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE invoice SET VAT = " + connection.escape(InvoiceData.VAT)
                    + ", payment_method = " + connection.escape(InvoiceData.payment_method)
                    + ", date = " + connection.escape(InvoiceData.date)
                    + ", id_user = " + connection.escape(InvoiceData.id_user)
                    + ", id_campus = " + connection.escape(InvoiceData.id_campus)
                    + " WHERE  id_invoice  =  " + connection.escape(InvoiceData.id_invoice)+";";
        
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
module.exports = InvoiceModel;
