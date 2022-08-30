import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Cadastro = styled.div `
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    line-height: 6vh;   

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 35vw;
        margin-left: 31vw;
        margin-right: 31vw;
        margin-bottom: 2vh;
        font-size: 3vh;
    }

    input {
        width: 20vw;
        margin-left: 1vw;
        height: 3vh;
        border-radius: 5px;
    }

    button {
        font-size: 2.5vh;
        border-radius: 5px;
    }

    button:hover {
        background-color: black;
        color: white;
    }

`

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
    }


    return (
        <Cadastro>
            <h1> Criar novo usuário </h1>
            <div>
                <label> Nome: </label>
                <input type='text' placeholder='Insira o nome' onChange={nameInput}></input>
            </div>
            <div>
                <label> E-mail:  </label>
                <input type='email' placeholder=' Insira o e-mail' onChange={emailInput}></input>
            </div>
            <span>
                <button onClick={createUser}> Adicionar usuário </button>
            </span>
        </Cadastro>
    )
}

export default CadastrarUsuario