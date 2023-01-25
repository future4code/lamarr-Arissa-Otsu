import { CustomError } from "./customError";

export class invalidEmail extends CustomError {
    constructor()  {
        super(400, "E-mail inválido.")
    }
}

export class invalidPassword extends CustomError {
    constructor()  {
        super(400, "A senha deve possuir, no mínimo, 6 caracteres.")
    }
}

export class invalidData extends CustomError {
    constructor()  {
        super(400, "Dados inválidos. Necessário informar o email, name e password.")
    }
}