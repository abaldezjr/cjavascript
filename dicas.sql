CREATE TABLE
create table author (
    id number, 
    name string, 
    age number, 
    city string, 
    state string, 
    country string
)

INSERT
insert into author (id, name, age) values (1, Douglas Crockford, 62)

SELECT
select name, age, city 
from author 
where age > 50 and age < 60

UPDATE
update author set age = 45 
where id = 2

DELETE
delete from author where age < 50