import { ITokenGenerator } from "../../src/business/ports";
import { USER_ROLES } from "../../src/model/User";
import { AuthenticationData } from "../../src/services/tokenGenerator";

export class TokenGeneratorMock implements ITokenGenerator {
    public generate = jest.fn (() => {
        return "token"
    }) 

    public verify = jest.fn (() => {
        return {id: "id", role: USER_ROLES.ADMIN}
    }) 
}