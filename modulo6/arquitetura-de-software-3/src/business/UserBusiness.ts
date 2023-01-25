import { UserDatabase } from "../data/UserDatabase"
import { invalidData, invalidEmail, invalidPassword } from "../error/userError"
import { User } from "../model/User"
import { UserInputDTO, InsertUserInputDTO } from "../model/userDto"
import { generateId } from "../services/idGenerator"

export class UserBusiness {
  async create({ email, name, password }: UserInputDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new invalidData()
    }

    if(!email.includes("@")){
      throw new invalidEmail()
    }

    if(password.length < 6){
      throw new invalidPassword()
    }

    const id = generateId()

    const user: InsertUserInputDTO = {
      id,
      name,
      email,
      password
    }

    const userDatabase = new UserDatabase()
    await userDatabase.create(user)
  }

  getAll = async (): Promise <User[]> => {
    const users = await new UserDatabase().getAll()
    return users
  }
}
