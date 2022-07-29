import React, {useEffect, useState} from 'react'
import axios from 'axios'

const CadastrarUsuario = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const nameInput = (e) => {
        setName(e.target.value)
    }

    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const header = {
        headers: {
            Authorization: "arissa-otsu-lamarr"
        }
    }

    const body = {
        "name": name,
        "email": email
    }

    const createUser = (e) => {
        e.preventDefault()
        axios.post(url,body,header)
        .then (()=> {
            alert ("Usuário adicionado!")
            
        })
        .catch(()=> {
            alert("Não foi possível adicionar o novo usuário.")
        })
        setName("")
        setEmail("")
    }


    return (
        <>
            <input type='text' placeholder='Nome do Usuário' onChange={nameInput}></input>
            <input type='email' placeholder='E-mail' onChange={emailInput}></input>
            <button onClick={createUser}> Adicionar </button>
        </>
    )
}

export default CadastrarUsuario