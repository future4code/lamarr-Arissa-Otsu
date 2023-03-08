import { User } from "../model/User"

export interface UserRepository {
    createUser(user: User): Promise<void> 

    getUserByEmail(email: string): Promise<User | undefined> 

    getUserById(id: string): Promise<User | undefined> 

    getAllUsers(): Promise<User[]> 
}