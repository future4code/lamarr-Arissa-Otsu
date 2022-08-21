import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../components/Coordinator'
import useProtectedPage from "../../hook/useProtectedPage";
import {Header} from './style'

function ShowAdminHomePage () {
    useProtectedPage()
    
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <>
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> LabeX </h1>
            </Header>
            <div>
                <h1> Página da área administrativa </h1>
                <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
                <button onClick={() => MyRoutes.goToCreateTripPage(navigate)}> Criar Viagem </button>
                <button onClick={() => logout()}> Logout </button>
            </div>
        </>
    )
}

export default ShowAdminHomePage