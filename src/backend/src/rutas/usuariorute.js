//obtenemos el modelo InvoiceDetailModel con toda la funcionalidad
var UsuarioModel = require('../modelos/usuariomodel.js');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function (){

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res){
        
        UsuarioModel.getUsuarios(function (error, data){
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
            UsuarioModel.getUsuario(id, function (error, data){
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

    //---------------------------------------------------------------
    //Muestra y captura los datos del método CRUL crear, usando el verbo post
    router.post("/", function (req, res){
        //creamos un objeto Json con los datos del tipo de documento
        var UsuarioData =
            {
                id_usuario: null,
                usuario_nombre1: req.body.usuario_nombre1,
                usuario_nombre2: req.body.usuario_nombre2,
                usuario_apellido1: req.body.usuario_apellido1,
                usuario_apellido2: req.body.usuario_apellido2,
                usuario_email: req.body.usuario_email,
                usuario_telefono: req.body.usuario_telefono,
                id_documento: req.body.id_documento,
                usuario_documento: req.body.usuario_documento,
            };


        //usamos la funcion para insertar
        UsuarioModel.insertUsuario(UsuarioData, function (error, data){
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
    router.put("/:id_usuario", function (req, res){
        //almacenamos los datos de la petición en un objeto
        //console.log(" 38");
        var UsuarioData =
            {
                id_usuario: req.params.id_usuario,
                usuario_nombre1: req.body.usuario_nombre1,
                usuario_nombre2: req.body.usuario_nombre2,
                usuario_apellido1: req.body.usuario_apellido1,
                usuario_apellido2: req.body.usuario_apellido2,
                usuario_email: req.body.usuario_email,
                usuario_telefono: req.body.usuario_telefono,
                id_documento: req.body.id_documento,
                usuario_documento: req.body.usuario_documento,
            };


        //usamos la funcion para actualizar
        UsuarioModel.updateUsuario(UsuarioData, function (error, data){
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