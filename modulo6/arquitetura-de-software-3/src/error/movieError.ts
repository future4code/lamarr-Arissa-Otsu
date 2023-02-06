import { CustomError } from "./customError";

export class invalidData extends CustomError {
    constructor()  {
        super(400, "Dados inválidos. Necessário informar todos os parâmetros.")
    }
}