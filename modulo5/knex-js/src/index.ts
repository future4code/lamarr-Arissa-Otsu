import express from "express"
import cors from 'cors'
import { connection } from "./connection"

const app = express()

app.use(express.json())

app.use(cors())


import { Request, Response } from "express"

// Esse arquivo seria o index.ts
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE id = '${id}'`)
	return result[0][0]
}

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorById("001"))
})()

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        console.log(await getActorById(id))
        res.end()
    } catch (error: any) {
		console.log(error.message)
        res.status(500).send("Unexpected error")
    }
}) 

// Exercício 01
// a) Todas as informações do ator/atriz do id procurado são retornadas.

// b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = '${name}'`)
	return result[0][0]
}

(async () => {
    console.log(await getActorByName("Blake Lively"))
})()


//c)
const countActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`SELECT COUNT(*) as count FROM Actor WHERE gender= '${gender}'`)
	return result[0][0]
}

(async () => {
    console.log(await countActorByGender("female"))
})()


// Exercício 02
// a)
const updateSalary = async (
    id: string,
    salary: number,
): Promise<void> => {
    await connection ("Actor")
    .update({salary: salary})
    .where({id:id});
};

(async () => {
    await updateSalary("002", 20000)
})()

//b)
const deleteActor = async (
    id: string,
): Promise<void> => {
    await connection.raw (`SET foreign_key_checks = 0;`)
    await connection ("Actor")
    .delete()
    .where({id:id});
    await connection.raw (`SET foreign_key_checks = 0;`)
};

//c)
const returnAverageSalary = async (
    gender: string,
): Promise<any> => {
    const result = await connection ("Actor")
    .avg("salary as average salary")
    .where({gender})
    return result[0]
};

(async () => {
    console.log(await returnAverageSalary("female"))
})()

// Exercício 03
//a)
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

//b)
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

// Exercício 04
//a)
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

//b)
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

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});