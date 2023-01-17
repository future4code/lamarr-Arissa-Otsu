export class User{
    constructor(public id: string, private email: string, private password: string){
        this.id = id
        this.email = email;
        this.password = password;
    }
}