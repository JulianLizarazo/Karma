let express = require('express');//guarda express que nosotros intalamos
let bodyParser = require('body-parser'), port = 3000;//rmanejo de cuerpo de la "pagina" y puerto
let http = require('http');//protocolo de intercambio de archivos
let path = require('path');//direccion


let invoiceDetail = require('./src/rutas/invoicedetailrute');//detalle factura
let invoice = require('./src/rutas/invoicerute');//detalle factura
let user = require('./src/rutas/userrute');//detalle factura
let vehicle = require('./src/rutas/vehiclerute');//detalle factura
let vehicleType = require('./src/rutas/vehicletyperute');//detalle factura
let campus = require('./src/rutas/campusrute');//detalle factura
let vehicleDet = require('./src/rutas/vehicledetailrute');//detalle factura


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


 app.use('/invoicedet', invoiceDetail());//ruta para el detalle de factura
 app.use('/invoice', invoice());//ruta para el factura
 app.use('/user', user());//ruta para el usuario
 app.use('/vehicle', vehicle());//ruta para el vehiculo
 app.use('/vehicletype', vehicleType());//ruta para el tipo de vehiculo
 app.use('/vehicledet', vehicleDet());//ruta para el tipo de vehiculo
 app.use('/campus', campus());//ruta para el sede


http.createServer(app).listen(app.get('port'), function ( )
{
    console.log('Servidor Express escuchando por el puerto ' + app.get('port'));
});


module.exports = app;

