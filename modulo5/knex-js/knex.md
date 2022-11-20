### Exercício 01
a) Todas as informações do ator/atriz do id procurado são retornadas.

b)
```
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = '${name}'`)
	return result[0][0]
}
```

c)
```
const countActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`SELECT COUNT(*) as count FROM Actor WHERE gender= '${gender}'`)
	return result[0][0]
}
```

### Exercício 02
a)
```
const updateSalary = async (
    id: string,
    salary: number,
): Promise<void> => {
    await connection ("Actor")
    .update({salary: salary})
    .where({id:id});
};
```

b)
```
const deleteActor = async (
    id: string,
): Promise<void> => {
    await connection.raw (`SET foreign_key_checks = 0;`)
    await connection ("Actor")
    .delete()
    .where({id:id});
    await connection.raw (`SET foreign_key_checks = 0;`)
};
```

c)
```
const returnAverageSalary = async (
    gender: string,
): Promise<any> => {
    const result = await connection ("Actor")
    .avg("salary as average salary")
    .where({gender})
    return result[0]
};
```

### Exercício 03
a)
```
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err:any) {
        res.status(400).send({
        message: err.message,
    });
    }
});
```

b) 
```
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender;
        const result = await countActorByGender(gender as string);

        res.status(200).send(result)
    } catch (err:any) {
        res.status(400).send({
        message: err.message,
    });
    }
});
```

### Exercício 04
a) 
```
app.put("/actor", async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const salary = req.body.salary;
        const result = await updateSalary(id, salary);

        res.status(200).send(result)
    } catch (err:any) {
        res.status(400).send({
        message: err.message,
    });
    }
});
```

b)
```
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await deleteActor(id);

        res.status(200).send(result)
    } catch (err:any) {
        res.status(400).send({
        message: err.message,
    });
    }
});
```

### Exercício 05
```
const addMovie = async (
    id: string,
    name: string,
    synopsis: string,
    release_date: Date,
    playing_limit_date: Date,
): Promise<void> => {
    await connection ("Movie")
    .insert({
        id: id,
        name: name,
        synopsis: synopsis,
        release_date: release_date,
        playing_limit_date: playing_limit_date,
    })
    .into("Movie")
};

app.post("/movie", async (req: Request, res: Response) => {
    try {
        await addMovie (
            req.body.id,
            req.body.name,
            req.body.synopsis,
            req.body.release_date,
            req.body.playing_limit_date
        );

        res.status(200).send({message: "Filme inserido com sucesso."})
    } catch (err:any) {
        res.status(400).send({
        message: err.message,
    });
    }
});
```

### Exercício 06
```
const getAllMovies = async () : Promise <void> => {
    const movies = await connection.raw(`SELECT * FROM Movie LIMIT 15`)
	return movies[0]
}

app.get("/movie/all", async (req: Request, res: Response) => {
    try {
        const result = await getAllMovies();

        res.status(200).send(result)
    } catch (err:any) {
        res.status(400).send({
        message: err.message,
    });
    }
});
```

### Exercício 07