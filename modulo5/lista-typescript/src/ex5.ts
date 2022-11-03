type Usuario = {
    name: string,
    email: string,
    role: string
}

let arrayDeUsuariosAdmin:string[] = []

function retornarUsuariosAdmin (arrayDeUsuarios: Usuario[]): string[] {
    arrayDeUsuarios.map ((usuario) => {
        if (usuario.role === "admin") {
            return arrayDeUsuariosAdmin.push(usuario.email)
        }
    })
    return arrayDeUsuariosAdmin
}

let arrayExemplo = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

console.log(retornarUsuariosAdmin(arrayExemplo))