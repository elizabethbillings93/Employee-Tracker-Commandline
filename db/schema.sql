DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;
CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(20)NOT NULL
);
CREATE TABLE position (
    id INT UNSIGNED AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    title VARCHAR (20) NOT NULL,
    salary INT NOT NULL,
    department_id INT
);
CREATE TABLE employee(
    id INT UNSIGNED AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    first_name VARCHAR(20)NOT NULL,
    last_name VARCHAR(20)NOT NULL,
    position_id INT NOT NULL,
    manager_id INT
);