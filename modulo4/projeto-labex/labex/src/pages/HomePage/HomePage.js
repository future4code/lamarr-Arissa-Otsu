import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../../components/Coordinator'
import {Header, Buttons, HomeContainer} from './style'

function ShowHomePage () {

    const navigate = useNavigate()

    return (
        <>
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> LabeX </h1>
            </Header>
            <HomeContainer>
                <Buttons>
                    <button onClick={() => MyRoutes.goToLoginPage(navigate)}> Área Administrativa </button>
                    <button onClick={() => MyRoutes.goToListTripsPage(navigate)}> Lista de Viagens </button>
                </Buttons>
            </HomeContainer>
        </>
    )
}

export default ShowHomePage
