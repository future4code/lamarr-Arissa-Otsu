### Exercício 01
a) Chave estrangeira é uma coluna de uma tabela que se relaciona com a chave primária de uma outra tabela.

b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY
    (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"002"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Bonitinho!",
    6,
	"003"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Muito engraçado!",
    9,
	"004"
);
```

c) O erro apresentado é: "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416636-arissa-otsu`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))". Esse erro é apresentado, pois não é possível adicionar ou atualizar uma linha de um id de filme não existente.

d) 
```
ALTER TABLE Movie DROP COLUMN rating;
```

e) O erro apresentado é: "Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416636-arissa-otsu`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))". Esse erro é apresentado, pois não é possível deletar um registro que tenha relacionamento com outra tabela do banco de dados.

### Exercício 02
a) A tabela MovieCast possui duas colunas, uma chamada movie_id e a outra actor_id. Ambas as colunas permitem dados do tipo string de até 255 caracteres e ambas estão relacionadas com outras tabelas (Actor e Movie).

b)
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"002",
		"001"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"002",
		"003"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
		"003"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
		"006"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
		"001"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
		"002"
);
```

c) O erro apresentado é: "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416636-arissa-otsu`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))". Esse erro é apresentado, pois não é possível criar uma relação com um id de filme/ator não existente.

d) O erro apresentado é: "Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416636-arissa-otsu`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))". Esse erro é apresentado, pois não é possível deletar um registro que tenha relacionamento com outra tabela do banco de dados.

### Exercício 03
a) O operador "ON" representa qual a relação que deverá ser feita entre as duas tabelas.

b)
```
SELECT name, Movie.id, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercício 04
a) 
```
SELECT name, Movie.id, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

b) 
```
SELECT name, Movie.id, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

c)
```
SELECT Movie.name, AVG(Rating.rate) FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);
```

### Exercício 05
a) É necessário utilizar dois "JOIN", pois as tabelas são independentes entre si.

b)
```
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) A query retorna cada um dos filmes e os atores que fazem parte do elenco.

d) 
```
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name, r.rate, r.comment FROM Movie m
LEFT JOIN Rating r ON r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### Exercício 06
a) A relação é M:N.

b)
```
CREATE TABLE Oscar (
	id VARCHAR(255) NOT NULL,
	category VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    fk_movie VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

c)
```
INSERT INTO Oscar (id, category, year, movie_id) 
VALUES (
	"001",
    "Melhor trilha sonora",
    2012,
	"002"
);
INSERT INTO Oscar (id, category, year, movie_id) 
VALUES (
	"003",
    "Melhor diretor",
    2012,
	"002"
);
INSERT INTO Oscar (id, category, year, movie_id) 
VALUES (
	"002",
    "Melhor atriz",
    2016,
	"004"
);
INSERT INTO Oscar (id, category, year, movie_id) 
VALUES (
	"004",
    "Melhor filme",
    2016,
	"004"
);
INSERT INTO Oscar (id, category, year, movie_id) 
VALUES (
	"005",
    "Melhor fotografia",
    2018,
	"003"
);
INSERT INTO Oscar (id, category, year, movie_id) 
VALUES (
	"006",
    "Melhor roteiro",
    2018,
	"003"
);
````

c)
```
SELECT Movie.name, Oscar.category from Movie
LEFT JOIN Oscar on Movie.id = Oscar.movie_id;
```



