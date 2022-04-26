-- EXERCISE 2 - XP :

-- 1. In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM  customer;

-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT DISTINCT first_name,last_name FROM  customer AS full_name;

-- 3. Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM  customer;

-- 4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT DISTINCT * FROM  customer ORDER BY first_name ASC;

-- 5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, rental_rate, title, description, release_year FROM film ORDER BY rental_rate ASC ;

-- 6. Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address,phone FROM address WHERE district='Texas';

-- 7. Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film WHERE film_id=15 OR film_id=150;

-- 8. Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, description,rental_rate, length  
FROM film WHERE title IN ('Baby Hall');

-- 9. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
-- 10. Write a query which will find the 10 cheapest movies.
SELECT title,rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10;

-- 11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies. 
-- Bonus: Try to not use LIMIT.

-- 12. Write a query which will join the data in the customer table and the payment table. You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT *
FROM payment
LEFT OUTER JOIN customer
ON payment.customer_id = customer.customer_id
ORDER BY payment.customer_id ASC;

-- 13. You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT *
FROM film
LEFT OUTER JOIN inventory
ON film.film_id = inventory.film_id
WHERE film.film_id NOT IN (inventory.film_id);



-- 14. Write a query to find which city is in which country.
SELECT city.city, country.country
FROM city
LEFT OUTER JOIN country
ON city.country_id = country.country_id;


