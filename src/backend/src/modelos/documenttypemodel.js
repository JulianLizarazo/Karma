var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var DocumentTypeModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
DocumentTypeModel.getDocuments = function (callback){
    
    if (connection){
        var sql = "SELECT id_document, "
                        +" document "
                        +" FROM document_type "
                        +" ORDER BY id_document;";
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
DocumentTypeModel.getDocument = function (id, callback){
    
    if (connection){
        var sql = "SELECT id_document, "
                        +" document "
                        +" FROM document_type "                        
                        +" WHERE id_document ="
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
DocumentTypeModel.insertDocument = function (DocumentTypeData, callback){
    if (connection){
        //console.log(TipDocData)
        var sql = "INSERT INTO document_type SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, DocumentTypeData, function (error, result){
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
DocumentTypeModel.updateDocument = function (DocumentTypeData, callback){
    //console.log(" 32  tal  ");

    if (connection){
        var sql = "UPDATE document_type SET document = " + connection.escape(DocumentTypeData.document)
                    + " WHERE  id_document  =  " + connection.escape(DocumentTypeData.id_document)+";";
        
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
module.exports = DocumentTypeModel;
