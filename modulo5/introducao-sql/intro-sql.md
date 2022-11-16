### Exercício 01
a) 
CREATE TABLE: cria uma tabela;
VARCHAR (): limita o número de caracteres de uma string;
PRIMARY KEY: representa uma chave única na tabela;
NOT NULL: indica que a coluna não pode ser nula;
DATA: representa uma data.

b) O comando SHOW DATABASE retorna os schema existentes. Já o comando SHOW TABLE retorna as tabelas existentes.

c) O comando DESCRIBE Actor retorna a estrutura da tabela, bem como os tipos de dados de cada coluna.

### Exercício 02
a) 
``` 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) O erro apresentado foi: "Código de erro: 1062. Entrada duplicada '002' para a chave primária". Como já existia um dado com o id 002 na tabela, não foi possível inserí-lo, já que a chave "id" deve ser única.

c) O erro apresentado foi "Código de erro: 1136. Contagem de coluna não correspode à contagem de valores na linha 1". Tal erro ocorreu, pois os parâmetros "birth-date" e "gender" não foram especificados. Abaixo a query corrigida:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O erro apresentado foi "Código de erro: 1364. Campo "name" não possui um valor padrão. Tal erro ocorreu, pois o parâmetro "name" não foi informado. Abaixo a query corrigida:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Brad Pitt",
  400000,
  "1949-04-18", 
  "male"
);
```
e) O erro apresentado foi "Código de erro: 1292. Valor incorreto de data: 1950 para a coluna "birth date" na linha 1. Tal erro ocorreu, pois o parâmetro "birth-date" deve ser passado entre chaves por se tratar de uma data. Abaixo a query corrigida:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f) Abaixo as queries criadas:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Julia Roberts",
  24500000,
  "1967-10-28", 
  "female"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "George Clooney",
  20500000,
  "1961-05-06", 
  "male"
);
```

### Exercício 03
a)
```
SELECT * FROM Actor WHERE gender = "female";
```

b) 
```
SELECT salary from Actor WHERE name="Tony Ramos";
```

c)
```
SELECT * FROM Actor WHERE gender="invalid";
```
A query retorna uma tabela com valores NULL, pois não há nenhum dado que possua "invalid" como gênero.

d) 
```
SELECT id, name, salary from Actor WHERE salary<=500000;
```

e) O erro apresentado foi "Código de erro: 1054. Coluna "nome" desconhecida na lista de campos. Tal erro ocorreu, pois o parâmetro "nome" não existe. Abaixo a query corrigida:
```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 04
a) A query está filtrando os dados que possuem nome iniciando com a letra "A" ou "J" e que possuem sálario maior do que R$ 300000.

b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

c) 
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";
```

d) 
```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR "%a%" OR "%G%" OR "%g%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 05
a) A query abaixo cria uma tabela com as colunas de id, nome, sinopse, data de lançamento e avaliação de um filme.
```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    movie_rating INT NOT NULL
);
```

b) 
```
INSERT INTO Movies (id, name, synopsis, release_date, movie_rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```
c)
```
INSERT INTO Movies (id, name, synopsis, release_date, movie_rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```
d) 
```
INSERT INTO Movies (id, name, synopsis, release_date, movie_rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

e) 
```
INSERT INTO Movies (id, name, synopsis, release_date, movie_rating)
VALUES(
  "004", 
  "Minha Mãe é uma Peça",
  "Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos. Um dia, após descobrir que eles a consideram uma chata, resolve sair de casa sem avisar ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida tia Zélia para desabafar suas tristezas do presente e recordar os bons tempos do passado..",
  "2013-06-21", 
  9
);
```

### Exercício 06
a) 
```
SELECT id, name, movie_rating from Movies WHERE id = "002"
```

b) 
```
SELECT * from Movies WHERE name="Minha Mãe é uma Peça";
```

c) 
```
SELECT id, name, synopsis from Movies WHERE movie_rating > 7;
```

### Exercício 07
a)
```
SELECT * from Movies WHERE name LIKE "%vida%"
```

b) 
```
SELECT * FROM Movies WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";
```

c) 
```
SELECT * FROM Movies WHERE release_date < "2013-02-08"
```

d) 
```
SELECT * FROM Movies
WHERE (name LIKE "%vida%" OR synopsis LIKE "%vida%") AND release_date < "2013-02-08" AND movie_rating > 7
```


