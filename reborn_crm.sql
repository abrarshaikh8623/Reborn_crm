-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2024 at 12:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reborn_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `reborn_users`
--

CREATE TABLE `reborn_users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` varchar(30) NOT NULL,
  `auth_token` varchar(255) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` varchar(25) NOT NULL,
  `user_type` varchar(30) NOT NULL,
  `account_status` varchar(20) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reborn_users`
--

INSERT INTO `reborn_users` (`id`, `user_id`, `email`, `password`, `last_login`, `auth_token`, `created_by`, `created_at`, `user_type`, `account_status`) VALUES
(1, 'AD123456', 'admin@reborn-crm.com', '6481f8e1a060d56eeb7c10ac7809d316800dce013713c412e1d22076505b11a8', '28-Jun-2024 04:13:25', 'MQ==', 1, '2024-06-28', 'admin', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reborn_users`
--
ALTER TABLE `reborn_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reborn_users`
--
ALTER TABLE `reborn_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
