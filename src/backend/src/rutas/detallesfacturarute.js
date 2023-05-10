//obtenemos el modelo InvoiceDetailModel con toda la funcionalidad
var DetallesFacturaModel = require('../modelos/detallesfacturamodel.js');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function (){

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res){
        
        DetallesFacturaModel.getDetallesFacturas(function (error, data){
            res.status(200).json(data);
        });
        //console.log("24  " );

        //console.log( " ---  "+ res );
    });

    //---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra el tipo de documento solicitado
    router.get("/:id", function (req, res){
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id)){
            DetallesFacturaModel.getDetallesFactura(id, function (error, data){
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else{
                    res.json(404, 
                    { 
                        "msg": "Registro no Existe" 
                    });
                }
            });
        }
        else //si hay algún error
        {
            res.status(500).json({ "msg": "error" });
        }
    });
    router.get("/reportv/:id/:fechaInicial/:fechaFinal", function (req, res){
        var id = req.params.id;
        var fechaInicial = req.params.fechaInicial;
        var fechaFinal = req.params.fechaFinal;

        //solo actualizamos si la id es un número
        if (!isNaN(id)){
            DetallesFacturaModel.getReporteMoto(id,fechaInicial,fechaFinal,function (error, data){
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else{
                    res.json(404, 
                    { 
                        "msg": "Registro no Existe" 
                    });
                }
            });
        }
        else //si hay algún error
        {
            res.status(500).json({ "msg": "error" });
        }
    });
    router.get("/reportvt/:id/:fechaInicial/:fechaFinal", function (req, res){
        var id = req.params.id;
        var fechaInicial = req.params.fechaInicial;
        var fechaFinal = req.params.fechaFinal;

        //solo actualizamos si la id es un número
        if (!isNaN(id)){
            DetallesFacturaModel.getReporteTipoMoto(id,fechaInicial,fechaFinal,function (error, data){
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0){
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else{
                    res.status(404).json({ 
                        "msg": "Registro no Existe" 
                    });
                }
            });
        }
        else //si hay algún error
        {
            res.status(500).json({ "msg": "error" });
        }
    });

    //---------------------------------------------------------------
    //Muestra y captura los datos del método CRUL crear, usando el verbo post
    router.post("/", function (req, res){
        //creamos un objeto Json con los datos del tipo de documento
        var DetallesFacturaData =
            {
                id_invoice_det: null,
                amount: req.body.amount,
                id_invoice: req.body.id_invoice,
                id_vehicle_detail: req.body.id_vehicle_detail,
            };


        //usamos la funcion para insertar
        DetallesFacturaModel.insertDetallesFactura(DetallesFacturaData, function (error, data){
            //se muestra el mensaje correspondiente
            if (data){
                res.status(200).json(data);
            }else{
                res.status(500).send({ error: "boo:(" });
            }
        });
    });

    //---------------------------------------------------------------
    //Muestra y captura los datos para el método CRUL update (actualizar), usando el verbo put
    router.put("/:id", function (req, res){
        //almacenamos los datos de la petición en un objeto
        //console.log(" 38");
        var DetallesFacturaData =
            {
                id_invoice_det: req.params.id,
                amount: req.body.amount,
                id_invoice: req.body.id_invoice,
                id_vehicle_detail: req.body.id_vehicle_detail,
            };


        //usamos la funcion para actualizar
        DetallesFacturaModel.updateDetallesFactura(DetallesFacturaData, function (error, data){
            //se muestra el mensaje correspondiente
            if (data && data.msg){
                res.status(200).json(data);
            }else{
                res.status(500).send(
                { 
                    error: "boo:(" 
                });
            }
        });
    });


    //exportamos el objeto para tenerlo disponible en EL APP
    return router;
}