let express = require('express');//guarda express que nosotros intalamos
let bodyParser = require('body-parser'), port = 3000;//rmanejo de cuerpo de la "pagina" y puerto
let http = require('http');//protocolo de intercambio de archivos
let path = require('path');//direccion


let detallesFactura = require('./src/rutas/detallesfacturarute');//detalle factura
let factura = require('./src/rutas/facturarute');//factura
let usuario = require('./src/rutas/usuariorute');//usuario
let moto = require('./src/rutas/motorute');//modelo de vehiculo
let tipoMoto = require('./src/rutas/tipomotorute');//tipo de vehiculo
let sede = require('./src/rutas/sederute');//sede
let detallesMoto = require('./src/rutas/detallesmotorute');//detalle de vehiculo
let tipoDocumento = require('./src/rutas/tipodocumentorute');//detalle de vehiculo


let app = express();//recibe un constructor

// todos los entornos
app.set('port', process.env.PORT || port);//metodo para recibir puerto y proceso
app.use(bodyParser.json({type: 'application/json', limit: '10mb'}));//recibe un cuerpo y un objeto json
app.use(bodyParser.urlencoded({extended: false}));//recibe url codificada
app.use(express.static(path.join(__dirname, 'public')));//recibe direccion

//======================================================================

app.use(function (req, res, next)
{

    // Stio web al que desea permitir que se conecte
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // A que métodos que desea dar permisos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // A que  encabezados se les va a dar permiso
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    //Establezca en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas
    //a la API (por ejemplo, en caso de que use sesiones)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pase a la siguiente capa de middleware
    next();
  });

  //============================================================


 app.use('/detallesFactura', detallesFactura());//ruta para el detalle de factura
 app.use('/factura', factura());//ruta para el factura
 app.use('/usuario', usuario());//ruta para el usuario
 app.use('/moto', moto());//ruta para el vehiculo
 app.use('/tipoMoto', tipoMoto());//ruta para el tipo de vehiculo
 app.use('/detallesMoto', detallesMoto());//ruta para el tipo de vehiculo
 app.use('/sede', sede());//ruta para el sede
 app.use('/tipoDocumento', tipoDocumento());//ruta para el sede


http.createServer(app).listen(app.get('port'), function ( )
{
    console.log('Servidor Express escuchando por el puerto ' + app.get('port'));
});


module.exports = app;

