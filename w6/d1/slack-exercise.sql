
-- CREATE TABLE city_info (
--   event_datetime timestamp NOT NULL,
--   city VARCHAR(50) NOT NULL,
--   temperature decimal NOT NULL,
--   light decimal NOT NULL,
--   airquality_raw decimal NOT NULL,
--   sound decimal NOT NULL,
--   humidity decimal NOT NULL,
--   dust decimal 
-- )

-- COPY city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) 
-- FROM '/tmp/city_info.csv' DELIMITER ',' CSV HEADER;

-- 1. Select everything from the table. (every row and columns) - How many records does the table have? 273239 rows
-- SELECT * FROM city_info; 
-- SELECT COUNT(event_datetime) FROM city_info;

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
-- SELECT temperature FROM city_info WHERE city = 'Boston' 
-- AND EXTRACT(MONTH FROM event_datetime)=03 
-- AND EXTRACT(DAY FROM event_datetime)=01 AND EXTRACT(HOUR FROM event_datetime)= 11 LIMIT 1;
-- ** another way **
-- SELECT temperature FROM city_info WHERE city = 'Boston' 
-- AND event_datetime::timestamp::date = '2015-03-01' 
-- AND EXTRACT(HOUR from event_datetime) = 11;

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ? 
-- SELECT event_datetime FROM city_info WHERE city ='San Francisco'
-- AND temperature BETWEEN 28 AND 30;

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
-- SELECT event_datetime,city,sound FROM city_info ORDER BY sound DESC LIMIT 1;

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
-- SELECT event_datetime,city,sound FROM city_info ORDER BY sound ASC LIMIT 1;

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
-- SELECT dust FROM city_info WHERE city ='San Francisco' 
-- AND EXTRACT(YEAR FROM event_datetime) =2015 
-- AND EXTRACT(MONTH FROM event_datetime)= 03 
-- AND EXTRACT(DAY FROM event_datetime)= 26 
-- AND EXTRACT(HOUR FROM event_datetime) > 20 ;

-- 7. When (ie. days and hours) is the humidity index less than 40 or more than 60 in Geneva?
-- SELECT EXTRACT(DAY FROM event_datetime), EXTRACT(HOUR FROM event_datetime) FROM city_info 
-- WHERE city = 'Geneva' 
-- AND (humidity < 40 OR humidity > 60)
-- ** or **
-- AND humiditiy NOT BETWEEN 40 AND 60;

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week
-- SELECT city,event_datetime,EXTRACT(DOW FROM event_datetime) AS day_of_week
-- FROM city_info ORDER BY light DESC LIMIT 1;

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
-- SELECT DISTINCT city FROM city_info WHERE city ILIKE 'S%';

-- -- 10. Add to the table, todays information in Israel - of this very hour. 
--(timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- - Use the return statement to see what you just inserted: 

INSERT INTO city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
VALUES ('2022-04-24 19:20:00','Israel',22.56654,2136.343,20.32,1545.012345,35,700)
RETURNING *;





