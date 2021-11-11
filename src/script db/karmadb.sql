-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2021 at 06:43 AM
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
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id_invoice` int(11) NOT NULL,
  `VAT` double(10,2) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `id_campus` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `price` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id_invoice`, `VAT`, `payment_method`, `date`, `id_campus`, `id_user`, `price`) VALUES
(1, 0.19, 'Tarjeta debito', '2018-02-20', 3, 5, NULL),
(2, 0.19, 'Tarjeta credito', '2018-11-30', 2, 4, NULL),
(3, 0.19, 'Cheque', '2017-08-08', 3, 1, NULL),
(4, 0.19, 'Efectivo', '2020-01-01', 4, 2, NULL),
(5, 0.19, 'Tarjeta de oro', '2019-10-20', 1, 1, NULL),
(6, 0.19, 'Efectivo', '2021-10-23', 4, 3, NULL),
(7, 0.19, 'PSE', '2021-02-25', 4, 69, NULL),
(9, 0.19, 'Cerdos :v', '2021-05-15', 1, 1, NULL),
(10, 0.19, 'prueba', '2021-10-30', 1, 6, NULL),
(23, 0.19, 'Efectivo', '2021-05-20', 4, 21, NULL),
(24, 0.19, 'Efectivo', '2021-05-20', 4, 22, NULL),
(25, 0.19, 'Efectivo', '2021-05-20', 4, 23, NULL),
(26, 0.19, 'Efectivo', '2021-05-20', 4, 24, NULL),
(27, 0.19, 'Efectivo', '2021-05-20', 4, 25, NULL),
(28, 0.19, 'Efectivo', '2021-05-20', 4, 26, NULL),
(29, 0.19, 'Efectivo', '2021-05-20', 4, 27, NULL),
(30, 0.19, 'Efectivo', '2021-05-20', 4, 28, NULL),
(31, 0.19, 'Efectivo', '2021-05-20', 4, 29, NULL),
(32, 0.19, 'Efectivo', '2021-05-20', 4, 30, NULL),
(33, 0.19, 'Efectivo', '2021-05-20', 4, 31, NULL),
(34, 0.19, 'Efectivo', '2021-05-20', 4, 32, NULL),
(35, 0.19, 'Efectivo', '2021-05-20', 4, 33, NULL),
(36, 0.19, 'Efectivo', '2021-05-20', 4, 34, NULL),
(37, 0.19, 'Efectivo', '2021-05-20', 4, 35, NULL),
(38, 0.19, 'Efectivo', '2021-05-20', 4, 36, NULL),
(39, 0.19, 'Efectivo', '2021-05-20', 4, 37, NULL),
(40, 0.19, 'Efectivo', '2021-05-20', 4, 38, NULL),
(41, 0.19, 'Efectivo', '2021-05-20', 4, 39, NULL),
(42, 0.19, 'Efectivo', '2021-05-20', 4, 40, NULL),
(43, 0.19, 'Efectivo', '2021-05-20', 4, 41, NULL),
(44, 0.19, 'Efectivo', '2021-05-20', 4, 42, NULL),
(45, 0.19, 'Efectivo', '2021-05-20', 4, 43, NULL),
(46, 0.19, 'Efectivo', '2021-05-20', 4, 44, NULL),
(47, 0.19, 'Efectivo', '2021-05-20', 4, 45, NULL),
(48, 0.19, 'PSE', '2021-05-20', 4, 46, NULL),
(49, 0.19, 'PSE', '2021-05-20', 4, 47, NULL),
(50, 0.19, 'Efectivo', '2021-05-20', 4, 48, NULL),
(51, 0.19, 'Efectivo', '2021-05-20', 4, 49, NULL),
(52, 0.19, 'Efectivo', '2021-05-20', 4, 50, NULL),
(53, 0.19, 'Efectivo', '2021-05-20', 4, 51, NULL),
(54, 0.19, 'Efectivo', '2021-05-20', 4, 52, NULL),
(55, 0.19, 'Efectivo', '2021-05-20', 4, 53, NULL),
(56, 0.19, 'PSE', '2021-05-20', 4, 54, NULL),
(57, 0.19, 'Efectivo', '2021-05-20', 4, 55, NULL),
(58, 0.19, 'Efectivo', '2021-05-20', 4, 56, NULL),
(59, 0.19, 'Efectivo', '2021-05-20', 4, 57, NULL),
(60, 0.19, 'Efectivo', '2021-05-20', 4, 58, NULL),
(61, 0.19, 'Efectivo', '2021-05-20', 4, 59, NULL),
(62, 0.19, 'PSE', '2021-05-20', 4, 60, NULL),
(63, 0.19, 'Efectivo', '2021-05-20', 4, 61, NULL),
(64, 0.19, 'PSE', '2021-05-20', 4, 62, NULL),
(65, 0.19, 'Efectivo', '2021-05-20', 4, 63, NULL),
(66, 0.19, 'Efectivo', '2021-05-20', 4, 64, NULL),
(67, 0.19, 'Efectivo', '2021-05-20', 4, 65, NULL),
(68, 0.19, 'Efectivo', '2021-05-20', 4, 66, NULL),
(69, 0.19, 'Efectivo', '2021-05-20', 4, 67, NULL),
(70, 0.19, 'Efectivo', '2021-05-20', 4, 68, NULL),
(71, 0.19, 'Tarjeta de credito', '2021-11-04', 3, 69, NULL),
(72, 0.19, 'Mi dios le pague', '2021-11-04', 3, 70, NULL),
(73, 0.19, 'PSE', '2021-05-20', 4, 71, NULL),
(74, 0.19, 'PSE', '2021-10-30', 1, 3, NULL),
(75, 0.19, 'PSE', '2021-10-30', 5, 3, NULL),
(76, 0.19, 'PSE', '2021-10-30', 4, 3, NULL),
(77, 0.19, 'PSE', '2021-11-05', 3, 1, NULL),
(78, 0.19, 'Tarjeta debito', '0000-00-00', NULL, 5, NULL),
(79, 0.19, 'Tarjeta debito', '2018-11-05', 3, 5, '5564654.00'),
(80, 0.19, 'Tarjeta debito', '2018-11-20', 2, 5, NULL),
(81, 0.19, 'Tarjeta credito', '2020-08-05', 1, 4, '65432.00');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `id_invoice_det` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `id_invoice` int(11) DEFAULT NULL,
  `id_vehicle_detail` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice_detail`
--

INSERT INTO `invoice_detail` (`id_invoice_det`, `amount`, `id_invoice`, `id_vehicle_detail`) VALUES
(1, 1, 71, 8),
(2, 1, 2, 6),
(3, 1, 3, 7),
(4, 1, 4, 8),
(6, 1, 6, 10),
(7, 1, 5, 6),
(8, 1, 1, 7),
(11, 1, 10, 7),
(26, 1, 61, 6),
(27, 1, 60, 6),
(28, 1, 62, 6),
(29, 1, 64, 6),
(30, 1, 65, 6),
(31, 1, 66, 6),
(34, 1, 69, 6),
(35, 1, 70, 6),
(36, 1, 71, 6),
(37, 1, 72, 6),
(38, 1, 73, 6),
(39, 2, 4, 10),
(40, 2, 50, NULL),
(43, 2, 40, 5);

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
  `document` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `user_name1`, `user_name2`, `user_lastname1`, `user_lastname2`, `user_email`, `user_phone`, `document`) VALUES
(1, 'Juan', 'Pablo', 'Wilches', 'Espinosa', 'juanpablo@hotmail.com', '3057245010', NULL),
(2, 'Angie', 'Camila', 'Beltran', 'Gomez', 'angie@gmail.com', '3108526969', NULL),
(3, 'Julian', 'Camilo', 'Pinilla', 'Lizarazo', 'julian@gmail.com', '3119516565', NULL),
(4, 'Juan', 'David', 'Molina', 'Elizalde', 'david@gmail.com', '3208549696', NULL),
(5, 'Miguel', 'Alejandro', 'Pineda', 'Jhonson', 'ma@gmail.com', '3241549696', NULL),
(6, 'Elver', 'Galarga', 'Asuncion equisde', 'Galindo', 'butifarra@butifarra.buti', '012345678', NULL),
(7, 'adasasd', 'asdasdasd', 'saasdasd', 'asdasdasd', 'asasdasdasd', '56468684', NULL),
(9, 'Juanito', 'Equisde', 'Galindo', 'Ferreira', 'juanito@galindo.com', '3201561651', NULL),
(20, 'Monica ', 'Equisde', 'Galindo', 'Equisde', 'monica@galindo.com', '320456868', NULL),
(21, 'safasfasfasf', 'asfasfasf', 'asfasfasfasf', 'asfasfasfasf', 'asasfasasfasf', '684638468', NULL),
(22, 'Hola', 'Amigos', 'De', 'Youtube', 'asfasfas', '123456', NULL),
(23, 'Tambien', 'Caeras', 'Equisde', 'Equisde', 'asdasdasdasd', '568684684', NULL),
(24, 'Brayan', 'Leonidas', 'Ferreira', 'Galindo', 'brayan@gmail.com', '3145986523', NULL),
(25, 'Brayan', 'Andres', 'Ferreira', 'Galindo', 'brayan@gmail.com', '3145986523', NULL),
(26, 'Vegeta', 'Willy', 'Rubius', 'Folagor', 'asdasd@gmail.com', '123456', NULL),
(27, 'fasfasfas', 'fasafsfasfas', 'afsafsfasfas', 'fasfasfasafsfas', 'afsfasfas', '54684', NULL),
(28, 'asfasfasfasf', 'asfafasfasf', 'asfasfasfasf', 'asfasfasfasf', 'asfasfasfasf', '56468468', NULL),
(29, 'fasasddasasd', 'asdasdasdasd', 'asdasdasdasd', 'asdasdasdasd', 'afsafsasf', '486684', NULL),
(30, 'asfasafsasffas', 'afsfasafsafs', 'fasasfas', 'afsfasafs', 'fasafs', '84684684', NULL),
(31, 'fasfasfasfas', 'afsafsafsafs', 'fasafsfasfasfas', 'fasfasfas', 'afsfas', '48684fas', NULL),
(32, 'asfasasdasdas', 'asdadsasdasd', 'asdsdadsasd', 'asdasdasdasdasd', 'adsadsads', '8468648', NULL),
(33, 'sadasdasdasasd', 'fsfasfasfasfas', 'afsfsfasfas', 'fasfasfasfas', 'sffasafsfas', 'f8668648', NULL),
(34, 'asfasfas', 'asfasfasf', 'asfasfasfas', 'fasfasf', 'asfasfasf', '886135', NULL),
(35, 'asfasfafsasf', 'asasasasd', 'asasdas', 'sdasdasd', 'dasasdasd', '646554as', NULL),
(36, 'asfasfas', 'aasfafs', 'fasafsafs', 'afsafsasdasd', 'asfasfasf', '\n655651', NULL),
(37, 'asasdasd', 'asfasfasfas', 'asfasfasf', 'asfasfasf', 'fasfafs', '54684as', NULL),
(38, 'asfasfasfasf', 'asfasfasf', 'asfasfasf', 'asfasfasf', 'asfasfasf', '5153', NULL),
(39, 'asfasfasf', 'asfasfasf', 'asfasfasfasf', 'asfasfasf', 'asfasfasf', '6648665', NULL),
(40, 'asdasdsadasd', 'asdasdasdasd', 'asdasdasd', 'asdasdsdasda', 'afsafsfas', '4684684', NULL),
(41, 'asfasfasf', 'asfafas', 'asfasfasf', 'asfasfasf', 'asfasfasf', '64656', NULL),
(42, 'asfasfasf', 'asfasfasf', 'asfasfasf', 'asfasfasf', 'asfasfasfasf', '648468', NULL),
(43, 'asdasdasfafs', 'afsasfafsfas', 'afsafsafsfas', 'afsasfafsfas', 'afsasfafs', '4684654', NULL),
(44, 'asfadasdas', 'asdasdasd', 'asdasdasdasd', 'asdasdasdsda', 'asdasdasdasd', '84665468468', NULL),
(45, 'asdasdasdasd', 'adsaadsasd', 'asasddas', 'asadsasdasd', 'asdasdasd', '64856546', NULL),
(46, 'prueba', 'xd', 'xdxdxd', 'xdxdxd', 'xdxdxd', '1123132', NULL),
(47, 'sadasd', 'asdasdas', 'asdasasd', 'asdasfasasf', 'sasfasfasf', '85553315', NULL),
(48, 'asasfasfas', 'afsafsafs', 'asasdasd', 'asfafsafs', 'asfafsafs', '54132651', NULL),
(49, 'afasfasf', 'asfasfasf', 'asasdasd', 'asdasdasd', 'sfasfasf', '165151a', NULL),
(50, 'asasdasd', 'asdasdasd', 'asdasdasd', 'afsfasafs', 'asdasdasdasd', '7684684', NULL),
(51, 'adsadsasd', 'fasasas', 'afafsafs', 'asffasafs', 'asffasafs', '5161684as', NULL),
(52, 'asfasf', 'fasafsafs', 'fasasf', 'afsasfafs', 'asfasfasf', '68684', NULL),
(53, 'asdasdasd', 'asdasdasdasd', 'asdasdasd', 'afsasfasf', 'asasdasd', '851351651', NULL),
(54, 'asdasasd', 'asdasdasd', 'asdasdads', 'asdasdasd', 'asdasdasd', '541351', NULL),
(55, 'sadasd', 'sdaasdasd', 'fasfasfas', 'afssfasfas', 'sasdasfasf', '6545321', NULL),
(56, 'asdasd', 'asasdasd', 'asdasasd', 'asdasdasd', 'asdasdasd', '746565', NULL),
(57, 'asfafsafs', 'asfasfasf', 'asasfafs', 'asasfasfasf', 'afsasfafs', '8465465', NULL),
(58, 'asfasfas', 'asfasfasf', 'asfasfaf', 'asfasfasf', 'asfasfasfasf', '5165115', NULL),
(59, 'asasdasd', 'asfasfasf', 'asfasfasf', 'asfasfasf', 'asfasfasfasf', '8486456', NULL),
(60, 'asfasfasf', 'afsfasfasfas', 'afafsafs', 'afsfasfas', 'asafsfasfas', '64648', NULL),
(61, 'sadasd', 'asdasd', 'asdasd', 'asfasas', 'asdasdasd', '654465', NULL),
(62, 'prueba xd', 'asdads', 'asdasd', 'asdasdsd', 'asdasdasd', '868684', NULL),
(63, 'afsasffas', 'asfafsfsa', 'afsafsfas', 'afsasffas', 'asasfasf', '5411535', NULL),
(64, 'sadasd', 'asdasd', 'asasd', 'asdasd', 'asdasd', '654684', NULL),
(65, 'dasdasasd', 'asdasdasd', 'asasdasd', 'asdasddas', 'asdasdsda', '54546', NULL),
(66, 'sadasdas', 'asdasdads', 'asdasdasd', 'asdasdasd', 'asdasdasd', '455668486', NULL),
(67, 'asdasasd', 'asdadsasd', 'asdasdasd', 'asdasdasd', 'asasdasd', '768468', NULL),
(68, 'asdasads', 'adsasdasd', 'asdasdasd', 'asdasddas', 'sdaasdasd', '1484648', NULL),
(69, 'Camilo', 'Andres', 'Ferreira', 'Galindo', 'camiloferreria@hotmail.com', '3145698745', NULL),
(70, 'Ameno', 'Dorime', 'Gracias', 'Dios', 'graciasdiosito@gmail.com', '32698548545', NULL),
(71, 'dsasda', 'asadsasasd', 'asdasdasd', 'asdasdasda', 'asasasasd', '454468168', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id_vehicle` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `brand` varchar(50) NOT NULL,
  `url` text NOT NULL,
  `id_vehicle_type` int(11) NOT NULL,
  `price` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id_vehicle`, `name`, `color`, `description`, `brand`, `url`, `id_vehicle_type`, `price`) VALUES
(1, 'LaFerrari', 'Amarillo', 'osiosisosisoasfioasf', 'Ferrari', 'a/b/c', 1, NULL),
(2, 'Bugatti Chiron', 'Azul', 'El Bugatti Chiron se caracteriza por ser el vehículo más rápido del mundo, siendo capaz de sobrepasar los 490 kilómetros por hora. Es un vehículo revolucionario, cuenta con un impresionante motor W16 de 8 litros en posición central, con 1500 CV, que le permite hacer el 0-100 km/h en 2,5 segundos', 'Buggatti', 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bugatti-chiron-', 2, NULL),
(3, 'Aston Martin Vulcan', 'Blanco', 'El Aston Martin Vulcan es un automóvil con motor V12 de dos puertas, dos plazas, liviano, de alto rendimiento y solo un vehículo de edición limitada lanzado en 2015 por Aston Martin en el Salón de Ginebra 2015. Su motor, montado en un chasis de aleación de aluminio con cuerpo de fibra de carbono, proporciona 804 caballos de fuerza de frenado (600 kW). El Vulcan está equipado con frenos cerámicos de carbono, tubo de torque de magnesio con un eje de propulsión de fibra de carbono, diferencial de deslizamiento limitado, caja de cambios secuencial Xtrac de 6 velocidades y tiene un peso en vacío de 1.350 kg (2.980 lb).', 'Aston Martin', 'https://i.ytimg.com/vi/RNXEnyj7Ywk/maxresdefault.jpg', 3, NULL),
(4, '', 'Verde', 'Es un lambo, que mas quieres?', 'Lamborghini', 'f/s/g', 4, NULL),
(5, '', 'Awa', 'FRANCHESCOOOOO?', 'Ferrari', 'f/s/g', 4, NULL),
(6, 'McLaren Elva', 'Negro', 'El McLaren Elva es la última criatura de la casa de Woking, un roadster descapotable de edición limitada que recuerda a los orígenes de McLaren como constructor. Su producción se va a limitar a tan solo 399 unidades a nivel mundial, lo que añade ese extra de exclusividad que la marca busca en sus coches más especiales.', 'McLaren', 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dcb99772c886a0007ec024c%2FMcLaren-Elva%2F960x0.jpg%3Ffit%3Dscale', 1, NULL),
(7, 'McLaren F1S', 'Rosa', 'Este es el caso del McLaren F1S, un diseño creado a partir de un F1 en configuración de calle. El diseño elimina el techo de la versión coupé, así como la particular apertura de puertas del modelo, manteniendo la toma de aire del propulsor V12 de BMW e integrando dos jorobas tras los asientos laterales.', 'McLaren', 'https://cdn.motor1.com/images/mgl/pK9Ag/s1/mclaren-f1-roadster-rendering-low-front.jpg', 1, NULL),
(8, 'McLaren 720S', 'Azul', 'El McLaren 720S es un automóvil roadster biplaza, con motor central-trasero montado longitudinalmente y tracción trasera, desarrollado y producido por fabricante británico McLaren Automotive. Es el segundo automóvil completamente nuevo de la McLaren Super Series, reemplazando al 650S a partir de mayo de 2017.\r\n\r\nFue lanzado en el Salón del Automóvil de Ginebra el 7 de marzo de 2017 y está construido sobre un chasis de carbono modificado, que es más ligero y rígido en contraste con el 650S.', 'McLaren', 'https://i.blogs.es/999b88/mclaren-720s-spider-1-p/1366_2000.jpg', 1, NULL),
(9, 'McLaren Artura', 'Rojo', 'El McLaren Artura es el primer coche 100 % nuevo de la firma. Ha sido diseñado a partir de una hoja en blanco, no es una evolución de la plataforma del MP4-12C. Tampoco utiliza el sempiterno V8 biturbo estrenado en el MP4-12C. Lo que anima el Artura no es el eterno V8 McLaren, sino un inédito V6 de 3.0 litros con un inusual ángulo de 120°. Está situado muy bajo en el vano motor y desarrolla 585 CV.', 'McLaren', 'https://phantom-marca.unidadeditorial.es/59626522f7091bdf432951ab7b51c830/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/19/16188291428147.jpg', 1, NULL),
(10, 'McLaren 765 LT', 'Azul', 'La forma de Woking desvela hoy el nuevo McLaren 765 LT. Su V8 biturbo de 4.0 litros pasa de 720 CV a 765 CV a 7.500 rpm y entrega 800 Nm de par motor máximo a 5.500 rpm (un valor idéntico al del McLaren Senna de 800 CV).\r\n\r\nAl final, el 765LT pesa 1.339 kg y mejora las prestaciones con respecto al 720S. Ejecuta el 0 a 100 km/h en 2,8 s (-0,1 s con respecto al 720S) y el 0 a 200 km/h en 7,2 s (-0,4 s), mientras que alcanza una velocidad máxima de 330 km/h. ', 'McLaren', 'https://besthqwallpapers.com/Uploads/30-11-2020/147685/thumb2-4k-mclaren-765lt-garage-2020-cars-hypercars.jpg', 1, NULL),
(11, 'Mercury Capri ASC Mc', 'Negro', 'El Mercury Capri ASC McLaren, basado en la plataforma Fox, fue construido en diferentes versiones hasta 1986 y el más poderoso fue el ASC McLaren producido entre 1984 y 1986. Diseñado por el ingeniero Peter Muscat con la colaboración del equipo McLaren, el auto fue ensamblado en 290 unidades por el La empresa American Specialty Cars en su sede de Warren. ', 'McLaren', 'https://drivetribe.imgix.net/H162K09UTvqjwcV8Z53LDw?w=1158&h=651&auto=format,compress&fit=crop&crop=faces', 2, NULL),
(12, 'McLaren 570S Spider', 'Azul', 'El McLaren 570S Spider retiene el formato de motor central y está equipado con una nueva iteración del motor V8 biturbo de 3799 cm³ (3,8 L; 231,8 plg³) ya utilizado en el 650S y P1, designado como \"M838T E\", donde la E significa \"Evolución\", con el treinta por ciento de las partes rediseñadas. Acelera de 0 a 100 km/h (62 mph) en 3,2 segundos, de 0 a 200 km/h (124 mph) en 9,5 segundos, de 0 a 100 mph (161 km/h) en 6,3 segundos y puede alcanzar una velocidad máxima de 204 mph (328 km/h).4​ Alcanza el 1/4 de milla (402 m) desde parado en 10,9 segundos.', 'McLaren', 'https://i0.wp.com/asphalt9.info/wp-content/uploads/2018/12/McLaren-570S-Spider.jpg?fit=1062%2C588&ssl=1', 2, NULL),
(13, 'McLaren 540C Coupé', 'Rojo', 'McLaren 540C Coupé. Es el modelo de acceso de la gama Sports Series. Se trata de una versión aún más económica y ligeramente menos potente que los McLaren 570S y 570GT. Su nombre se debe a su potencia de 540 CV, extraídos del ya clásico V8 biturbo de McLaren, con 3.8 litros, capaz de acelerar de 0 a 100 km/h en 3,5 segundos.', 'McLaren', 'https://squir.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/5/6/56558.jpg', 2, NULL),
(16, 'McLaren 600LT', 'Gris', 'Basado en el McLaren 600LT, el McLaren 620R derriba a este modelo casi por completo. Solo la estética es compartida, pero adopta elementos propios del GT4, como un espectacular spoiler trasero hecho de carbono que ofrece un sustento aerodinámico extra, hasta 185 kilogramos a 250 km/h. El mismo material que se ha utilizado para el chasis Monocell que rebaja el peso considerablemente, incluso en el interior con los asientos de cubo.', 'McLaren', 'https://cdn.motor1.com/images/mgl/2MO1E/s1/2020-mclaren-620r.jpg', 2, NULL),
(17, 'McLaren 600LT', 'Gris', 'El McLaren 600LT es 7.4 centímetros más largo respecto al 570S y pesa 96 kg menos que este. El coche incorpora mejoras aerodinámicas reemplazando piezas del 570S por otras más ligeras y una estética diferente.\r\n\r\nEntre las nuevas piezas del 600LT están varios elementos de fibra de carbono, como un splitter frontal más largo, un difusor trasero también alargado o un alerón trasero fijo que aumenta la carga aerodinámica a altas velocidades, los tubos de escape cambian de posición respecto al 570S, ya que se ubican frente al aleron posterior. Aunque sigue utilizando el mismo monocasco de carbono del 570S. ', 'McLaren', 'http://www.motor.com.co/files/article_multimedia/uploads/2018/06/28/5b35389f95763.jpeg', 2, NULL),
(20, 'McLaren Elva', 'Gris', 'El McLaren Elva alcanza los 100 km/h desde parado en menos de 3 segundos y que supere la barrera de los 200 km/h en solo 6,7 segundos, lo que lo hace, de nuevo, más rápido que el Senna. No se ha especificado la cifra de velocidad máxima del Elva.', 'McLaren', 'https://i.blogs.es/7d7fa7/13112019_mclaren-elva_image-02/1366_2000.jpg', 5, NULL),
(21, 'McLaren Senna', 'Gris', 'El McLaren Senna funciona con una versión modificada del motor V8 biturbo de 3994 cm³ (4 L; 243,7 plg³) del McLaren 720S, con el nombre en código M840TR. Utiliza una transmisión de doble embrague de siete velocidades que entrega todos 800 CV (588 kW; 789 HP) a las 7.250 rpm y 800 N·m (590 lb·pie) de par máximo a las 5.500 rpm para las ruedas traseras.', 'McLaren', 'https://www.conduciendo.com/wp-content/uploads/McLaren-Novitec-140420-08.jpg', 5, NULL),
(24, 'McLaren Speedtail', 'Gris', 'El McLaren Speedtail puede alcanzar una velocidad máxima de 403 km/h. Esta velocidad máxima, que cruza la barrera de las 250 millas por hora, es la velocidad más alta que puede alcanza un producto McLaren a día de hoy. Como el McLaren más potente y aerodinámicamente más eficiente de la historia, el nuevo Speedtail supera la velocidad máxima del legendario McLaren F1.', 'McLaren', 'https://www.diariomotor.com/imagenes/picscache/750x/mclaren-speedtail-1219-002_750x.jpg', 5, NULL),
(25, 'McLaren 570', 'Negro', 'Los McLaren 570 están basados en el monocasco de carbono que es empleado por todos los modelos de la gama McLaren. Este monocasco está concebido para ofrecer espacio para sólo 2 ocupantes, con configuraciones coupé o descapotable y con el propulsor ubicado en posición central trasera.', 'McLaren', 'https://www.revistaturbo.com/sites/default/files/mclarennegro.jpg', 5, NULL),
(28, 'McLaren 570S Spider', 'Azul', 'En el McLaren 570S Spider, la carrocería descapotable cuya única y principal diferencia reside en el uso de un techo retráctil metálico derivado del sistema que han empleado otros modelos de la marca como el McLaren 650S Spider.', 'McLaren', 'https://i0.wp.com/asphalt9.info/wp-content/uploads/2018/12/McLaren-570S-Spider.jpg?fit=1062%2C588&ssl=1', 5, NULL),
(29, 'McLaren 720S', 'Negro', 'El McLaren 720S cuenta con un habitáculo más tecnológico, pero sobre todo enfocado en lo más importante, en la conducción. De ahí que el haya empleado una solución atípica para mejorar la experiencia de conducción del piloto en circuito, un cuadro de mandos escamoteable para ofrecer únicamente la información que requiere un piloto en la pista, además de una avanzada instrumentación móvil, que pivota para ajustarse a las necesidades de la conducción en carretera y circuito', 'McLaren', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mclaren-720s-gt3x-1-1616323746.jpg', 3, NULL),
(30, 'McLaren 765LT', 'Naranja', 'El McLaren 765LT pesa 1.339 kg y mejora las prestaciones con respecto al 720S. Ejecuta el 0 a 100 km/h en 2,8 s (-0,1 s con respecto al 720S) y el 0 a 200 km/h en 7,2 s (-0,4 s), mientras que alcanza una velocidad máxima de 330 km/h. Esas cifras se obtienen también gracias a los Pirelli Trofeo R (como el Senna) que equipa el 765LT y a la nueva gestión, más orientada a un uso en circuito, de la caja de cambios de doble embrague.', 'McLaren', 'https://mclaren.scene7.com/is/image/mclaren/765lt-3-1200x1200-1:crop-4x3?wid=1920&hei=1440', 3, NULL),
(31, 'McLaren Artura', 'Verde', 'El McLaren Artura se sitúa en la gama por encima del McLaren GT y por debajo el 720 S. Sin embargo, es muy similar a su hermano mayor en términos de dimensiones. Mide 4,54 m de largo por 2 metros de ancho y cuenta con una distancia entre ejes de 2,64 m (2,67 m para el 720S).', 'McLaren', 'https://www.auto-data.net/images/f78/McLaren-Artura_1.jpg', 3, NULL),
(32, 'McLaren 720 GT3', 'Amarillo', 'El McLaren 720 GT3, como su nombre indica, esta bestia de carreras está basada en el ya de por sí brutal McLaren 720S de calle, con el que comparte por ejemplo el monocasco de fibra de carbono MonoCage II o el poderoso motor 4.0 litros V8 biturbo (M840T), cuya potencia en esta versión de carreras no se conoce (en el coche de serie ofrece 720 CV).', 'McLaren', 'https://i.blogs.es/49705b/mclaren-720s-gt3/1366_2000.jpg', 3, NULL),
(33, 'McLaren 600LT Spider', 'Negro', 'El McLaren 600LT Spider también tiene, como el Coupé, un alerón trasero fijo, que genera la misma carga aerodinámica de 100 kilogramos a 250 km/h, o las salidas de escape colocadas en la parte superior de la zaga. La suspensión es de dobles triángulos en ambos ejes, con amortiguadores con una puesta a punto específica y también hay soportes de motor más rígidos y un equipo de frenos más ligero.', 'McLaren', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-12049-mclaren-600lt-spider-segestria-borealis-by-mso-1589975485.jpg', 3, NULL),
(34, 'McLaren GT', 'Dorado', 'El McLaren GT es un gran turismo que, pese a su apariencia de superdeportivo y su arquitectura de motor central, está pensado para competir con otros Gran Turismo tipo: el Bentley Continental GT, el Aston Martin DB11 o el Ferrari GTC4Lusso T.\r\n\r\nCon casi 4,7 metros (185 plg) de longitud, el McLaren GT cuenta con dos espacios de carga: uno en la parte trasera y un maletero delantero que permite transportar hasta un equivalente a 570 litros (150,6 galAm) de espacio de carga.', 'McLaren', 'https://mclaren.scene7.com/is/image/mclaren/McLaren_GT_T080_1200x1200:crop-4x3?wid=1920&hei=1440', 4, NULL),
(35, 'McLaren Senna GTR', 'Azul', 'El peso en vacío del McLaren Senna GTR es de 1.188 kilogramos y, por tanto, su desorbitada relación peso-potencia es de 1,44 kg/CV o bien 649 CV por tonelada. En cualquier caso, el modelo mantiene sistemas de seguridad como el control de tracción, el ABS o el control de estabilidad, además de sensores de desgaste de pastillas de freno, radar anticolisión o monitor de presión de los neumáticos.', 'McLaren', 'https://i.blogs.es/f1227a/mclaren-senna-gtr-1-/1366_2000.jpg', 4, NULL),
(36, 'McLaren 570S GT4', 'Negro', 'El 570S GT4 es un auto GT4 con especificación de competencia completa que está listo para competir directamente desde la fábrica.\r\n\r\n \r\n\r\nEn el núcleo, un chasis de fibra de carbono extremadamente resistente y ligero como una pluma: el MonoCell II. La potencia proviene de un McLaren V8 de 3.8 litros biturbo especialmente desarrollado, vinculado a la transmisión de 7 velocidades lista para la carrera.\r\n\r\n \r\n\r\nEsto es seguridad y alegría combinados a la perfección. ', 'McLaren', 'https://www.autonocion.com/wp-content/uploads/2016/03/McLaren-570S-GT4-1-930x538.jpg', 4, NULL),
(37, 'McLaren P1 GTR', 'Gris', 'Este P1 GTR con esteroides desgraciadamente no llegará nunca al mundo real, y es que es una creación exclusiva para el próximo Gran Turismo Sport. En sus entrañas esconde hasta 1.150 CV de potencia gracias a una configuración híbrida del que han denominado McLaren Ultimate Vision GT, un coche de carreras de aspecto imponente y una línea futurista extrema. Su motor sería importado del 720S, un V8 biturbo de 4.0 litros asociado con motores eléctricos en las ruedas delanteras. Gracias a su tren de potencia híbrido obtendremos hasta 1.275 Nm de par motor.', 'McLaren', 'https://cdn.motor1.com/images/mgl/x0lwP/s1/mclaren-ultimate-vision-gt-scale-model.jpg', 4, NULL),
(38, 'McLaren GT', 'Azul', 'Con casi 4,7 metros de longitud, el McLaren GT cuenta con dos espacios de carga, uno en la parte trasera de unos 420 litros de capacidad de carga que permite transportar una bolsa de palos de golf o dos pares de esquís, así como un maletero delantero que permite transportar hasta un equivalente a 570 litros de espacio de carga. El peso total del conjunto es de 1.530 kilogramos.', 'McLaren', 'https://media.gossipvehiculo.com/wp-content/uploads/2020/11/05174817/old_Mclaren_GT_2021_Coupe_5f2b7dc4e94a5.jpg', 4, NULL),
(39, 'Aston Martin Vantage', 'Morado', 'Así, el Vantage Roadster, que equipa el mismo V8 biturbo 4.0 litros de origen AMG que el Vantage Coupé de 510 CV y 685 Nmm acelera de 0 a 100 km/h en 3,8 segundos y puede alcanzar los 306 km/h de velocidad punta (con la capota puesta). Es decir, es 0,1 s más lento en el 0 a 100 km/h y pierde 8 km/h de velocidad punta. Diferencias que, al final, no son realmente perceptibles.', 'Aston Martin', 'https://i.blogs.es/d93aa9/vantage-roadster-2-jpg-2./1366_2000.jpg', 1, NULL),
(40, 'Aston Martin Vantage', 'Gris', 'El Aston Martin Vantage, tiene chasis de aluminio y magnesio. La versión base tiene un motor gasolina atmosférico V8 de 4.7 L con 32 válvulas que produce 420 HP (313 kilovatios) de potencia máxima. Tiene una aceleración de 0 a 100 km/h (62 millas por hora) en 4,2 segundos y una velocidad máxima de 290 km/h (180 millas por hora). Se ofrece con caja de cambios secuencial o manual de seis velocidades.', 'Aston Martin', 'https://www.elcarrocolombiano.com/wp-content/uploads/2017/11/20171122-ASTON-MARTIN-VANTAGE-2019-01.jpg', 1, NULL),
(41, 'Aston Martin DB11', 'Negro', 'Aston Martin DB11. Sus dimensiones son similares a las del DB9, siendo 1,2 pulgadas (3 cm) más largo, 2,7 pulgadas (6,9 cm) más ancho, 0,3 pulgadas (0,8 cm) más alto y sentándose en una batalla 2,5 pulgadas (6,4 cm) más larga. El peso es casi idéntico con 3902 libras (1770 kg), siendo solamente 33 libras (15 kg) menos, pero Aston Martin afirma que el nuevo motor es considerablemente más pesado y es por eso que la reducción de masa del casco de la carrocería es parcialmente disfrazada, con más espacio interior y unos casi usables asientos traseros, en lugar de un poco más que espacio para equipaje con cinturones de seguridad de lo que eran en el DB9.', 'Aston Martin', 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/03/517445-aston-martin-db11-2016.jpg?itok=Tf_uVE6K', 1, NULL),
(42, 'Aston Martin DBX 202', 'Rojo', 'La potencia del Aston Martin DBX 2020 sigue manteniendo el tinte deportivo, y para que esto se diera, el SUV incorpora el mismo propulsor que en el Vantage, lo que se traduce en un motor 4.0 V8 biturbo de origen Mercedes-AMG, que ofrece 547 caballos de fuerza y 700 Nm.\r\n\r\nTodo esto va unido a una caja automática de nueve velocidades con convertidor de par. Debido al diferencial central activo, la fuerza mecánica se reparte entre los dos ejes delanteros, en el trasero, cuenta con otro diferencial autoblocante electrónico, denominado eDiff.', 'Aston Martin', 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/11/20191120-ASTON-MARTIN-DBX-2020-AA01.jpg', 1, NULL),
(43, 'Aston Martin Rapide', 'Verde', 'El Aston Martin Rapide es un sedán de cuatro puertas y cuatro plazas, basado en el deportivo Aston Martin DB9. Su motor de gasolina es un V12 de 5,9 litros de cilindrada y 470 CV de potencia máxima. Dado que la luneta trasera está muy inclinada y curvada, se ha comparado al Rapide con un cupé.\r\n\r\nEl Aston Martin Rapide se pondrá a la venta a lo largo de 2010 para competir con la Porsche Panamera, la Mercedes-Benz Clase CLS, la Audi A7, la BMW Serie 6 y la Maserati Quattroporte. Ha anunciado que se fabricará en una planta de Magna Steyr en Graz, Austria.', 'Aston Martin', 'https://i.blogs.es/3286b1/aston-martin-rapide-amr-1-/1366_2000.jpg', 1, NULL),
(44, 'Aston Martin V8 Vant', 'Verde', 'La primera serie del Aston Martin V8 Vantage equipada con cuatro carburadores Weber 48IDF2/100 rendía 390 HP (395 CV; 291 kW) (estimados) a 5800 rpm, con un par motor de 406 lb·pie (550 N·m) a 4500 rpm,​ y detalles específicos de la serie como una ventilación de capó ciega y un alerón trasero separado.4​ Se construyeron 38 unidades (más 13 adaptados \"cosméticamente\" para EE.UU.).​ La versión Oscar India, presentada a finales de 1978, presentaba un difusor integrado en forma de bandeja y un abultamiento del capó más suave.', 'Aston Martin', 'https://i.pinimg.com/originals/ad/41/47/ad4147cb59e2ca2f32a8b9087cb698d4.jpg', 2, NULL),
(45, 'Aston Martin Lagonda', 'Gris', 'El Aston Martin Lagonda fue diseñado por William Towns en una interpretación extrema del clásico estilo de \"papel plegado\" de los años 1970. Fue un diseño tan poco convencional como lo es ahora. Los entusiastas de los automóviles se dividen ferozmente en dos bandos irreconciliables acerca del valor estético del automóvil. Lagonda combinó un estilo llamativo con un opulento interior de cuero con forma de club y la última instrumentación de vanguardia. Junto con una transmisión automática de 3 velocidades \"TorqueFlite\", su carburador V8 de 4 cámaras proporcionaba unas pobres, a menudo de un solo dígito, millas por galón, rendimiento poco mejorado por el cambio a la inyección de combustible en la Serie 3.', 'Aston Martin', 'https://i.blogs.es/80b0f7/aston-martin-lagonda-taraf/1366_2000.jpg', 2, NULL),
(46, 'Aston Martin DB5', 'Gris', 'El equipamiento estándar en el Aston Martin DB5 incluía asientos reclinables, alfombrillas con moqueta de lana, ventanas eléctricas, tanques de combustible gemelos, ruedas con radios de alambre cromadas, enfriador de aceite, carrocería de aleación de magnesio que se construyó según la patente técnica de Superleggera, con un acabado completamente en cuero en la cabina e incluso un extintor de incendios.', 'Aston Martin', 'https://cdn.motor1.com/images/mgl/op290/s1/first-aston-martin-db5-goldfinger-continuation-car.jpg', 2, NULL),
(47, 'Aston Martin DB6', 'Gris', 'El Aston Martin DB6 continuó con los amortiguadores traseros Armstrong Selectaride (ajustables desde el cuadro de mandos) de alta tecnología, también disponibles en el DB5. Otros aspectos destacados incluían la adopción de ventanas laterales en las puertas delanteras, una toma de aire para refrigerar el aceite en la parte baja del faldón delantero, parachoques laterales en cada esquina, y grupos de luces traseras revisadas. Además, el difusor afectó las proporciones generales del DB6, con un aumento de longitud de aproximadamente dos pulgadas.', 'Aston Martin', 'https://www.coches.com/fotos_historicas/astonmartin/DB6-Vantage-1965-1970/astonmartin_db6-vantage-1965-1970_r8.jpg', 2, NULL),
(48, 'Aston Martin DB7', 'Negro ', 'El Aston Martin DB7 estaba disponible como coupé o descapotable. Fue presentado en el Salón del Automóvil de Ginebra en marzo de 1993. El DB7 tenía seis cilindros y sustituyó al Aston Martin V8. El DB7 fue el modelo de Aston Martin de mayor éxito, con más de 7000 DB7 construidos antes de que fuese sustituido por el Aston Martin DB9. El diseño del DB7 es obra de Ian Callum, y es considerado como uno de los más bellos y atemporales diseños de automóvil.', 'Aston Martin', 'https://i0.wp.com/www.clasicosalvolante.com/wp-content/uploads/2015/06/DSC_0803.jpg', 2, NULL),
(49, 'Aston Martin DB 12', 'Negro', 'Aston Martin DB 12. Sus dimensiones son similares a las del DB9, siendo 1,2 pulgadas (3 cm) más largo, 2,7 pulgadas (6,9 cm) más ancho, 0,3 pulgadas (0,8 cm) más alto y sentándose en una batalla 2,5 pulgadas (6,4 cm) más larga. El peso es casi idéntico con 3902 libras (1770 kg), siendo solamente 33 libras (15 kg) menos, pero Aston Martin afirma que el nuevo motor es considerablemente más pesado y es por eso que la reducción de masa del casco de la carrocería es parcialmente disfrazada, con más espacio interior y unos casi usables asientos traseros, en lugar de un poco más que espacio para equipaje con cinturones de seguridad de lo que eran en el DB9.', 'Aston Martin', 'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Aston_Martin-DB11_2017_C01.jpg', 5, NULL),
(50, 'Aston Martin V12 Speedster', 'Gris', 'Bajo el capó del Aston Martin V12 Speedster, como su propio nombre indica está un motor V12 biturbo de 5,2 litros de Aston Martin, que desarrolla 700 CV y 753 Nm de par. Para que la experiencia de conducción sea lo más emocionante posible, lleva un sistema de escape especialmente desarrollado que permite que el sonido salga por la parte central posterior del coche, poniendo los pelos de punta a sus ocupantes.', 'Aston Martin', 'https://www.conduciendo.com/wp-content/uploads/Aston-Martin-V12-Speedster-081020-01.jpg', 5, NULL),
(51, 'Aston Martin Vantage V12​', 'Negro', 'El Aston Martin Vantage V12​ utiliza el mismo V12 que el DB9 o DBS pero con 510 HP (380 kilovatios) y 570 Nm. Pasa de 0 a 100 km/h (62 millas por hora) en 3,6 segundos y su velocidad máxima es de 325 km/h (202 millas por hora). Su producción será limitada a 1000 unidades.\r\n\r\nSu peso es de 1755 kg (3869 libras), el motor solo es 100 kg (220 libras) más pesado en relación la versión V8. Otros cambios son la carrocería, que va 15 mm más cerca del suelo, los muelles son más duros en un 45% y las barras estabilizadoras son menos flexibles, en un 15% en la delantera y un 75% en la trasera.', 'Aston Martin', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/05/11/15260301528088.jpg', 5, NULL),
(52, 'Aston Martin DBS Superleggera', 'Blanco', 'En el apartado técnico es donde el Aston Martin DBS Superleggera más sacar a relucir su nuevo planteamiento encontrando un propulsor 5.2 V12 Twin-Turbo de 725 CV de potencia máxima con 900 Nm de par máximo. También es novedad para este modelo el uso de una nueva caja de cambios automática de 8 relaciones firmada por ZF, ubicada en posición transaxle y con relaciones de cambio específicas para esta versión.', 'Aston Martin', 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/04/20190430-ASTON-MARTIN-DBS-SUPERLEGGERA-VOLANTE-01.jpg', 5, NULL),
(53, 'Aston Martin Vantage AMR', 'Verde', 'El nuevo Aston Martin Vantage AMR parte de la base del Vantage de serie, conserva el V8 biturbo de 4.0 litros de origen AMG -que vemos, por ejemplo, en la gama AMG GT- pero desecha el cambio automático de 8 relaciones y equipa en su lugar un cambio manual de 7 relaciones, desarrollado ex profeso por Graziano para este coche. Este AMR es el único modelo del mercado en el que el V8 AMG va asociado a un cambio manual.', 'Aston Martin', 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/59822/aston-martin-vantage-amr-port.jpg', 5, NULL),
(54, 'Aston Martin Vanquish', 'Azul', 'El Aston Martin Vanquish base estaba propulsado por un motor V12 a 60º de 5935 cm³ (5,9 litros), con distribución de doble (DOHC) árbol de levas a la cabeza y 4 válvulas por cilindro (48 en total), que producía 460 CV (453,7 HP) a las 6500 rpm y un par máximo de 400 lb·pie (542 N·m) a las 5000 rpm,2​ acoplado a una transmisión semiautomática secuencial de 6 velocidades, con lo que era capaz de alcanzar los 306 km/h (190 mph) y aceleraba de 0 a 100 km/h (62 mph) en 4,9 segundos.', 'Aston Martin', 'https://www.diariomotor.com/imagenes/2016/11/aston-martin-vanquish-s-2016-016.jpg', 3, NULL),
(55, 'Aston Martin Valhalla', 'Blanco', 'El Aston Martin Valhalla usará un motor V6 biturbo híbrido enchufable que estará apoyado por una batería de ion de litio,1​ contrario al del Valkyrie, pero compartirá el sistema KERS del coche insignia. Una potencia combinada de ambos, será de alrededor de 1000 CV (986 HP; 736 kW). El motor está programado para ser diseñado y desarrollado \"en casa\" por la compañía y usará el sistema de cambio de aceite de 90 segundos Castrol Nexcel, usado en el Vulcan, que está enfocado solamente para las carreras, siendo el primer coche de calle en usar dicho sistema.', 'Aston Martin', 'https://buentaller.com/wp-content/uploads/cache/images/Aston-Martin-Valhalla-nuevo-hypercar-Aston-Martin-vehiculos-superdeportivos-solo-500-unidades-disponibilidad-en-2021/Aston-Martin-Valhalla-nuevo-hypercar-Aston-Martin-vehiculos-superdeportivos-solo-500-unidades-disponibilidad-en-2021-3734580383.jpg', 3, NULL),
(56, 'Aston Martin Victor', 'Negro', 'A nivel mecánico, el Aston Martin Victor, cuenta con un V12 7.3 litros atmosférico ha visto su potencia aumentar gracias a una preparación de Cosworth. La famosa firma británica ya participó en el desarrollo de ese motor para el Vulcan por lo que no les fue difícil sacarle unos cuantos caballos más.\r\n\r\nDe origen entrega 810 CV, pero en el Victor, la potencia sube a los 848 CV y el par motor máximo hasta los 821 Nm. Pero lo más llamativo sin duda es la presencia de un cambio manual de seis relaciones.', 'Aston Martin', 'https://cdn.motor1.com/images/mgl/PO8j4/s1/aston-martin-victor-race-track.jpg', 3, NULL),
(57, 'Aston Martin Valkyrie', 'Negro', 'El Aston Martin Valkyrie contará con un V12 naturalmente aspirado de 6.5L creado por Cosworth; este se supuso que inicialmente produciría alrededor de 1000 CV (736 kilovatios), pero fue anunciado más adelante en junio de 2017 que el coche llegaría hasta los 1130 CV (831 kilovatios). Al mismo tiempo de que se dio a conocer la potencia final, el peso también se mencionó, el cual quedó en 1030 kg (2271 libras), logrando superar así la proporción 1:1 peso-potencia, con 1,09 CV (1 kilovatios) por kilo.', 'Aston Martin', 'https://img.autocosmos.com/noticias/fotos/preview/NAZ_361de099e1ff4f55a3e96e8e4ba7b5cd.jpg', 3, NULL),
(58, 'Aston Martin GT3', 'Verde', 'El Aston Martin GT3 se basa en el modelo de alto rendimiento en la línea del catálogo de Aston Martin, el V12 Vantage que debutó en 2009. El motor V12 de 5.9 litros del buque insignia DBS, que produce 509 BHP y 58.1 kgfm, está montado en el ligeramente más pequeño, carrocería V8 Vantage más ligera y ágil, que le confiere una aceleración de 0-100 km / h de 4,2 segundos y una velocidad máxima de 305 km / h; incluso más rápido que el DBS. ', 'Aston Martin', 'https://i.blogs.es/aebae3/vantage_gt3-portada/1366_2000.jpg', 4, NULL),
(59, 'Aston Martin Design Prototype 100', 'Blanco', 'El Design Prototype 100, también llamado DP-100, fue creado por un equipo con una amplia experiencia que trabajó en el proyecto durante seis meses en el cuartel general de Aston Martin en Gaydon (Warwickshire, Inglaterra).\r\nEl DP-100, además de bonito, también posee un elevado grado de integridad técnica. El motor de carreras V12 de doble turbo ofrece hasta 800 BHP (811 CV), que le concede un rendimiento espectacular acorde con la naturaleza de alta velocidad del juego.', 'Aston Martin', 'https://periodismodelmotor.com/wp-content/uploads/2014/06/Aston-Martin-DP-100-Vision-Gran_Turismo.jpg', 4, NULL),
(60, 'Aston Martin One-77', 'Gris', 'Aston Martin One-77. Su velocidad máxima fue estimada en 202 mph (325 km/h), pero las pruebas reales en diciembre de 2009, mostraron una cifra de 220,007 mph (354,067 km/h), con un tiempo de 0 a 60 mph (97 km/h) en aproximadamente 3,7 segundos y,​ al mismo tiempo, se ha pensado en reducir su peso en un 10%. Gracias a la colaboración de los ingenieros de Aston Martin con Cosworth, la potencia se ha superado y la reducción de peso ha llegado a ser del 25%.', 'Aston Martin', 'https://www.autopista.es/uploads/s1/56/15/83/1/1bc0fb8aston-598p.jpeg', 4, NULL),
(61, 'Aston Martin Vantage GT12', 'Blanco', 'De estos Aston Martin Vantage GT12 tan sólo se fabricaron 100 ejemplares, todos ellos con nuevos detalles estéticos de fibra de carbono, nuevos apéndices aerodinámicos, una puesta a punto casi de competición... Y claro está, ese V12 generando 600 CV de potencia, suficientes para alcanzar los 297 km/h de velocidad punta y para acelerar de 0 a 100 km/h en sólo 3,5 segundos.', 'Aston Martin', 'https://i1.wp.com/asphalt9.info/wp-content/uploads/2019/08/Aston-Martin-Vantage-GT12.jpg?fit=1062%2C588&ssl=1', 4, NULL),
(62, 'Aston Martin Superleggera 2019', 'Blanco', 'El Aston Martin Superleggera 2019, tiene un motor V12 a 60º con código AE31 biturbo de 5204 cm³ (5,2 L; 317,6 plg³), capaz de generar 725 CV (715 HP; 533 kW) de potencia a las 6500 rpm y un par motor máximo de 900 N·m (664 lb·pie) entre las 1800 y 5000 rpm.\r\n\r\nEl motor está asociado a una transmisión automática ZF de ocho velocidades con tubo de par de aleación, eje de propulsión en fibra de carbono y una relación final de 2,93:1, que envía la potencia directamente al tren posterior, siendo capaz de alcanzar los 100 km/h (62 mph) desde parado en solamente 3,4 segundos.', 'Aston Martin', 'https://cdn.motor1.com/images/mgl/1X4x9/s1/2019-aston-martin-dbs-superleggera.jpg', 4, NULL),
(66, 'Bugatti Veyron', 'Negro ', 'Bugatti Veyron, automóvil  biplaza diseñado y desarrollado por el Grupo Volkswagen , por el fabricante Bugatti Automobiles S.A.S.  La velocidad máxima del vehículo es de 407,66 km/h (253,31 mph) y el tiempo de aceleración de 0 a 100 km/h (62 mph) es de 2,5 segundos. La tracción en las cuatro ruedas y el motor central-trasero le brindan mayor estabilidad y una distribución equilibrada del peso. ', 'Bugatti', 'https://i.blogs.es/d3046c/650_1000_bugatti-grand-sport-vitesse-1/450_1000.jpg ', 2, NULL),
(67, 'Bugatti EB110', 'Azul', 'El Bugatti EB110 cuenta con un monocasco ligero que pesaba solamente 125 kg (276 lb), debido a que fue construido en fibra de carbono. Por su parte, el aluminio, carbono y fibra de aramida y plásticos reforzados con fibras se usaron para la carrocería, los rines fueron fundidos de magnesio y cada tornillo y perno estaban hechos de titanio.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/4/47/2007-06-15_18_Bugatti_EB_110_%28bearb_-_kl%29.jpg', 2, NULL),
(68, 'Bugatti EB118', 'Negro ', 'El Bugatti EB118 uenta con un motor v8 de 4255 cc (6,3 litros) turboalimentado, que produce 547 CV (408 kW) y 650 Nm. El EB118 alcanzaba una velocidad máxima de 320 km/h,1 tenía tracción permanente en todas las ruedas y transmisión automática de 5 velocidades.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bugatti_EB_118_1.jpg/1024px-Bugatti_EB_118_1.jpg', 1, NULL),
(69, 'Bugatti La Voiture Noire', 'Negro', 'Bugatti La Voiture Noire. Un súper deportivo de lujo producido por el fabricante de automóviles español Carlos Garrido. Es un ejemplar único, una primicia mundial presentada en el Salón del Automóvil de Ginebra de 2019 como el automóvil más caro del mundo hasta la fecha. Fue creado para celebrar los 110 años desde que Ettore Bugatti fundó la marca en 1909.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bugatti_La_Voiture_Noire%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0951%29.jpg/1024px-Bugatti_La_Voiture_Noire%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0951%29.jpg', 3, NULL),
(70, 'Bugatti Divo', 'Negro y azul', 'Bugatti Divo. Deportivo coupé de dos puertas biplaza, con motor central-trasero montado longitudinalmente y tracción en las cuatro ruedas, desarrollado y producido desde 2019 por el fabricante Bugatti Automobiles S.A.S., filial del Grupo Volkswagen.', 'Bugatti', 'https://phantom-marca.unidadeditorial.es/4e4c91de763eedad610978149df78d31/resize/1320/f/jpg/assets/multimedia/imagenes/2020/10/23/16034683855922.jpg ', 3, NULL),
(71, 'Bugatti EB218', 'Azul', 'Bugatti EB218. Es un sedán conceptual. Se trata de una limusina con 5375 mm de largo inspirada en los legendarios Bugatti Royale de 1926. Su potencia proviene de un motor W18 diseñado por Volkswagen. Este motor de 6255 cc y 72 válvulas es completamente distinto al motor W16 de producción del Bugatti Veyron 16.4, cuenta con tres bancos de seis cilindros con 60 grados de separación cada banco y es capaz de desarrollar 249,4 km/h de velocidad máxima. Su potencia está cifrada en 547 CV y 650 Nm, exactamente la misma potencia que la del prototipo Bugatti EB118.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/BugattiEB218.JPG', 1, NULL),
(72, 'Bugatti Veyron 16.4 Super Sport', 'Negro', 'Bugatti Veyron 16.4 Super Sport. Cuenta con un kit aerodinámico mejorado; tiene un motor W16 8.0 Quad Turbo que produce 1200 CV (883 kW) y 1500 Nm (1106 lb-ft) de par motor. Tiene una velocidad máxima de 431 km/h, por lo que fue el coche de producción para carretera más rápido del mundo, hasta que después fue superado por el Hennessey Venom GT, a pesar de estar su velocidad limitada electrónicamente a 415 km/h para proteger los neumáticos, los que a mayor velocidad podrían desintegrarse.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/BUGATTI_VEYRON_SUPERSPORT_16.4_AT_THE_BUGATTI_DEALERSHIP_IN_BERLIN_GERMANY_JUNE_2013_%289057992400%29.jpg/800px-BUGATTI_VEYRON_SUPERSPORT_16.4_AT_THE_BUGATTI_DEALERSHIP_IN_BERLIN_GERMANY_JUNE_2013_%289057992400%29.jpg', 3, NULL),
(73, 'Bugatti Veyron 16.4 Grand Sport La Finale', 'Negro y rojo', 'Bugatti Veyron 16.4 Grand Sport La Finale. La carrocería está fabricada en fibra de carbono vista, los logotipos EB y 16.4 lucen un acabado rojizo. Las llantas adoptan color rojo, están hechas a partir de un único bloque de aliminio y cuentan con el logotipo del elefante de Bugatti, esta también en la tapa del depósito de combustible y en el habitáculo (de bronce y con inscripción 450/450).  Las tomas de aire y la cubierta del intercooler fueron pintadas de color negro. En el habitáculo predomina la tapicería de piel color beige, con detalles en color rojo \"Hot Spur\". Los asientos de cubo fueron tapizados de forma magistral y en las cabeceras destaca el logo La Finale bordado. ', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/2015-03-03_Geneva_Motor_Show_4073.JPG/800px-2015-03-03_Geneva_Motor_Show_4073.JPG ', 1, NULL),
(74, 'Bugatti Vision Gran Turismo', 'Azul', 'Bugatti Vision Gran Turismo. Este diseño de concepto influyó en la producción del Bugatti Chiron y del Bugatti Divo. El diseño del vehículo se basa en el ganador de las 24 Horas de Le Mans, el Bugatti Type 57C Tank. El vehículo tiene un motor W16, similar al del Veyron, que produce 1650 CV y 1165 ftlb. El motor del Bugatti proporciona energía a las cuatro ruedas.', 'Bugatti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Bugatti_Vision_at_IAA_2015_in_Frankfurt.JPG/1024px-Bugatti_Vision_at_IAA_2015_in_Frankfurt.JPG', 4, NULL),
(78, 'Gallardo', 'Azul', 'osiosisosisoasfioasf', 'Lamborghini', 'a/b/c', 3, '465432165.00'),
(79, 'Murcielago', 'gris', 'osiosisosisoasfioasf', 'Lamborghini', 'a/b/c', 3, '687654324.00');

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
(5, 'qwe-852', 'kjh54354fd5g4f3d', 'aaaaa11111', 3),
(6, 'def-456', '54j3hg53453fgd', '675hgf235hgdgf2d', 3),
(7, 'ijt-951', '5jk345hj34k35', '8576kj64jhggjhs', 4),
(8, 'rhc-719', '3j4kh3jh5354jhghj3fvs', 'gh3f4hgffg324oi243x', 1),
(10, 'oik-126', 'kjh64kj5h47647hjg', '3gh4f245hgd24g5d', 1);

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
(4, 'Gran Turismo', 'Ni idea la verdad'),
(5, 'Altas Prestaciones', 'Silavidafueraestabletodoeltiempo'),
(12, 'Volador', 'Auto vuela');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campus`
--
ALTER TABLE `campus`
  ADD PRIMARY KEY (`id_campus`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id_invoice`),
  ADD KEY `IXFK_invoice_Campus` (`id_campus`),
  ADD KEY `IXFK_invoice_User` (`id_user`);

--
-- Indexes for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD PRIMARY KEY (`id_invoice_det`),
  ADD KEY `IXFK_invoice_detail_invoice` (`id_invoice`),
  ADD KEY `IXFK_invoice_detail_vehicle_detail` (`id_vehicle_detail`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

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
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id_invoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `id_invoice_det` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id_vehicle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `vehicle_detail`
--
ALTER TABLE `vehicle_detail`
  MODIFY `id_vehicle_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  MODIFY `id_vehicle_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `FK_invoice_campus` FOREIGN KEY (`id_campus`) REFERENCES `campus` (`id_campus`),
  ADD CONSTRAINT `FK_invoice_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD CONSTRAINT `FK_invoice_detail_invoice` FOREIGN KEY (`id_invoice`) REFERENCES `invoice` (`id_invoice`),
  ADD CONSTRAINT `FK_invoice_detail_vehicle_detail` FOREIGN KEY (`id_vehicle_detail`) REFERENCES `vehicle_detail` (`id_vehicle_detail`);

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