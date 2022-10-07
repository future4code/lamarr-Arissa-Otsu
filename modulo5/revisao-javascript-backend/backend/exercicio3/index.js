
let checkLoginParameters = (email, password) => {
    if (typeof email === "string" && typeof password === "string") {
        if (email.includes ("@") && password.length > 5) {
            console.log ("Login feito com sucesso")
        } else if (!email.includes("@") && password.length > 5) {
            console.log ("E-mail inválido")
        } else if (password.length < 6 && email.includes("@")) {
            console.log ("A senha deve conter no mínimo 6 caracteres")
        } else {
            console.log ("E-mail e senha inválidos.")
        }
    } else {
        console.log ("Os parâmetros devem ser do tipo string") 
    }
}

checkLoginParameters ("arissa@email.com", "123456")