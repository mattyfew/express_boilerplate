DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_address VARCHAR(255) NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    currency VARCHAR(5) NOT NULL
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY
);


INSERT INTO orders (customer_name, customer_address, item_name, price, currency) VALUES ('Peter Lustig', 'Steindamm 80', 'Macbook', 1700, 'EUR');
INSERT INTO orders (customer_name, customer_address, item_name, price, currency) VALUES ('John Smith', 'Reeperbahn 153', 'Macbook', 1700, 'EUR');
INSERT INTO orders (customer_name, customer_address, item_name, price, currency) VALUES ('Ted Justice', 'Lagerstrasse 11', 'Book "Guide to Hamburg"', 20, 'EUR');













-- 20
-- EUR
-- 004
-- Peter Lustig
-- Steindamm 80
-- Book "Cooking 101"
-- 10
-- EUR
-- 005
-- Peter Lustig
-- Steindamm 80
-- Inline Skates
-- 75
-- EUR
-- 006
-- Ted Justice
-- Lagerstrasse 11
-- Playstation 4
-- 270
-- EUR
-- 007
-- John Smith
-- Reeperbahn 153
-- Flux compensator
-- 2000
-- USD
-- 008
-- Peter Lustig
-- Steindamm 80
-- Inline Skates
-- 75
-- EUR
