var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var ModeloFactura = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
ModeloFactura.getFacturas = function (callback){
    
    if (connection){
        var sql = "SELECT id_factura, "
                        +" IVA, "
                        +" metodo_pago, "
                        +" DATE_FORMAT(fecha,'%d %M %Y') as fecha,"
                        +" usuario_nombre1,"
                        +" usuario_apellido1,"
                        +" precio,"
                        +" i.id_usuario"
                        +" FROM factura i,usuario u"
                        +" WHERE u.id_usuario= i.id_usuario"
                        +" ORDER BY id_factura;";
        
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
        var sql = "select id_factura, "
                    +" IVA, "
                    +" metodo_pago, "
                    +" DATE_FORMAT(fecha,'%Y-%m-%d') as fecha,"
                    +" i.id_usuario,"                    
                    +" usuario_nombre1,"
                    +" usuario_apellido1,"                    
                    +" precio "
                    +" FROM factura i,usuario u"
                    +" WHERE id_factura ="+ connection.escape(id)
                    + "and u.id_usuario= i.id_usuario;"
                    
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
        var sql = "INSERT INTO factura SET ?";
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
ModeloFactura.updateFactura = function (FacturaData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE factura SET IVA = " + connection.escape(FacturaData.IVA)
                    + ", metodo_pago = " + connection.escape(FacturaData.metodo_pago)
                    + ", fecha = " + connection.escape(FacturaData.fecha)
                    + ", id_usuario = " + connection.escape(FacturaData.id_usuario)
                    + ", precio = " + connection.escape(FacturaData.precio)
                    + " WHERE  id_factura  =  " + connection.escape(FacturaData.id_factura)+";";
        
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