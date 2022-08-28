import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../components/Coordinator'
import {Header, Buttons, HomeContainer, Footer} from './style'

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
                    <button type='button' onClick={() => MyRoutes.goToLoginPage(navigate)}> Área Administrativa </button>
                    <button type='button' onClick={() => MyRoutes.goToListTripsPage(navigate)}> Lista de Viagens </button>
                </Buttons>
            </HomeContainer>

            <Footer>
                <footer> Copyright © 2022 | Arissa Otsu | LabeX</footer>
            </Footer>
        </>
    )
}

export default ShowHomePage
