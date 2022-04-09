CREATE DATABASE School
  DEFAULT CHARACTER SET "utf8mb4";

  USE School;

--Class: with the columns: id, name, begins (date), ends (date)

CREATE Table Class
(id int NOT NULL, 
name varchar(255) NOT NULL,
begins DATETIME NOT NULL,
ends DATETIME NOT NULL);

--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE Table IF NOT EXISTS Student 
(id int NOT NULL, 
name varchar(255) NOT NULL,
email varchar(255) NOT NULL,
phone int NOT NULL,
class_id int UNSIGNED);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE Class
ADD status ENUM('not-started','ongoing','finished')