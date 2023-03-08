import { UserRepository } from "../../src/business/UserRepository";
import { User } from "../../src/model/User";
import { userMock } from "./UserMock";

export class UserDatabaseMock implements UserRepository {
    public async createUser(user: User): Promise<void> {}

    public async getUserByEmail(email: string): Promise<User | undefined> {
        return email === "email" ? userMock : undefined
    }
    public async getUserById(id: string): Promise<User | undefined> {
        return id === "id" ? userMock : undefined
    }
    public async getAllUsers(): Promise<User[]> {
        return []
    }

}