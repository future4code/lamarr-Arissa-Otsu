### Exercício 01
a) O comando remove a coluna "salary".  
b) O comando altera a coluna "gender" para "sex" e atribui o tipo de dado como VARCHAR(6).  
c) O comando altera o tipo de dado da coluna "gender" para VARCHAR(255).  
d) Abaixo o comando:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 02
a) 
```
UPDATE Actor 
SET 
	name = "Blake Lively", 
    birth_date = "1987-08-25" 
WHERE id = "003";
```
b)
```
UPDATE Actor 
SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
```
c) 
```
UPDATE Actor 
SET 
	name = "Tom Holland", 
    salary = 24000000,
    birth_date = "1996-06-01",
    gender =  "male"
WHERE id = "005";
```
d) Ao tentar alterar uma propriedade de um id inexistente, a query é realizada, porém não há nenhuma atualização da tabela.

### Exercício 03
a) 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b) 
```
DELETE FROM Actor WHERE gender = "male" AND salary > 10000000;
```

### Exercício 04
a) 
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender="female";
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d) 
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 05
a) A query retorna a quantidade de atrizes e a quantidade de atores na tabela.
b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor ORDER BY salary;
```
d) 
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
e) 
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### Exercício 06
a) 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b) 
```
ALTER TABLE Movie CHANGE movie_rating rating FLOAT;
```
c)
```
UPDATE Movie
SET 
    playing_limit_date = "2022-11-30"
WHERE id = "001"
```
d)
```
UPDATE Movie
SET 
    playing_limit_date = "2022-10-20"
WHERE id = "002"
```
e) 
```
DELETE FROM Movie WHERE id="001";
```
A query é realizada, porém não há nenhuma atualização da tabela.

### Exercício 07
a)
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
b)
```
SELECT AVG(rating) FROM Movie;
```
c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
d) 
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
e)
```
SELECT MAX(rating) FROM Movie;
```
f) 
```
SELECT MIN(rating) FROM Movie;
```

### Exercício 08
a)
```
SELECT * FROM Movie ORDER BY name;
```
b) 
```
SELECT * FROM Movie ORDER BY name DESC LIMIT 5;
```
c)
```
SELECT * FROM Movie 
WHERE playing_limit_date > curdate() AND release_date < CURDATE() 
ORDER BY release_date DESC
LIMIT 3;
```
d)
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```







