//obtenemos el modelo InvoiceDetailModel con toda la funcionalidad
var UserModel = require('../modelos/usermodel.js');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function (){

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res){
        
        UserModel.getUsers(function (error, data){
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
            UserModel.getUser(id, function (error, data){
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
        var UserData =
            {
                id_user: null,
                user_name1: req.body.user_name1,
                user_name2: req.body.user_name2,
                user_lastname1: req.body.user_lastname1,
                user_lastname2: req.body.user_lastname2,
                user_email: req.body.user_email,
                user_phone: req.body.user_phone,
            };


        //usamos la funcion para insertar
        UserModel.insertUser(UserData, function (error, data){
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
    router.put("/", function (req, res){
        //almacenamos los datos de la petición en un objeto
        //console.log(" 38");
        var UserData =
            {
                id_user: req.body.id_user,
                user_name1: req.body.user_name1,
                user_name2: req.body.user_name2,
                user_lastname1: req.body.user_lastname1,
                user_lastname2: req.body.user_lastname2,
                user_email: req.body.user_email,
                user_phone: req.body.user_phone,
            };


        //usamos la funcion para actualizar
        UserModel.updateUser(UserData, function (error, data){
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
