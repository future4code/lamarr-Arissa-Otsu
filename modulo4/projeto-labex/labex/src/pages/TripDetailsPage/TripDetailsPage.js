import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { base_url } from '../../constants/constants'
import * as MyRoutes from '../../components/Coordinator'
import useProtectedPage from "../../hook/useProtectedPage";
import {Header} from './style'

function ShowTripDetailsPage () {
    useProtectedPage()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        const header = {
            headers: {
                auth: token
            }
        }
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/arissa/trip/MNllruNrr9j7ODYXoyOw", header) //necessário colocar id
        .then((response) => {
            console.log(response.data)
            console.log("Successo")
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado")
        })
    }, [])

    return (
        <>  
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> LabeX </h1>
            </Header>
            <h1> Página de detalhes da viagem </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
        </>
    )
}

export default ShowTripDetailsPage