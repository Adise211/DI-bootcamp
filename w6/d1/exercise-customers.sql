-- ** EXERCISE 1 AND 2 : **

-- CREATE TABLE customers (
-- 	 custmer_id SERIAL PRIMARY KEY,
-- 	 first_name VARCHAR(50) NOT NULL,
-- 	 last_name VARCHAR(50) NOT NULL
-- );

-- SELECT * FROM customers;

-- INSERT INTO customers (first_name,last_name)
-- VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),
-- ('Trevor','Green'),('Melanie','Johnson');




-- ** EXERCISE 3:  **
-- 4. All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE last_name= 'Smith';

-- 5. All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_name= 'Jones';

-- 6. All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE NOT last_name= 'Scott';

