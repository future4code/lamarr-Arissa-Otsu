import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ListarUsuarios = () => {

    const [lista, setLista] = useState([])

    const componenteLista = lista.map((usuario,index)=> {
        return (
            <div key={index}>
                <div> {usuario.name} <button onClick={()=> deleteUser(usuario.id)}> x </button> </div>
            </div>
        )
    })

    useEffect(()=> {
        getAllUsers()
    }, []
    )  

    // Axios

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const header = {
        headers: {
            Authorization: "arissa-otsu-lamarr"
        }
    }

    // Get lista de usuários

    const getAllUsers= () => {
        axios.get(url,header)
        .then ((response)=> {
            setLista(response.data)
        })
    }

    // Deletar usuário

    const deleteUser = (id) => {
        axios.delete(url + "/" + id, header)
        .then ( () => {
            alert ("Usuário excluído.")
            getAllUsers()
        })
        .catch(()=> {
            alert ("O usuário não pode ser excluído.")
        })
    }

    // Criar usuário
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const nameInput = (e) => {
        setName(e.target.value)
    }

    const emailInput = (e) => {
        setEmail(e.target.value)
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
            getAllUsers()
            
        })
        .catch(()=> {
            alert("Não foi possível adicionar o novo usuário.")
        })
    }

    return (
        <>
            <button> Trocar de tela </button>
            <input type='text' placeholder='Nome do Usuário' onChange={nameInput}></input>
            <input type='email' placeholder='E-mail' onChange={emailInput}></input>
            <button onClick={createUser}> Adicionar </button>
            <h1> Lista de usuários </h1>
            {componenteLista}
            <h2> Procurar usuário</h2>
            <input type='text' placeholder='Digitar nome'></input>
            <button > Salvar </button>
        </>
    )
    }



export default ListarUsuarios;