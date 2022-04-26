-- ** EXERCISE 1: part 1

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- SELECT first_name,last_name FROM customers ORDER BY first_name ASC;

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY last_name DESC;
-- SELECT * FROM customers;


-- CREATE TABLE purchases (
-- 	id_n INTEGER PRIMARY KEY,
-- 	customer_id INTEGER REFERENCES customers(customer_id),
-- 	quantity_purchased BIGINT
-- );

-- ALTER TABLE purchases ADD COLUMN item_id INTEGER REFERENCES items(item_id);
-- SELECT * FROM purchases;
-- INSERT INTO purchases (id_n,customer_id, quantity_purchased, item_id)
-- VALUES (1,(SELECT customer_id FROM customers WHERE first_name='Scott' AND last_name='Scott'),
-- 	   1,(SELECT item_id FROM items WHERE item_name='Fan'));
-- INSERT INTO purchases (id_n,customer_id, quantity_purchased, item_id)
-- VALUES (2,(SELECT customer_id FROM customers WHERE first_name='Melanie' AND last_name='Johnson'),
-- 	   10,(SELECT item_id FROM items WHERE item_name='Large desk'));
-- INSERT INTO purchases (id_n,customer_id, quantity_purchased, item_id)
-- VALUES (3,(SELECT customer_id FROM customers WHERE first_name='Greg' AND last_name='Jones'),
-- 	   2,(SELECT item_id FROM items WHERE item_name='Small desk'));




-- ** EXERCISE 1: part 2
-- 1. Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
SELECT * FROM purchases;

-- All purchases, joining with the customers table.
SELECT *
FROM purchases
FULL OUTER JOIN customers
ON purchases.customer_id = customers.customer_id;

-- Purchases of the customer with the ID equal to 5.
SELECT *
FROM purchases
LEFT OUTER JOIN customers
ON purchases.customer_id = customers.customer_id
WHERE customers.customer_id = 5;

-- Purchases for a large desk AND a small desk
SELECT purchases.id_n, purchases.quantity_purchased, items.item_name
FROM purchases
LEFT OUTER JOIN items
ON purchases.item_id = items.item_id
WHERE items.item_name = 'Large desk' OR items.item_name = 'Small desk' ;


-- 2. Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- SELECT * FROM purchases;
SELECT customers.first_name
FROM customers
RIGHT OUTER JOIN purchases
ON purchases.customer_id = customers.customer_id;

-- Customer last name
SELECT customers.last_name
FROM customers
RIGHT OUTER JOIN purchases
ON purchases.customer_id = customers.customer_id;

-- Item name
SELECT items.item_name
FROM items
RIGHT OUTER JOIN purchases
ON purchases.item_id = items.item_id;




 



