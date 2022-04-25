-- SELECT * FROM actors;

-- 1. Count how many actors are in the table.
-- SELECT COUNT(first_name) FROM actors;
-- SELECT * FROM actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO actors(first_name,last_name,date_birth,number_oscars)
VALUES ('','','','')
-- The output : AN ERROR