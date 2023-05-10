var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var DetallesFacturaModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
DetallesFacturaModel.getDetallesFacturas = function (callback){
    
    if (connection){
        var sql = "SELECT id_detalles_factura"
                        +", id_factura"
                        +", id.id_detalles_moto"
                        +", vd.placa_moto"
                        +", vd.serie_motor"
                        +", vd.serie_chassis"
                        +", id.id_sede"
                        +", nombre_sede"
                        +", CONCAT(marca,' ',nombre,' ',vt.tipo_carroceria, ' ', color) as moto_model"
                        +" from detalles_factura id"
                        +" inner join sede c on c.id_sede = id.id_sede"
                        +" inner join detalles_moto vd on id.id_detalles_moto = vd.id_detalles_moto"
                        +" inner join moto v on v.id_moto = vd.id_moto"
                        +" inner join tipo_moto vt on v.id_tipo_moto = vt.id_tipo_moto"
                        +" ORDER BY id_detalles_factura;";
        
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
        var sql = "select id_detalles_factura "
                    +", id_factura"
                    +", id.id_detalles_moto"
                    +", vd.placa_moto"
                    +", vd.serie_motor"
                    +", vd.serie_chassis"
                    +", id.id_sede"
                    +", nombre_sede"
                    +", CONCAT(marca,' ',nombre,' ',vt.tipo_carroceria, ' ', color) as moto_model"
                    +" from detalles_factura id"
                    +" inner join sede c on c.id_sede = id.id_sede"
                    +" inner join detalles_moto vd on id.id_detalles_moto = vd.id_detalles_moto"
                    +" inner join moto v on v.id_moto = vd.id_moto"
                    +" inner join tipo_moto vt on v.id_tipo_moto = vt.id_tipo_moto"
                    +" where id_detalles_factura ="
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
        var sql = "select id_detalles_factura," 
                        +" i.id_factura,"
                        +" v.precio,"
                        +" id.id_detalles_moto,"
                        +" DATE_FORMAT(date,'%d %M %Y') as date, "
                        +" CONCAT(nombre,' ',color) as moto,"
                        +" vd.placa_moto,"
                        +" vd.serie_motor,"
                        +" vd.serie_chassis,"
                        +" v.id_moto as moto_model"
                        +" from detalles_factura id "
                        +" inner join detalles_moto vd on id.id_detalles_moto = vd.id_detalles_moto"
                        +" inner join moto v on v.id_moto = vd.id_moto"
                        +" inner join factura i on i.id_factura = id.id_factura"
                        +" where v.id_moto = "+connection.escape(id)+" and date BETWEEN"+connection.escape(fechaInicial)+" and "+connection.escape(fechaFinal)
        
        
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
        var sql = "select id_detalles_factura," 
                        +" i.id_factura,"
                        +" v.precio,"
                        +" id.id_detalles_moto,"
                        +" DATE_FORMAT(date,'%d %M %Y') as date, "
                        +" CONCAT(nombre,' ',color) as moto,"
                        +" v.id_moto as moto_model,"
                        +" tipo_carroceria"
                        +" from detalles_factura id "
                        +" inner join detalles_moto vd on id.id_detalles_moto = vd.id_detalles_moto"
                        +" inner join moto v on v.id_moto = vd.id_moto"
                        +" inner join tipo_moto vt on vt.id_tipo_moto = v.id_tipo_moto"
                        +" inner join factura i on i.id_factura = id.id_factura"
                        +" where v.id_tipo_moto = "+connection.escape(id)+" and date BETWEEN"+connection.escape(fechaInicial)+" and "+connection.escape(fechaFinal)
        
        
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
        var sql = "INSERT INTO detalles_factura SET ?";
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
        var sql = "UPDATE detalles_factura SET cantidad = " + connection.escape(DetallesFacturaData.cantidad)
                    + ", id_factura = " + connection.escape(DetallesFacturaData.id_factura)
                    + ", id_detalles_moto = " + connection.escape(DetallesFacturaData.id_detalles_moto)
                    + " WHERE  id_detalles_factura  =  " + connection.escape(DetallesFacturaData.id_detalles_factura)+";";
        
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