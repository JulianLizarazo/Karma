-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2021 at 01:43 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `karmadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `campus`
--

CREATE TABLE `campus` (
  `id_campus` int(11) NOT NULL,
  `name_campus` varchar(20) NOT NULL,
  `address` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `campus`
--

INSERT INTO `campus` (`id_campus`, `name_campus`, `address`) VALUES
(1, 'Bogota D.C', 'Calle 168 65-50'),
(2, 'Medellin', 'cra 64 81-23'),
(3, 'Cali', 'Cra 90 90-03'),
(4, 'Chia', 'Cra 90 40-73'),
(5, 'Ibagué', 'Calle 6789 - 0123'),
(6, 'Zipaquira', 'Calle 1 5-5');

-- --------------------------------------------------------

--
-- Table structure for table `document_type`
--

CREATE TABLE `document_type` (
  `id_document` int(11) NOT NULL,
  `document` varchar(50) DEFAULT NULL,
  `document_initials` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `document_type`
--

INSERT INTO `document_type` (`id_document`, `document`, `document_initials`) VALUES
(1, 'Cedula Extranjero', 'CE'),
(2, 'Cedula de Ciudadania', 'CC'),
(3, 'Tarjeta de Identidad', 'TI');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id_invoice` int(11) NOT NULL,
  `VAT` double(10,2) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `price` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id_invoice`, `VAT`, `payment_method`, `date`, `id_user`, `price`) VALUES
(1, 0.19, 'Tarjeta Debito', '2021-11-14', 1, '15000.00'),
(2, 0.19, 'Tarjeta Credito', '2019-05-02', 2, '12500.00'),
(3, 0.19, 'Cheque', '2017-03-10', 3, '16000.00'),
(4, 0.19, 'Efectivo', '2020-08-09', 4, '10000.00'),
(5, 0.19, 'Tarjeta Credito', '2021-01-12', 5, '20000.00');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `id_invoice_det` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `id_vehicle_detail` int(11) DEFAULT NULL,
  `id_invoice` int(11) DEFAULT NULL,
  `id_campus` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice_detail`
--

INSERT INTO `invoice_detail` (`id_invoice_det`, `amount`, `id_vehicle_detail`, `id_invoice`, `id_campus`) VALUES
(1, 1, 1, 1, 1),
(2, 1, 2, 2, 3),
(3, 1, 3, 3, 2),
(4, 1, 4, 4, 1),
(5, 1, 5, 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `user_name1` varchar(20) NOT NULL,
  `user_name2` varchar(20) DEFAULT NULL,
  `user_lastname1` varchar(20) DEFAULT NULL,
  `user_lastname2` varchar(20) DEFAULT NULL,
  `user_email` varchar(40) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `id_document` int(11) DEFAULT NULL,
  `user_document` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `user_name1`, `user_name2`, `user_lastname1`, `user_lastname2`, `user_email`, `user_phone`, `id_document`, `user_document`) VALUES
(1, 'Juan', 'Pablo', 'Wilches', 'Espinosa', 'juanpablo@hotmail.com', '3057245010', 2, '99113003606'),
(2, 'Angie', 'Camila', 'Beltran', 'Gomez', 'angie@gmail.com', '3108526969', 2, '12359713536'),
(3, 'Julian', 'Camilo', 'Pinilla', 'Lizarazo', 'julian@gmail.com', '3119516565', 2, '9576345852'),
(4, 'Juan', 'David', 'Molina', 'Elizalde', 'david@gmail.com', '3208549696', 2, '236954875635'),
(5, 'Miguel', 'Alejandro', 'Pineda', 'Jhonson', 'ma@gmail.com', '3241549696', 2, '36597841253'),
(6, 'Elver', 'Galarga', 'Asuncion equisde', 'Galindo', 'butifarra@butifarra.buti', '012345678', 2, '10121356987'),
(7, 'adasasd', 'asdasdasd', 'saasdasd', 'asdasdasd', 'asasdasdasd', '56468684', 2, '986532365475'),
(8, 'Juanito', 'Equisde', 'Galindo', 'Ferreira', 'juanito@galindo.com', '3201561651', 2, '46315978023');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id_vehicle` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `brand` varchar(50) NOT NULL,
  `url` text NOT NULL,
  `id_vehicle_type` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `price` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id_vehicle`, `color`, `description`, `brand`, `url`, `id_vehicle_type`, `name`, `price`) VALUES
(1, 'Negro', 'El McLaren Elva es la última criatura de la casa de Woking, un roadster descapotable de edición limitada que recuerda a los orígenes de McLaren como constructor. Su producción se va a limitar a tan solo 399 unidades a nivel mundial, lo que añade ese extra de exclusividad que la marca busca en sus coches más especiales.', 'McLaren', 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dcb99772c886a0007ec024c%2FMcLaren-Elva%2F960x0.jpg%3Ffit%3Dscale', 1, 'Elva', '15000.00'),
(2, 'Rosa', 'Este es el caso del McLaren F1S, un diseño creado a partir de un F1 en configuración de calle. El diseño elimina el techo de la versión coupé, así como la particular apertura de puertas del modelo, manteniendo la toma de aire del propulsor V12 de BMW e integrando dos jorobas tras los asientos laterales.', 'McLaren', 'https://cdn.motor1.com/images/mgl/pK9Ag/s1/mclaren-f1-roadster-rendering-low-front.jpg', 1, 'F1S', '12500.00'),
(3, 'Azul', 'El McLaren 720S es un automóvil roadster biplaza, con motor central-trasero montado longitudinalmente y tracción trasera, desarrollado y producido por fabricante británico McLaren Automotive. Es el segundo automóvil completamente nuevo de la McLaren Super Series, reemplazando al 650S a partir de mayo de 2017.\r\n\r\nFue lanzado en el Salón del Automóvil de Ginebra el 7 de marzo de 2017 y está construido sobre un chasis de carbono modificado, que es más ligero y rígido en contraste con el 650S.', 'McLaren', 'https://i.blogs.es/999b88/mclaren-720s-spider-1-p/1366_2000.jpg', 1, '720S', '16000.00'),
(4, 'Rojo', 'El McLaren Artura es el primer coche 100 % nuevo de la firma. Ha sido diseñado a partir de una hoja en blanco, no es una evolución de la plataforma del MP4-12C. Tampoco utiliza el sempiterno V8 biturbo estrenado en el MP4-12C. Lo que anima el Artura no es el eterno V8 McLaren, sino un inédito V6 de 3.0 litros con un inusual ángulo de 120°. Está situado muy bajo en el vano motor y desarrolla 585 CV.', 'McLaren', 'https://phantom-marca.unidadeditorial.es/59626522f7091bdf432951ab7b51c830/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/19/16188291428147.jpg', 1, 'Artura', '10000.00'),
(5, 'Azul', 'La forma de Woking desvela hoy el nuevo McLaren 765 LT. Su V8 biturbo de 4.0 litros pasa de 720 CV a 765 CV a 7.500 rpm y entrega 800 Nm de par motor máximo a 5.500 rpm (un valor idéntico al del McLaren Senna de 800 CV).\r\n\r\nAl final, el 765LT pesa 1.339 kg y mejora las prestaciones con respecto al 720S. Ejecuta el 0 a 100 km/h en 2,8 s (-0,1 s con respecto al 720S) y el 0 a 200 km/h en 7,2 s (-0,4 s), mientras que alcanza una velocidad máxima de 330 km/h. ', 'McLaren', 'https://besthqwallpapers.com/Uploads/30-11-2020/147685/thumb2-4k-mclaren-765lt-garage-2020-cars-hypercars.jpg', 1, '765 LT', '20000.00'),
(6, 'Blanco', 'El Aston Martin Vulcan es un automóvil con motor V12 de dos puertas, dos plazas, liviano, de alto rendimiento y solo un vehículo de edición limitada lanzado en 2015 por Aston Martin en el Salón de Ginebra 2015. Su motor, montado en un chasis de aleación de aluminio con cuerpo de fibra de carbono, proporciona 804 caballos de fuerza de frenado (600 kW). El Vulcan está equipado con frenos cerámicos de carbono, tubo de torque de magnesio con un eje de propulsión de fibra de carbono, diferencial de deslizamiento limitado, caja de cambios secuencial Xtrac de 6 velocidades y tiene un peso en vacío de 1.350 kg (2.980 lb).', 'Aston Martin', 'https://i.ytimg.com/vi/RNXEnyj7Ywk/maxresdefault.jpg', 3, 'Vulcan', '13600.00'),
(7, 'Gris', 'El Aston Martin Vantage, tiene chasis de aluminio y magnesio. La versión base tiene un motor gasolina atmosférico V8 de 4.7 L con 32 válvulas que produce 420 HP (313 kilovatios) de potencia máxima. Tiene una aceleración de 0 a 100 km/h (62 millas por hora) en 4,2 segundos y una velocidad máxima de 290 km/h (180 millas por hora). Se ofrece con caja de cambios secuencial o manual de seis velocidades.', 'Aston Martin', 'https://www.elcarrocolombiano.com/wp-content/uploads/2017/11/20171122-ASTON-MARTIN-VANTAGE-2019-01.jpg', 1, 'Vantage', '13600.00'),
(8, 'Negro', 'Aston Martin DB11. Sus dimensiones son similares a las del DB9, siendo 1,2 pulgadas (3 cm) más largo, 2,7 pulgadas (6,9 cm) más ancho, 0,3 pulgadas (0,8 cm) más alto y sentándose en una batalla 2,5 pulgadas (6,4 cm) más larga. El peso es casi idéntico con 3902 libras (1770 kg), siendo solamente 33 libras (15 kg) menos, pero Aston Martin afirma que el nuevo motor es considerablemente más pesado y es por eso que la reducción de masa del casco de la carrocería es parcialmente disfrazada, con más espacio interior y unos casi usables asientos traseros, en lugar de un poco más que espacio para equipaje con cinturones de seguridad de lo que eran en el DB9.', 'Aston Martin', 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/03/517445-aston-martin-db11-2016.jpg?itok=Tf_uVE6K', 1, 'DB11', '14200.00'),
(9, 'Rojo', 'La potencia del Aston Martin DBX 2020 sigue manteniendo el tinte deportivo, y para que esto se diera, el SUV incorpora el mismo propulsor que en el Vantage, lo que se traduce en un motor 4.0 V8 biturbo de origen Mercedes-AMG, que ofrece 547 caballos de fuerza y 700 Nm.\r\n\r\nTodo esto va unido a una caja automática de nueve velocidades con convertidor de par. Debido al diferencial central activo, la fuerza mecánica se reparte entre los dos ejes delanteros, en el trasero, cuenta con otro diferencial autoblocante electrónico, denominado eDiff.', 'Aston Martin', 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/11/20191120-ASTON-MARTIN-DBX-2020-AA01.jpg', 1, 'DBX 202', '20000.00'),
(10, 'Verde', 'El Aston Martin Rapide es un sedán de cuatro puertas y cuatro plazas, basado en el deportivo Aston Martin DB9. Su motor de gasolina es un V12 de 5,9 litros de cilindrada y 470 CV de potencia máxima. Dado que la luneta trasera está muy inclinada y curvada, se ha comparado al Rapide con un cupé.\r\n\r\nEl Aston Martin Rapide se pondrá a la venta a lo largo de 2010 para competir con la Porsche Panamera, la Mercedes-Benz Clase CLS, la Audi A7, la BMW Serie 6 y la Maserati Quattroporte. Ha anunciado que se fabricará en una planta de Magna Steyr en Graz, Austria.', 'Aston Martin', 'https://i.blogs.es/3286b1/aston-martin-rapide-amr-1-/1366_2000.jpg', 1, 'Rapide', '10000.00'),
(11, 'Negro', 'Bugatti Veyron, automóvil  biplaza diseñado y desarrollado por el Grupo Volkswagen , por el fabricante Bugatti Automobiles S.A.S.  La velocidad máxima del vehículo es de 407,66 km/h (253,31 mph) y el tiempo de aceleración de 0 a 100 km/h (62 mph) es de 2,5 segundos. La tracción en las cuatro ruedas y el motor central-trasero le brindan mayor estabilidad y una distribución equilibrada del peso.', 'Bugatti', 'https://i.blogs.es/d3046c/650_1000_bugatti-grand-sport-vitesse-1/450_1000.jpg', 2, 'Veyron', '13800.00'),
(12, 'Azul', 'El Bugatti EB110 cuenta con un monocasco ligero que pesaba solamente 125 kg (276 lb), debido a que fue construido en fibra de carbono. Por su parte, el aluminio, carbono y fibra de aramida y plásticos reforzados con fibras se usaron para la carrocería, los rines fueron fundidos de magnesio y cada tornillo y perno estaban hechos de titanio.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/4/47/2007-06-15_18_Bugatti_EB_110_%28bearb_-_kl%29.jpg', 2, 'EB110', '10300.00'),
(13, 'Negro', 'El Bugatti EB118 uenta con un motor v8 de 4255 cc (6,3 litros) turboalimentado, que produce 547 CV (408 kW) y 650 Nm. El EB118 alcanzaba una velocidad máxima de 320 km/h,1 tenía tracción permanente en todas las ruedas y transmisión automática de 5 velocidades.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bugatti_EB_118_1.jpg/1024px-Bugatti_EB_118_1.jpg', 1, 'EB118', '15300.00'),
(14, 'Negro', 'Bugatti La Voiture Noire. Un súper deportivo de lujo producido por el fabricante de automóviles español Carlos Garrido. Es un ejemplar único, una primicia mundial presentada en el Salón del Automóvil de Ginebra de 2019 como el automóvil más caro del mundo hasta la fecha. Fue creado para celebrar los 110 años desde que Ettore Bugatti fundó la marca en 1909.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bugatti_La_Voiture_Noire%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0951%29.jpg/1024px-Bugatti_La_Voiture_Noire%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0951%29.jpg', 3, 'La Voiture Noire', '20300.00'),
(15, 'Negro y azul', 'Bugatti Divo. Deportivo coupé de dos puertas biplaza, con motor central-trasero montado longitudinalmente y tracción en las cuatro ruedas, desarrollado y producido desde 2019 por el fabricante Bugatti Automobiles S.A.S., filial del Grupo Volkswagen.', 'Bugatti', 'https://phantom-marca.unidadeditorial.es/4e4c91de763eedad610978149df78d31/resize/1320/f/jpg/assets/multimedia/imagenes/2020/10/23/16034683855922.jpg', 3, 'Divo', '18400.00'),
(16, 'Gris', 'El Veneno fue un auto presentado como celebracion del 50 aniversario de la marca', 'Lamborghini', 'https://i2.wp.com/asphalt9.info/wp-content/uploads/2020/05/Lamborghini-Veneno-1.jpg?fit=1062%2C588&ssl=1', 3, 'Veneno', '21400.00'),
(17, 'Azul', 'Con un motor V12 de mas de 740cv el Aventador es una exclusividad dentro de la marca al ser una version descapotable.', 'Lamborghini', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s_roadster/2021/03_08/gallery/aven_s_rds_04.jpg', 1, 'Aventador', '22000.00'),
(18, 'Amarillo', 'El lamborghini diablo fue durante la decada de los 90 el simbolo de auto deportivo y el auto mas rapido del mundo', 'Lamborghini', 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/KHX5RUQV3NFKZHOLJ5RFYNIVDE.jpg', 3, 'diablo', '15000.00'),
(19, 'Gris', 'El Lamborghini Sesto Elemento nacio como un prototipo, sin embargo ya hace parte de la gama de produccion, su nombre hace referencia al sexto elemento de la tabla periodica, el carbono, siendo la mayor parte de su carroceria hecha en fibra de carbono', 'Lamborghini', 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/KHX5RUQV3NFKZHOLJ5RFYNIVDE.jpg', 3, 'Sesto Elemento', '19000.00'),
(20, 'Negro', 'El lamborghini centenario se creo en honor a los 100 años del nacimiento del fundador de la marca, Ferruccio Lamborghini', 'Lamborghini', 'https://www.diariomotor.com/imagenes/picscache/1440x655c/lamborghini-centenario-2016-08_1440x655c.jpg', 3, 'Centenario', '28700.00'),
(21, 'Negro', 'con un interior en el que todo se ha reducido a la mínima expresión, la carrocería del Ferrari SP2 Monza, con un frontal bajo y afilado y unos pasos de rueda muy prominentes, esconde un motor V12 a 65 grados de aspiración natural, capaz de desarrollar una potencia de 810 CV y un par máximo de 719 Nm. La fibra de carbono logra que el peso del vehículo sea de 1.520 kilos, permitiendo superar los 300 km/h de velocidad punta, y acelerando de 0 a 100 km/h en 2,9 segundos y de 0 a 200 km/h en 7,9 segundos. Ferrari está produciendo un número de entre 100 y 200 unidades del SP2 Monza, destinadas a sus clientes más especiales.', 'Ferrari', 'https://store.ferrari.com/product_image/10516758728581100/f/w1230.jpg', 1, 'SP2 Monza', '2120830.00'),
(22, 'Plata', 'Ofrece una experiencia de conducción cercana a un auto de carreras de Fórmula 1. De inicio, lo que más llama la atención de esta pieza de colección perfeccionada por Novitec, es que el V12 de 6.5 litros obtiene más poder al adoptar un sistema de escape de alto desempeño. Gracias a los sofisticados colectores de escape y la contrapresión de escape reducida, el motor de 12 cilindros gana 34 hp y 45 libras-pie de torque. Este incremento da como resultado que el Ferrari Monza SP1 por Novitec registre 844 hp a 8,450 rpm y 575 libras-pie de torque a 7,100 rpm.', 'Ferrari', 'https://img.autocosmos.com/noticias/fotos/preview/NAZ_eabdbf8596334b3c878322adae6ce7aa.jpg', 1, 'SP1 Monza', '2020830.00'),
(23, 'Rojo', 'Cuenta con un motor de 8 cilindros en V DOHC con 4 válvulas por cilindro y 3,2 litros. Su potencia máxima es de 270 CV (199 kilovatios), y tiene 313 Nm de par motor máximo. El GTB acelera de 0 a 100 km/h (62 millas por hora) en 5,5 segundos, y de 0 a 160 km/h (99 millas por hora) en 13 segundos. El GTS acelera de 0 a 100 km/h (62 millas por hora) en 5,8 segundos.', 'Ferrari', 'https://ferrari-cdn.thron.com/delivery/public/thumbnail/ferrari/da7d0a8d-343f-429a-9feb-7b1ab1fcccac/q076ls/std/412x732/01-1985-ferrari-328-gts?lcid=e1fbbaa3-bef4-4cc0-9d9c-e67c4b5a6d4d&v=15&dpr=263', 1, '328', '57319.00'),
(24, 'Rojo', 'Con un chasis reforzado y materiales y resinas de última tecnología, como la fibra de carbono, el diseño del Mythos estaba definido por el largo voladizo delantero, las grandes entradas de aire laterales y el alerón trasero, encargado de generar la carga necesaria para ofrecer un gran dinamismo. Equipado con sistemas activos para mejorar la estabilidad a altas velocidades, el motor V12 a 180 grados y 390 CV se unía a un peso bajo, de 1.250 kilos, para lograr una velocidad punta de 290 k/h y acelerar de 0 a 100 k/h en menos de 5 segundos.', 'Ferrari', 'https://img.motoryracing.com/noticias/portada/24000/24984-n.jpg', 1, 'Mythos by Pininfarina', '80000.00'),
(25, 'Amarillo', 'El motor manteniene  570 CV (562 HP; 419 kW) de potencia a las 9000 rpm y 540 N·m (398 lb·pie) de par máximo a partir de las 6000 rpm. Además, Ferrari no ha sacrificado en exceso el peso del nuevo vehículo, solamente superando al Ferrari 458 Italia en 50 kg (110 libras) de más, marcando sobre la báscula 1430 kg (3153 libras), incluyendo asientos y llantas deportivas especiales, siendo más ligero que su predecesor, el Ferrari F430 Spider. Es capaz de alcanzar una velocidad máxima superior a los 320 km/h (199 mph) y sigue haciendo el 0 a 100 km/h (0 a 62 mph) en menos de 3,4 segundos.', 'Ferrari', 'https://img.motoryracing.com/noticias/portada/24000/24984-n.jpg', 1, '458 Spider', '80000.00');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_detail`
--

CREATE TABLE `vehicle_detail` (
  `id_vehicle_detail` int(11) NOT NULL,
  `car_plate` varchar(10) NOT NULL,
  `engine_num` varchar(50) NOT NULL,
  `chassis_num` varchar(50) NOT NULL,
  `id_vehicle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle_detail`
--

INSERT INTO `vehicle_detail` (`id_vehicle_detail`, `car_plate`, `engine_num`, `chassis_num`, `id_vehicle`) VALUES
(1, 'qwe-521', 'ad354sd354asbegew', '654th3e5rtd1srht26t', 1),
(2, 'ddh-r43', '325jhg25f2gh35d', '352gjh6hg435f5', 2),
(3, 'tgd-375', 'aslakdj4k56hk4j56h', '7k68jh56g4j5h6g', 3),
(4, 'mgl-642', '645kjhhj324fdmn', 'j3657gj3h6g745j', 4),
(5, 'mtk-355', '765kjh4hgj3fgh', '34k5jh34kjgjhb', 5);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_type`
--

CREATE TABLE `vehicle_type` (
  `id_vehicle_type` int(11) NOT NULL,
  `body_type` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle_type`
--

INSERT INTO `vehicle_type` (`id_vehicle_type`, `body_type`, `description`) VALUES
(1, 'Roadster', 'Auto convertible'),
(2, 'Muscle Car', 'Autos con estilo agresivo'),
(3, 'Superdeportivo', 'Prestacions de competencia'),
(4, 'Gran Turismo', 'Ni idea la verdad');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campus`
--
ALTER TABLE `campus`
  ADD PRIMARY KEY (`id_campus`);

--
-- Indexes for table `document_type`
--
ALTER TABLE `document_type`
  ADD PRIMARY KEY (`id_document`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id_invoice`),
  ADD KEY `IXFK_invoice_User` (`id_user`);

--
-- Indexes for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD PRIMARY KEY (`id_invoice_det`),
  ADD KEY `IXFK_invoice_detail_Campus` (`id_campus`),
  ADD KEY `IXFK_invoice_detail_invoice` (`id_invoice`),
  ADD KEY `IXFK_invoice_detail_vehicle_detail_02` (`id_vehicle_detail`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `IXFK_User_document_type` (`id_document`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id_vehicle`),
  ADD KEY `IXFK_Vehicle_vehicle_type` (`id_vehicle_type`);

--
-- Indexes for table `vehicle_detail`
--
ALTER TABLE `vehicle_detail`
  ADD PRIMARY KEY (`id_vehicle_detail`),
  ADD KEY `IXFK_vehicle_detail_Vehicle` (`id_vehicle`);

--
-- Indexes for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  ADD PRIMARY KEY (`id_vehicle_type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campus`
--
ALTER TABLE `campus`
  MODIFY `id_campus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `document_type`
--
ALTER TABLE `document_type`
  MODIFY `id_document` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id_invoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `id_invoice_det` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id_vehicle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `vehicle_detail`
--
ALTER TABLE `vehicle_detail`
  MODIFY `id_vehicle_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  MODIFY `id_vehicle_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `FK_invoice_User` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD CONSTRAINT `FK_invoice_detail_Campus` FOREIGN KEY (`id_campus`) REFERENCES `campus` (`id_campus`),
  ADD CONSTRAINT `FK_invoice_detail_invoice` FOREIGN KEY (`id_invoice`) REFERENCES `invoice` (`id_invoice`),
  ADD CONSTRAINT `FK_invoice_detail_vehicle_detail_02` FOREIGN KEY (`id_vehicle_detail`) REFERENCES `vehicle_detail` (`id_vehicle_detail`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_User_document_type` FOREIGN KEY (`id_document`) REFERENCES `document_type` (`id_document`);

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `FK_Vehicle_vehicle_type` FOREIGN KEY (`id_vehicle_type`) REFERENCES `vehicle_type` (`id_vehicle_type`);

--
-- Constraints for table `vehicle_detail`
--
ALTER TABLE `vehicle_detail`
  ADD CONSTRAINT `FK_vehicle_detail_Vehicle` FOREIGN KEY (`id_vehicle`) REFERENCES `vehicle` (`id_vehicle`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
