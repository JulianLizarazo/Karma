var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var ModeloFactura = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
ModeloFactura.getFacturas = function (callback){
    
    if (connection){
        var sql = "SELECT id_invoice, "
                        +" VAT, "
                        +" payment_method, "
                        +" DATE_FORMAT(date,'%d %M %Y') as date,"
                        +" user_name1,"
                        +" user_lastname1,"
                        +" price,"
                        +" i.id_user"
                        +" FROM invoice i,user u"
                        +" WHERE u.id_user= i.id_user"
                        +" ORDER BY id_invoice;";
        
        connection.query(sql, function (error, rows){
            if (error){
                throw error;
            }
            else{
                callback(null, rows);
            }
        });
       
    }
}

//---------------------------------------------------------------
//obtenemos un tipo doc por su id
ModeloFactura.getFactura = function (id, callback){
    
    if (connection){
        var sql = "select id_invoice, "
                    +" VAT, "
                    +" payment_method, "
                    +" DATE_FORMAT(date,'%Y-%m-%d') as date,"
                    +" i.id_user,"                    
                    +" user_name1,"
                    +" user_lastname1,"                    
                    +" price "
                    +" FROM invoice i,user u"
                    +" WHERE id_invoice ="+ connection.escape(id)
                    + "and u.id_user= i.id_user;"
                    
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
ModeloFactura.insertFactura = function (FacturaData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO invoice SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, FacturaData, function (error, result){
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
ModeloFactura.updateFactura = function (Facturaata, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE invoice SET VAT = " + connection.escape(Facturaata.VAT)
                    + ", payment_method = " + connection.escape(Facturaata.payment_method)
                    + ", date = " + connection.escape(Facturaata.date)
                    + ", id_user = " + connection.escape(Facturaata.id_user)
                    + ", price = " + connection.escape(Facturaata.price)
                    + " WHERE  id_invoice  =  " + connection.escape(Facturaata.id_invoice)+";";
        
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
module.exports = ModeloFactura;