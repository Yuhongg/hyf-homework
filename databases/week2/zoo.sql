CREATE DATABASE Zoo
  DEFAULT CHARACTER SET "utf8mb4";

  USE Zoo;

  CREATE Table Animal
(id int NOT Null ,  
Breed_code int NOT Null,
Staff_ID int NOT Null,
name varchar(255) NOT NULL,
age int NOT NULL,
Date_arrived DATE NOT NULL,
Date_deceased DATE NOT NULL,
Date_departed DATE NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(Breed_code) REFERENCES Animal_breeds(Breed_code),
FOREIGN KEY(Staff_ID) REFERENCES Staff(Staff_ID)
);


CREATE Table IF NOT EXISTS Animal_breeds
(Breed_code int NOT Null , 
Breed_Name varchar(255),
PRIMARY KEY(Breed_code));

CREATE TABLE Staff
(Staff_ID int NOT NULL, 
First_Name varchar(255) NOT NULL,
Last_Name varchar(255) NOT NULL,
PRIMARY KEY(Staff_ID)
);
