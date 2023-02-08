### Exercício 01
a) Salt é uma string aleatória adicionada pelo bcrypt antes da criação do hash. O round é o custo númerico que está relacionado a segurança da senha. A recomendação é: utilizar o maior round que conseguir para os equipamentos utilizados rodarem no tempo desejado. Para esse projeto, será utilizado um round de 12, pois é o número padrão para a maioria das libs.

b) e c) 
```
import * as bcrypt from "bcryptjs"

export class HashManager {
    generateHash = async (plainText: string) : Promise<string> => {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(cost)
        const hash: string = await bcrypt.hash(plainText, salt)
        return hash
    }

    compareHash = async (plainText:string, hashText: string): Promise<boolean> => {
        const result = await bcrypt.compare(plainText, hashText)
        return result
    }
}
```

### Exercício 02
a) O cadastro, pois a senha criptografada será salva no banco de dados.

b)
```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
  
    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
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

c)
```
app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const compareResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id    
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

d) Não, pois não há manipulação de dados sensíveis (senhas) nesse endpoint.
