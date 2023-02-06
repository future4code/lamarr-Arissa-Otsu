### Exercício 01
a) Sim, é melhor utilizar strings, pois possibilita a utilização do uuid e, consequentemente, a criação de id's únicos.

b) Na pasta /services:
```
import { v4 } from "uuid"

export class IdGenerator {
    public generateId = () => {
        return v4()
    }
}
``` 

### Exercício 02
a) A linha "as string" transforma o valor recebido em string. Essa linha é necessária, pois é o formato aceito pelo jwt.

b)
```
import * as jwt from "jsonwebtoken";

  const expiresIn = "1min";
  const generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }
}

type AuthenticationData = {
  id: string;
}
```

### Exercício 03
```
app.post("/user/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || !req.body.email.includes("@")) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();
    
    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 04
```
const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}
```

### Exercício 05
```
app.post("/user/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || !req.body.email.includes("@")) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }
    
    const token = generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 06
```
import * as jwt from "jsonwebtoken";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

### Exercício 07
a)
```
 public async getUserById(id: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }
}
```
b)
```
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    
    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
