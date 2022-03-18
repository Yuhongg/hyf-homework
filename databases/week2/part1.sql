--Part 1
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
   task(title, description, created, updated, due_date, status_id, id)
 VALUES
   ("HYF courses", "meet Sunday", "2022-03-17 21:27:00", "2022-03-19 11:11:17", "2022-03-18 10:01:16", 2, 36);

--Change the title of a task
UPDATE task
SET title ="HYF database week2"
WHERE id = 36;

--Change a task due date
UPDATE task
SET due_date = "2022-03-20 12:00:00"
WHERE id =36;

--Change a task status
UPDATE task
SET status_id = 1
WHERE id = 36;

--Mark a task as complete

UPDATE task
SET status_id = 3
WHERE id = 36;

--Delete a task
DELETE FROM task
WHERE id = 35;

--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
 FROM 
   task 
   JOIN user 
   ON task.id = user.id 

 WHERE 
   user.email LIKE "%@spotify.com";


--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM task 
 JOIN user 
   ON task.id = user.id 
  JOIN status
  ON task.status_id =status_id
 WHERE 
   user.name Like 'Donald Duck' 
   AND status.name LIKE 'Not started';


--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.*
FROM task
JOIN user
ON task.id=user.id
WHERE 
 user.name LIKE 'Maryrose Meadows'
 AND month(created) = 09;


--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
 SELECT month(created) as 'month_created', COUNT(task.id) as task_amount
 FROM
   task
 GROUP BY month(created); 
