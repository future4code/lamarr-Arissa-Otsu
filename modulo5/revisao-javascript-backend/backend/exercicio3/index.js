
let checkLoginParameters = (email, password) => {
    if (typeof email === "string" && typeof password === "string") {
        if (email.includes ("@")) {
            console.log ("Login feito com sucesso")
            console.log (password.length)
        }
    } else {
        
    }
}

checkLoginParameters ("arissa@email.com", "12346")