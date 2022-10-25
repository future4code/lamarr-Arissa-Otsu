import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// Exercício 01 - criar endpoint
app.get("/", (req: Request, res: Response) => {          
    res.status(200).send("Esse é o exercício 1.")
})

// Exercício 02 - criar tipo de usuário

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}

// Exercício 03 - criar array de usuários

let users: User[] = [
    {
        id: 1,
        name: "Arissa",
        phone: "1234-5678",
        email: "arissa@email.com",
        website: "arissa.com.br",
    },
    {
        id: 2,
        name: "Luna",
        phone: "1223-3344",
        email: "luna@email.com",
        website: "luna.com.br",
    },
    {
        id: 3,
        name: "João",
        phone: "9876-5432",
        email: "joao@email.com",
        website: "joao.com.br",
    },
    {
        id: 4,
        name: "Rebeca",
        phone: "4321-8765",
        email: "rebeca@email.com",
        website: "rebeca.com.br",
    },
    {
        id: 5,
        name: "Leticia",
        phone: "8765-1234",
        email: "leticia@email.com",
        website: "leticia.com.br",
    }
]

// Exercício 04 - criar endpoint que retorne os usuarios

app.get("/users", (req: Request, res: Response) => {          
    res.status(200).send(users)
})

// Exercício 05 - criar tipo de post

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

// Exercício 06 - criar array de posts

// Entendo que é melhor criar o array de posts fora do array de usuários para facilitar o acesso as suas propriedades.

let posts: Post[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 2,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 2,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 3,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 3,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "userId": 4,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "userId": 4,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "userId": 4,
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        "userId": 5,
        "id": 10,
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        "userId": 5,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        "userId": 5,
        "id": 12,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    }
]

// Exercício 07 criar endpoint que retorne os posts
app.get("/posts", (req: Request, res: Response) => {          
    res.status(200).send(posts)
})

// Exercício 08 - criar endpoint que retorne os posts de um usuário em particular
app.get("/posts/userId", (req: Request, res: Response) => {        
    const userId = Number(req.query.userId) 

    if(!userId) {
        res.status(400).send("Necessário inserir id do usuário!")
    }

    let filteredPosts: Post[] = []

    posts.map((post)=> {
        if (post.userId === userId) {
            filteredPosts.push(post)
        } 
    })
    res.status(200).send(filteredPosts)
})