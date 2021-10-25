-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2021 at 12:21 AM
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
(1, 'Bogota DC', 'Calle 168 65-50'),
(2, 'Medellin', 'cra 64 81-23'),
(3, 'Cali', 'Cra 90 90-03'),
(4, 'Chia', 'Cra 90 40-73');

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
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id_invoice`, `VAT`, `payment_method`, `date`, `id_campus`, `id_user`) VALUES
(1, 0.19, 'Tarjeta debito', '2019-10-20', 1, 1),
(2, 0.19, 'Tarjeta credito', '2018-11-30', 2, 4),
(3, 0.19, 'Cheque', '2017-08-08', 3, 1),
(4, 0.19, 'Efectivo', '2020-01-01', 4, 2),
(5, 0.19, 'Tarjeta de oro', '2019-10-20', 1, 1),
(6, 0.19, 'Efectivo', '2021-10-23', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `id_invoice_det` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `id_invoice` int(11) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `id_vehicle_detail` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice_detail`
--

INSERT INTO `invoice_detail` (`id_invoice_det`, `amount`, `id_invoice`, `price`, `id_vehicle_detail`) VALUES
(1, 1, 1, 150000.00, 5),
(2, 1, 2, 200000.00, 6),
(3, 1, 3, 300000.00, 7),
(4, 1, 4, 700000.00, 8),
(6, 1, 6, 150000.00, 10);

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
  `user_phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `user_name1`, `user_name2`, `user_lastname1`, `user_lastname2`, `user_email`, `user_phone`) VALUES
(1, 'Juan', 'Pablo', 'Wilches', 'Esspinosa', 'juanpablo@hotmail.com', '3057245010'),
(2, 'Angie', 'Camila', 'Beltran', 'Gomez', 'angie@gmail.com', '3108526969'),
(3, 'Julian', 'Camilo', 'Pinilla', 'Lizarazo', 'julian@gmail.com', '3119516565'),
(4, 'Juan', 'David', 'Molina', 'Elizalde', 'david@gmail.com', '3208549696'),
(5, 'Pedro', 'Pablo', 'Piñeros', 'Parker', 'pp@gmail.com', '3241549696');

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
  `id_vehicle_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id_vehicle`, `color`, `description`, `brand`, `url`, `id_vehicle_type`) VALUES
(1, 'Amarillo', 'Francesco Virgolinii, tote mas rapido de itale', 'Ferrari', 'a/b/c', 1),
(2, 'Rojo', 'Rayo mcqueen ganador de 3 copas piston', 'Buggatti', 'a/w/q', 2),
(3, 'Azul', 'Carro tombo', 'Aston Martin', 'f/s/g', 3),
(4, 'Verde', 'Es un lambo, que mas quieres?', 'Lamborghini', 'f/s/g', 4),
(5, 'Awa', 'FRANCHESCOOOOO?', 'Ferrari', 'f/s/g', 4);

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
(5, 'qwe-852', 'kjh54354fd5g4f3d', 'dfsfds675fds765', 2),
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
(5, 'ALV', 'Silavidafueraestabletodoeltiempo');

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
  MODIFY `id_campus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id_invoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `id_invoice_det` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id_vehicle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vehicle_detail`
--
ALTER TABLE `vehicle_detail`
  MODIFY `id_vehicle_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vehicle_type`
--
ALTER TABLE `vehicle_type`
  MODIFY `id_vehicle_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
