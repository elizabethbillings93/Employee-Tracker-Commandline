USE employees_db;
INSERT INTO department(name)
VALUES
('Animal Trainer'),
('Clown'),
('Ring Master'),
('Acrobat');
INSERT INTO position (title,salary,department_id)
VALUES
('Animal Trainer I', 20,1),
('Animal Trainer II', 40,1),
('Mini Clown',4,2),
('Full Sized Clown',8,2), 
('Ring Master I', 100000,3),
('Floor Acrobat', 50000,4), 
('Air Acrobat', 100000,4);
INSERT INTO employee (first_name, last_name,position_id, manager_id)
VALUES 
('Annie','Jones',2, null),
('Barbara','Woodcock',1, 9),
('Gladys','Roy',6, 9 ),
('Kittie','Smith',5, null),
('Dan','Rice',7, 9);