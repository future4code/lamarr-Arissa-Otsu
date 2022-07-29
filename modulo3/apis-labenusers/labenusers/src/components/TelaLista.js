import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Estilização

const ListaUsuarios = styled.div `
    
    li {
        color:black;
        font-size: 3vh;
        line-height: 6vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border: 2px black solid;
        border-radius: 5px;
        margin-left: 40vw;
        margin-right: 40vw;
        padding-left: 4vw;
        padding-right: 4vw;
        margin-bottom: 2vh;
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

const ListarUsuarios = () => {

    const [lista, setLista] = useState([])

    const componenteLista = lista.map((usuario,index)=> {
        return (
            <div key={index}>
                <li> {usuario.name} <button onClick={()=> deleteUser(usuario.id)}> x </button> </li>
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

    // Listar usuários

    const getAllUsers = () => {
        axios.get(url,header)
        .then ((response)=> {
            setLista(response.data)
        })
    }

    // Deletar usuário

    const deleteUser = (id) => {
        axios.delete(url + "/" + id, header)
        .then ( () => {
            alert ("Usuário excluído com sucesso!")
            getAllUsers()
        })
        .catch(()=> {
            alert ("O usuário não pode ser excluído.")
        })
    }

    return (
        <ListaUsuarios>
            <h1> Lista de usuários </h1>
            <div>{componenteLista}</div>
        </ListaUsuarios>
    )
}


export default ListarUsuarios;