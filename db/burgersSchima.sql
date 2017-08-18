CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (id)

);

INSERT INTO burgers (burger_name, devoured) VALUES ("Mac Burger", FALSE);
INSERT INTO burgers(burger_name, devoured) VALUES ("Duble Burger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES(" Pizza Burger", FALSE);