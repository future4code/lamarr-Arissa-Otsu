import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  getAll = async(): Promise<any> => {
    try {
        const result = await UserDatabase.connection().select("*").from(UserDatabase.TABLE_NAME)
        return result
    } catch (error:any) {
        throw new Error(error.message)
    }
  }
}
