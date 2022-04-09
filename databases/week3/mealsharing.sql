CREATE DATABASE Meal_sharing DEFAULT CHARACTER SET = 'utf8mb4';

  USE Meal_sharing;

  CREATE TABLE `Meal` (
     `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
     `title` varchar(255) NOT NULL,
     `description` text NULL DEFAULT NULL,
     `location` varchar(255) NOT NULL,
     `when` DATETIME NOT NULL,
     `max_reservation` int(10) NOT NULL,
     `price` DECIMAL(19, 2) NOT NULL,
     `created_date` DATE NULL DEFAULT NULL
 );

 CREATE TABLE `reservation` (
   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   `number_of_guests` INT(10) NOT NULL, 
   `meal_id` INT(10) UNSIGNED NOT NULL, 
   `created_date` DATE NOT NULL, 
   `contact_phonenumber` VARCHAR(255) NOT NULL, 
   `contact_name` VARCHAR(255) NOT NULL, 
   `contact_email` VARCHAR(255) NOT NULL, 
   CONSTRAINT `fk_meal` FOREIGN KEY (`Meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
 );

CREATE TABLE `Review` (
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
     `title` varchar(255) NOT NULL,
     `description` text NULL DEFAULT NULL,
     `meal_id` int(10) unsigned NOT NULL,
     `stars` int(10) NOT NULL,
     `created_date` DATE NULL DEFAULT NULL,
     CONSTRAINT `fk_review_meal` FOREIGN KEY (`Meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 );

 INSERT INTO Meal (
   `id`, `title`, `description`, `location`, 
   `when`, `max_reservation`, `price`, 
   `created_date`
 ) 
 VALUES 
   (
     1, 'konpao chicken', 'Sichuan dish', 
     'Aarhus', '2022-03-21 11:00:00', 
     4, 100, '2022-03-22'
   );

   INSERT INTO Meal (
   `id`, `title`, `description`, `location`, 
   `when`, `max_reservation`, `price`, 
   `created_date`
 ) 
 VALUES 
   (
     3, 'konpao pork', 'Sichuan dish', 
     'Aarhus', '2022-03-21 11:00:00', 
     6, 110, '2022-03-22'
   );

INSERT INTO reservation (
   `id`, `number_of_guests`, `meal_id`, 
   `created_date`, `contact_phonenumber`, 
   `contact_name`, `contact_email`
 ) 
 VALUES 
   (
     1, 4, 1, '2022-03-26', '78723456', 'Step', 
     '123@gmail.com'
   );


   INSERT INTO Review (
   `id`, `title`, `description`, `meal_id`, 
   `stars`, `created_date`
 ) 
 VALUES 
   (
     1, 'not good', 'I do not like spicy food', 
     1, 1, '2022-04-02'
   );

--Get all meals
SELECT * FROM Meal;
--Add a new meal
INSERT INTO 
     `Meal` (`title`, `description`, `location`, `when`, `max_reservation`, `price`, `created_date`)
 VALUES
     ("pasta", "italian dish", "Italy", "2022-03-25", 10, 120, "2022-03-25");

--Get a meal with any id, fx 1
SELECT * 
FROM Meal
WHERE id = 1;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET title = "chicken"
WHERE id = 1;
--Delete a meal with any id, fx 1

DELETE FROM Meal
WHERE id = 3;

--Get all reservations
SELECT * 
FROM reservation;
--Add a new reservation
INSERT INTO
     `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
 VALUES
     (6, 2, "2022-03-23", "45678934", "Lee", "lee@email.com");
--Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET contact_name ="RT"
WHERE id = 1;
--Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id =2;

--Get all reviews
SELECT *
FROM Review;
--Add a new review
INSERT INTO 
     `Review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
 VALUES
     ("great", "Amazing", 2, 5, "2022-04-28");
--Get a review with any id, fx 1
SELECT * 
FROM Review 
WHERE id =1;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET title ="I love this place"
WHERE id = 1;
--Delete a review with any id, fx 1

DELETE FROM
     Review
 WHERE
     id = 2;