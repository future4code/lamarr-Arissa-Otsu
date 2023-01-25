import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {
    createUser = async (input:any) : Promise <void>=> {
        try{
            const {name, email, password} = input

            if(!name || !email || !password ){
                throw new Error("É necessário informar um nome, um e-mail e uma senha.");
            }

            if(email.indexOf("@") === -1){
                throw new Error("E-mail inválido.");
            }

            if(password.length < 6){
                throw new Error("A senha deve possuir, no mínimo, 6 caracteres.");
            }

            const users: user[] = await new UserDatabase().getAll()

            const id: string = (users.length + 1).toString()

            await new UserDatabase().createUser({id, name, email, password})
            
        } catch(error:any){
            throw new Error(error.message);
        }
    }

    getAll = async (): Promise <any> => {
        const users = await new UserDatabase().getAll()
        return users
    }

    deleteUser =async (input: any): Promise<void> => {
        try {
            const {id} = input

            if (!id) {
                throw new Error("É necessário informar o id.")
            }

            const users: user[] = await new UserDatabase().getAll()

            const findUser = users.find(user => {
                return user.id === id
            })

            if(findUser) {
                await new UserDatabase().deleteUser(id)
            } else {
                throw new Error("Usuário não encontrado.")
            }
            

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}