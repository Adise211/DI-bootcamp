-- ** EXERCISE 1 AND 2 :  **

-- CREATE TABLE items (
-- 	 item_id SERIAL PRIMARY KEY,
-- 	 item_name VARCHAR(50) NOT NULL,
-- 	 price_item SMALLINT NOT NULL
-- );

-- SELECT * FROM items;
-- INSERT INTO items (item_name, price_item)
-- VALUES ('Small desk',300);
-- INSERT INTO items (item_name, price_item)
-- VALUES ('Large desk',300),('Fan',80);

-- UPDATE items
-- SET price_item = 100
-- WHERE item_name = 'Small desk';




-- ** EXERCISE 3: **
-- 1. All the items.
-- SELECT * FROM items;

-- 2. All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE price_item > 80; 

-- 3. All the items with a price below 300. (300 included).
-- SELECT * FROM items WHERE price_item <= 300;



