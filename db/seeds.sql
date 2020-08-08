use employees;

INSERT INTO department
    (name)
VALUES
    ('Human Resources'),
    ('Marketing'),
    ('Information Technology'),
    ('Accounting');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('HR Manager', 100000, 1),
    ('HR', 50000, 1),
    ('Marketing Director', 140000, 2),
    ('Sales', 65000, 2),
    ('IT Director', 195000, 3),
    ('Desktop Support', 100000, 3),
    ('Account Manager', 110000, 4),
    ('Accountant', 90000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Jackie', 'Petit', 1, NULL),
    ('Max', 'Gonzales', 2, NULL,
    ('Calvin', 'Kim', 3, 1),
    ('Yukata', 'Mikoto', 4, 2),
    ('Maria', 'Longwood', 5, NULL),
    ('Sheri', 'Green', 6, 3),
    ('Jonathan', 'Prune', 7, NULL),
    ('Andrew', 'Romans', 8, 4),
    ('Julius', 'Thomas', 9, 5),
    ('Sari', 'Rasa', 10, NULL);
