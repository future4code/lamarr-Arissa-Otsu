import { UserBusiness } from "../../src/business/UserBusiness";
import { CustomError } from "../../src/errors/CustomError";
import { HashGeneratorMock } from "../mocks/HashGeneratorMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenGeneratorMock } from "../mocks/TokenGeneratorMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

const userBusiness = new UserBusiness (
    new UserDatabaseMock(),
    new HashGeneratorMock (),
    new IdGeneratorMock(),
    new TokenGeneratorMock()
)

describe("testing function getUserById", () => {
	
    test("Should catch error when id is not registered", async () => {
        expect.assertions(3)

        try {
        await userBusiness.getUserById("teste")
        } catch (error: any) {
        expect(error).toBeInstanceOf(CustomError)
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("User not found")
        }
    })
        

    test("Should return respective user when id is registered", async () => {
        expect.assertions(2)
        
        try {
            const getUserById = jest.fn(
                (id: string) => userBusiness.getUserById(id)
            )
            const result = await getUserById("id")

            expect(getUserById).toHaveBeenCalledWith("id")
            expect(result).toEqual({
                id: "id",
                name: "Luna",
                email: "email",
                role: "ADMIN",
            })
        } catch (error: any) {
                console.log(error.message)
        }
    })
})