
INSERT INTO player (name, last_name, age) VALUES
('Juan', 'Pérez', 27),
('María', 'García', 21),
('Pedro', 'Rodríguez', 35),
('Carla', 'Fernández', 24),
('Luis', 'Martínez', 29),
('Ana', 'Sánchez', 26),
('Mario', 'Gómez', 31),
('Laura', 'Rojas', 23),
('Javier', 'Hernández', 28),
('Lucía', 'Díaz', 22),
('Ricardo', 'Flores', 33),
('Verónica', 'Herrera', 25),
('Diego', 'Álvarez', 30),
('Ana', 'Castañeda', 27),
('Gabriela', 'Ortega', 29),
('Carlos', 'Jiménez', 26),
('Patricia', 'Gutiérrez', 28),
('Miguel', 'Vargas', 32),
('Sofía', 'López', 24),
('Martín', 'Ríos', 30);


INSERT INTO stadium (name, address, capacity) VALUES 
('Petanca Club Barcelona', 'Carrer dels Pedrons, 6, 08002 Barcelona', 100), 
('Petanca Club Madrid', 'Calle de San Millán, 1, 28021 Madrid', 75), 
('Petanca Club Valencia', 'Calle Metge Joaquim Ballester, 24, 46025 Valencia', 50), 
('Petanca Club Sevilla', 'Calle Vázquez López, s/n, 41013 Sevilla', 80), 
('Petanca Club Málaga', 'Calle de Alonso de Palencia, 33, 29007 Málaga', 60), 
('Petanca Club Bilbao', 'Calle de Los Fueros, 1, 48003 Bilbao', 90), 
('Petanca Club Granada', 'Callejón del Pretorio, 3, 18001 Granada', 70), 
('Petanca Club Zaragoza', 'Calle de la Victoria, 2, 50003 Zaragoza', 110), 
('Petanca Club Murcia', 'Calle Alejandro Seiquer, 6, 30003 Murcia', 65), 
('Petanca Club Las Palmas', 'Calle la Naval, 13, 35008 Las Palmas de Gran Canaria', 40), 
('Petanca Club Tenerife', 'Calle Doctor José Naveiras, 22, 38001 Santa Cruz de Tenerife', 55), 
('Petanca Club Alicante', 'Calle Cima de los Toros, 9, 03010 Alicante', 85), 
('Petanca Club Palma de Mallorca', 'Carrer de Miguel dels Sants Oliver, 5, 07010 Palma, Illes Balears', 75), 
('Petanca Club Vigo', 'Calle Adolfo Rodríguez Soto, 3, 36203 Vigo, Pontevedra', 80), 
('Petanca Club Gijón', 'Calle la Paz, 5, 33206 Gijón', 55), 
('Petanca Club Pamplona', 'Calle de Arrieta, 26, 31002 Pamplona, Navarra', 65), 
('Petanca Club Cádiz', 'Plaza de San Juan de Dios, s/n, 11005 Cádiz', 50), 
('Petanca Club Badajoz', 'Plaza de San Francisco, s/n, 06002 Badajoz', 45), 
('Petanca Club Santander', 'Calle Francisco Giner de los Ríos, 32, 39005 Santander', 70), 
('Petanca Club León', 'Calle Maestro Nicolás, 13, 24002 León', 60);


INSERT INTO team (name,creation_date,idstadium) VALUES 
('Los Petanqueiros', '2022-01-01', 1),
('Petanca Club Madrid', '2021-12-31', 2),
('Los Triunfadores', '2022-01-02', 3),
('Equipo de Oro', '2022-01-03', 4),
('Los Petanqueros del Sur', '2022-01-04', 5),
('Petanca Club Barcelona', '2022-01-05', 6),
('Los Campeones de la Liga', '2022-01-06', 7),
('Los Pelotaris', '2022-01-07', 8),
('Club de Petanca Valencia', '2022-01-08', 9),
('Los Goleadores', '2022-01-09', 10);



UPDATE `petanca`.`player` SET `idteam` = '1' WHERE `idplayer` IN (1,2,3);
UPDATE `petanca`.`player` SET `idteam` = '2' WHERE `idplayer` IN(4,5,6);
UPDATE `petanca`.`player` SET `idteam` = '3' WHERE `idplayer` IN(7,8);
UPDATE `petanca`.`player` SET `idteam` = '4' WHERE `idplayer` IN(9,10);
UPDATE `petanca`.`player` SET `idteam` = '5' WHERE `idplayer` IN (11,12);
UPDATE `petanca`.`player` SET `idteam` = '6' WHERE `idplayer` IN (13,14,15);
UPDATE `petanca`.`player` SET `idteam` = '7' WHERE `idplayer` IN( 16,17);
UPDATE `petanca`.`player` SET `idteam` = '8' WHERE (`idplayer` = 18);
UPDATE `petanca`.`player` SET `idteam` = '9' WHERE (`idplayer` = 19);
UPDATE `petanca`.`player` SET `idteam` = '10' WHERE (`idplayer` = 20);

INSERT INTO tournament (name)
VALUES ('Torneo de primavera'), ('Copa de Verano'), ('Torneo de Otoño');



INSERT INTO tournament_has_team (idtournament,idteam)
VALUES
(1,1),
(1,2),
(1,3),
(1,10),
(2,4),
(2,5),
(2,6),
(2,9),
(3,7),
(3,8),
(3,9),
(3,2)
;



INSERT INTO game (name,datetime,idstadium,idtournament)
VALUES
("Ragnarok", "2021-08-15 18:00:00", 4, 1),
("Ahi no da error", "2021-08-16 20:00:00", 8, 1),
("Viejuners", "2021-09-07 19:30:00", 1, 2),
("Cadera de Titanio", "2021-09-07 21:45:00", 3, 2),
("Patapalo", "2021-10-08 15:15:00", 12, 3),
("FullStack", "2021-10-09 18:30:00", 16, 3);

INSERT INTO team_has_game (idteam,idgame)
VALUES
(1,1),
(2,1),
(3,2),
(10,2),
(4,3),
(5,3),
(6,4),
(9,4),
(2,5),
(7,5),
(8,6),
(9,6);
