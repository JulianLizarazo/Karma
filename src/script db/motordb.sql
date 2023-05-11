-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2023 at 01:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `motordb`
--

-- --------------------------------------------------------

--
-- Table structure for table `detalles_factura`
--

CREATE TABLE `detalles_factura` (
  `id_detalles_factura` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_detalles_moto` int(11) DEFAULT NULL,
  `id_factura` int(11) DEFAULT NULL,
  `id_sede` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detalles_factura`
--

INSERT INTO `detalles_factura` (`id_detalles_factura`, `cantidad`, `id_detalles_moto`, `id_factura`, `id_sede`) VALUES
(1, 2, 1, 1, 1),
(2, 3, 2, 2, 2),
(3, 1, 3, 3, 3),
(4, 4, 4, 4, 1),
(5, 2, 5, 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `detalles_moto`
--

CREATE TABLE `detalles_moto` (
  `id_detalles_moto` int(11) NOT NULL,
  `placa_moto` varchar(10) NOT NULL,
  `serie_motor` varchar(50) NOT NULL,
  `serie_chassis` varchar(50) NOT NULL,
  `id_moto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detalles_moto`
--

INSERT INTO `detalles_moto` (`id_detalles_moto`, `placa_moto`, `serie_motor`, `serie_chassis`, `id_moto`) VALUES
(1, 'ABC-123', '1A2B3C4D5E', '5E4D3C2B1A', 1),
(2, 'DEF-456', 'D4E3F2G1H0', 'H0G1F2E3D4', 2),
(3, 'GHI-789', 'G9H8I7J6K5', 'K5J6I7H8G9', 3),
(4, 'JKL-012', 'J0K1L2M3N4', 'N4M3L2K1J0', 4),
(5, 'MNO-345', '3N4O5P6Q7R8', 'R8Q7P6O5N4', 5);

-- --------------------------------------------------------

--
-- Table structure for table `factura`
--

CREATE TABLE `factura` (
  `id_factura` int(11) NOT NULL,
  `IVA` double(10,2) NOT NULL,
  `metodo_pago` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `precio` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `factura`
--

INSERT INTO `factura` (`id_factura`, `IVA`, `metodo_pago`, `fecha`, `id_usuario`, `precio`) VALUES
(1, 0.19, 'Efectivo', '2023-05-10', 1, 15000.00),
(2, 0.19, 'Transferencia bancaria', '2023-05-11', 2, 12000.00),
(3, 0.19, 'Tarjeta de crédito', '2023-05-12', 3, 18000.00),
(4, 0.19, 'PayPal', '2023-05-13', 4, 13000.00),
(5, 0.19, 'Cheque', '2023-05-14', 5, 15000.00);

-- --------------------------------------------------------

--
-- Table structure for table `moto`
--

CREATE TABLE `moto` (
  `id_moto` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `marca` varchar(50) NOT NULL,
  `url` text NOT NULL,
  `id_tipo_moto` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `precio` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `moto`
--

INSERT INTO `moto` (`id_moto`, `color`, `descripcion`, `marca`, `url`, `id_tipo_moto`, `nombre`, `precio`) VALUES
(1, 'Rojo', 'Moto deportiva de alta velocidad', 'Yamaha', 'https://i.ytimg.com/vi/Hi04Mt0VFAo/maxresdefault.jpg', 1, 'Modelo1', 15000.00),
(2, 'Azul', 'Moto deportiva aerodinámica', 'Ducati', 'https://img.remediosdigitales.com/f996f7/650_1000_ducati-diavel-2014-650-013/1366_2000.jpg', 1, 'Modelo2', 16000.00),
(3, 'Negro', 'Moto deportiva con excelente aceleración', 'Kawasaki', 'https://www.mundomotero.com/wp-content/uploads/2017/11/Kawasaki-Ninja-H2-SX-2018-7-1024x716.jpg', 1, 'Modelo3', 14000.00),
(4, 'Blanco', 'Moto deportiva con diseño agresivo', 'Yamaha', 'https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/05/og-r15.jpg', 1, 'Modelo4', 17000.00),
(5, 'Gris', 'Moto deportiva con tecnología avanzada', 'Ducati', 'https://motos-b60.kxcdn.com/sites/default/files/ducati-959-panigale-2016.jpg', 1, 'Modelo5', 19000.00),
(6, 'Negro', 'Moto cruiser clásica y elegante', 'Yamaha', 'https://i.pinimg.com/originals/3a/8e/b9/3a8eb9981b7621ab0106324e6f22891d.jpg', 2, 'Modelo1', 12000.00),
(7, 'Rojo', 'Moto cruiser cómoda para largos viajes', 'Ducati', 'https://ducatimadrid.com/wp-content/uploads/2022/07/xdiavel-nera.jpg', 2, 'Modelo2', 13000.00),
(8, 'Plateado', 'Moto cruiser con estilo vintage', 'Kawasaki', 'https://upload.wikimedia.org/wikipedia/commons/1/18/Kawasaki_Estrella_BJ250%2C_Seoul%2C_Korea%2C_April_2011.jpg', 2, 'Modelo3', 11000.00),
(9, 'Azul', 'Moto cruiser versátil y potente', 'Yamaha', 'https://www.mototechindia.com/wp-content/uploads/2021/05/yamaha-cruiser.jpg', 2, 'Modelo4', 14000.00),
(10, 'Blanco', 'Moto cruiser con detalles cromados', 'Ducati', 'https://robbreport.com/wp-content/uploads/2019/05/diavel-1260-s-static-13.jpg?w=1000', 2, 'Modelo5', 15000.00),
(11, 'Verde', 'Moto enduro todoterreno', 'Yamaha', 'https://http2.mlstatic.com/D_NQ_NP_706001-MCO51864874398_102022-W.jpg', 3, 'Modelo1', 8000.00),
(12, 'Naranja', 'Moto enduro con suspensión ajustable', 'Ducati', 'https://http2.mlstatic.com/D_NQ_NP_957751-MCO53857189881_022023-O.jpg', 3, 'Modelo2', 9000.00),
(13, 'Negro', 'Moto enduro ligera y ágil', 'Kawasaki', 'https://www.motociclismo.es/uploads/s1/11/03/10/61/img20220331153616.jpeg', 3, 'Modelo3', 7500.00),
(14, 'Blanco', 'Moto enduro con motor potente', 'Yamaha', 'https://http2.mlstatic.com/D_NQ_NP_602602-MCO54933768263_042023-W.jpg', 3, 'Modelo4', 8500.00),
(15, 'Rojo', 'Moto enduro para terrenos difíciles', 'Ducati','https://images.ctfassets.net/x7j9qwvpvr5s/3LeAWpcVbOqMOcSeywKCIU/dfef36bb6a019529a43dd9564be57fa3/Multistrada-1200Enduro-MY18-Grey-37-Slider-Gallery-1920x1080.jpg', 3, 'Modelo5', 9500.00),
(16, 'Negro', 'Moto scooter compacta y ágil', 'Yamaha', 'https://http2.mlstatic.com/D_NQ_NP_827057-MCO54965783597_042023-O.webp', 4, 'Modelo1', 5000.00),
(17, 'Blanco', 'Moto scooter eléctrica', 'Ducati', 'https://www.motosan.es/wp-content/uploads/2021/09/1024_2000.jpg', 4, 'Modelo2', 4500.00),
(18, 'Azul', 'Moto scooter cómoda para la ciudad', 'Kawasaki', 'https://www.todocircuito.com/ckfinder/userfiles/images/maxiscooter-h2.jpg', 4, 'Modelo3', 4000.00),
(19, 'Rojo', 'Moto scooter con gran capacidad de almacenamiento', 'Yamaha', 'https://shop.yamaha-motor-india.com/cdn/shop/products/copper_adf199e7-479b-497c-b987-99af8fd2de55_600x.png?v=1676970193.jpg', 4, 'Modelo4', 5500.00),
(20, 'Gris', 'Moto scooter ágil y económica', 'Ducati', 'https://i.pinimg.com/736x/6b/22/d3/6b22d3b7061d8504d45a6072045c1282--maxi-scooter-maxis.jpg', 4, 'Modelo5', 4800.00),
(21, 'Negro', 'Moto touring para viajes largos y cómodos', 'Yamaha', 'https://publimotos.com/images/2015/2-febrero/yamahatrace/mt_09_tracer/yamaha//mt09_tracer.jpg', 5, 'Modelo1', 18000.00),
(22, 'Gris', 'Moto touring con capacidad para pasajero', 'Ducati', 'https://images.ctfassets.net/gqrh37syhmi5/1lJ2MRA91EMAUbo4lrvWCI/e8fd310aa6d9b88735a8c7b6b9e7af2a/Multistrada-1260-MY18-01-Red-Model-Preview-1050x650.png', 5, 'Modelo2', 17000.00),
(23, 'Blanco', 'Moto touring con sistema de navegación', 'Kawasaki', 'https://apollo-virginia.akamaized.net/v1/files/j20ui35ety4c3-CO/image;s=850x0', 5, 'Modelo3', 19000.00),
(24, 'Azul', 'Moto touring con amplio espacio de almacenamiento', 'Yamaha', 'https://i.ytimg.com/vi/fgpZhSW50js/maxresdefault.jpg', 5, 'Modelo4', 20000.00),
(25, 'Rojo', 'Moto touring con sistema de suspensión ajustable', 'Kawasaki', 'https://gentedemoto.com/wp-content/uploads/2020/08/Kawasaki-Versys-250-Indonesia-01.jpg', 5, 'Modelo5', 19500.00);

-- --------------------------------------------------------

--
-- Table structure for table `sede`
--

CREATE TABLE `sede` (
  `id_sede` int(11) NOT NULL,
  `nombre_sede` varchar(20) NOT NULL,
  `direccion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sede`
--

INSERT INTO `sede` (`id_sede`, `nombre_sede`, `direccion`) VALUES
(1, 'Bogotá', 'Calle 123'),
(2, 'Medellín', 'Carrera 456'),
(3, 'Cali', 'Avenida 789');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `id_documento` int(11) NOT NULL,
  `documento` varchar(50) DEFAULT NULL,
  `iniciales_documento` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tipo_documento`
--

INSERT INTO `tipo_documento` (`id_documento`, `documento`, `iniciales_documento`) VALUES
(1, 'Cedula Extranjero', 'CE'),
(2, 'Cedula de Ciudadania', 'CC'),
(3, 'Tarjeta de Identidad', 'TI');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_moto`
--

CREATE TABLE `tipo_moto` (
  `id_tipo_moto` int(11) NOT NULL,
  `tipo_carroceria` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tipo_moto`
--

INSERT INTO `tipo_moto` (`id_tipo_moto`, `tipo_carroceria`, `descripcion`) VALUES
(1, 'Deportiva', 'Motocicletas diseñadas para altas velocidades y re'),
(2, 'Cruiser', 'Motocicletas de estilo clásico y relajado, ideales'),
(3, 'Enduro', 'Motocicletas versátiles para conducción en carrete'),
(4, 'Scooter', 'Motocicletas de bajo cilindraje ideales para la mo'),
(5, 'Touring', 'Motocicletas diseñadas para viajes de larga distan');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `usuario_nombre1` varchar(20) NOT NULL,
  `usuario_nombre2` varchar(20) DEFAULT NULL,
  `usuario_apellido1` varchar(20) DEFAULT NULL,
  `usuario_apellido2` varchar(20) DEFAULT NULL,
  `usuario_email` varchar(40) DEFAULT NULL,
  `usuario_telefono` varchar(20) DEFAULT NULL,
  `id_documento` int(11) DEFAULT NULL,
  `usuario_documento` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `usuario_nombre1`, `usuario_nombre2`, `usuario_apellido1`, `usuario_apellido2`, `usuario_email`, `usuario_telefono`, `id_documento`, `usuario_documento`) VALUES
(1, 'Juan', 'Pablo', 'González', 'Martínez', 'juan.gonzalez@example.com', '3123456789', 1, '1234567890'),
(2, 'María', 'Fernanda', 'López', 'Sánchez', 'maria.lopez@example.com', '3101234567', 2, '0987654321'),
(3, 'Carlos', '', 'Ramírez', 'Gómez', 'carlos.ramirez@example.com', '3202345678', 3, '9876543210'),
(4, 'Luisa', 'María', 'Hernández', 'García', 'luisa.hernandez@example.com', '3145678901', 2, '4567890123'),
(5, 'Ana', '', 'Vargas', 'Pérez', 'ana.vargas@example.com', '3109876543', 1, '6543210987');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detalles_factura`
--
ALTER TABLE `detalles_factura`
  ADD PRIMARY KEY (`id_detalles_factura`),
  ADD KEY `IXFK_detalles_factura_sede` (`id_sede`),
  ADD KEY `IXFK_detalles_factura_factura` (`id_factura`),
  ADD KEY `IXFK_detalles_factura_detalles_moto_02` (`id_detalles_moto`);

--
-- Indexes for table `detalles_moto`
--
ALTER TABLE `detalles_moto`
  ADD PRIMARY KEY (`id_detalles_moto`),
  ADD KEY `IXFK_detalles_moto_moto` (`id_moto`);

--
-- Indexes for table `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `IXFK_factura_usuario` (`id_usuario`);

--
-- Indexes for table `moto`
--
ALTER TABLE `moto`
  ADD PRIMARY KEY (`id_moto`),
  ADD KEY `IXFK_moto_tipo_moto` (`id_tipo_moto`);

--
-- Indexes for table `sede`
--
ALTER TABLE `sede`
  ADD PRIMARY KEY (`id_sede`);

--
-- Indexes for table `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`id_documento`);

--
-- Indexes for table `tipo_moto`
--
ALTER TABLE `tipo_moto`
  ADD PRIMARY KEY (`id_tipo_moto`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `IXFK_usuario_tipo_documento` (`id_documento`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `detalles_factura`
--
ALTER TABLE `detalles_factura`
  MODIFY `id_detalles_factura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `detalles_moto`
--
ALTER TABLE `detalles_moto`
  MODIFY `id_detalles_moto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `factura`
--
ALTER TABLE `factura`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `moto`
--
ALTER TABLE `moto`
  MODIFY `id_moto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `sede`
--
ALTER TABLE `sede`
  MODIFY `id_sede` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `id_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tipo_moto`
--
ALTER TABLE `tipo_moto`
  MODIFY `id_tipo_moto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detalles_factura`
--
ALTER TABLE `detalles_factura`
  ADD CONSTRAINT `FK_detalles_factura_detalles_moto_02` FOREIGN KEY (`id_detalles_moto`) REFERENCES `detalles_moto` (`id_detalles_moto`),
  ADD CONSTRAINT `FK_detalles_factura_factura` FOREIGN KEY (`id_factura`) REFERENCES `factura` (`id_factura`),
  ADD CONSTRAINT `FK_detalles_factura_sede` FOREIGN KEY (`id_sede`) REFERENCES `sede` (`id_sede`);

--
-- Constraints for table `detalles_moto`
--
ALTER TABLE `detalles_moto`
  ADD CONSTRAINT `FK_detalles_moto_moto` FOREIGN KEY (`id_moto`) REFERENCES `moto` (`id_moto`);

--
-- Constraints for table `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `FK_factura_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Constraints for table `moto`
--
ALTER TABLE `moto`
  ADD CONSTRAINT `FK_moto_tipo_moto` FOREIGN KEY (`id_tipo_moto`) REFERENCES `tipo_moto` (`id_tipo_moto`);

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK_usuario_tipo_documento` FOREIGN KEY (`id_documento`) REFERENCES `tipo_documento` (`id_documento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
