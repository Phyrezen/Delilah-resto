--Base de datos: Database_links
-------------------------
-------------------------
--------Historial--------
-------------------------
-------------------------
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `history` (
  `suma` int(100) DEFAULT NOT NULL,
  `orders` varchar(300) NOT NULL,
  `resume` varchar(500) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pay` varchar(20) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `id_menu` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

-------------------------
-------------------------
----------Menu----------
-------------------------
-------------------------
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `links_delilah` (
  `id` int(10) DEFAULT NOT NULL,
  `image` varchar(300) NOT NULL,
  `price` int(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `resume` varchar(4) NOT NULL,
  `user_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO 'links_delilah' VALUES (1 ,'',350,'Hamburguesa clásica','HC',6),
INSERT INTO 'links_delilah' VALUES (2 ,'',350,'Sandwitch Veggie','SV',6),
INSERT INTO 'links_delilah' VALUES (3 ,'',350,'Baguel de salmón','BS',6),
INSERT INTO 'links_delilah' VALUES (4 ,'',340,'Ensalada Veggie','EV',6),
INSERT INTO 'links_delilah' VALUES (5 ,'',300,'Focaccia','F',6),
INSERT INTO 'links_delilah' VALUES (6 ,'',440,'Sandwich Focaccia','SF',6),
INSERT INTO 'links_delilah' VALUES (7 ,'',500,'Salmón delilah','SD',6);

ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `menu`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

COMMIT;

-------------------------
-------------------------
----------Orders---------
-------------------------
-------------------------

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `orders` (
  `suma` int(100) NOT NULL,
  `orders` varchar(300) NOT NULL,
  `resume` varchar(500) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pay` varchar(20) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `id_menu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`);


ALTER TABLE `orders`
  MODIFY `id_menu` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

COMMIT;

-------------------------
-------------------------
--------Sessions---------
-------------------------
-------------------------

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `sessions` (
  `session_id` varchar(128) NOT NULL,
  `expires` int(11) NOT NULL,
  `data` mediumtext(500) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

COMMIT;


-------------------------
-------------------------
---------To buy----------
-------------------------
-------------------------


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `orders` (
  `id` int(10) DEFAULT NOT NULL,
  `image` varchar(300) NOT NULL,
  `price` int(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `resume` varchar(4) NOT NULL,
  `id_menu` int(20) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `tobuy`
  ADD PRIMARY KEY (`id_menu`);


ALTER TABLE `tobuy`
  MODIFY `id_menu` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

COMMIT;


-------------------------
-------------------------
-------usersdelilah------
-------------------------
-------------------------

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `usersdelilah` (
  `id` int(11) DEFAULT NOT NULL,
  `username` varchar(20) NOT NULL,
  `fullname`  varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(10) NOT NULL,
  `address` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `usersdelilah`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `usersdelilah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

COMMIT;