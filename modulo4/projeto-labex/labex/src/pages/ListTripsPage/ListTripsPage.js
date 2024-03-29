import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../components/Coordinator'
import { base_url } from '../../constants/constants'
import useRequestData from "../../hook/useRequestData";
import Loading from 'react-loading'
import { CardContainer, List, Buttons, LoadingIcon, Header, Footer} from "./style";

function ShowListTripsPage () {

    function changeDate (date) {
        return date.split('-').reverse().join('/')
    }

    const [tripsList, isLoadingTripsList, errorTripsList] = useRequestData(`${base_url}trips`)

    const navigate = useNavigate()
    
    const renderTripsList = tripsList&&tripsList.trips.map((trip) => {
        const newDate = changeDate(trip.date)
        return <CardContainer key={trip.id}> 
        <p> <b>Nome: </b> {trip.name} </p> 
        <p> <b>Descrição: </b> {trip.description} </p>
        <p> <b>Planeta: </b> {trip.planet} </p>
        <p> <b>Duração: </b> {trip.durationInDays} dias </p>
        <p> <b>Data: </b> {newDate} </p>
        </CardContainer> 
    })
    
    return (
        <>
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> LabeX </h1>
            </Header>
            
            <List>
                <h2> Lista de Viagens </h2>
                
                <LoadingIcon>
                    {isLoadingTripsList && <Loading type={"spokes"} color={"orange"} height={'10%'} width={'10%'} />}
                </LoadingIcon>
                {!isLoadingTripsList && tripsList && renderTripsList}
                {!isLoadingTripsList && !tripsList && errorTripsList}

                <Buttons>
                    <button type='button' onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
                    <button type='button' onClick={() => MyRoutes.goToApplicationFormPage(navigate)}> Inscreva-se</button>
                </Buttons>
            </List>

            <Footer>
                <footer> Copyright © 2022 | Arissa Otsu | LabeX</footer>
            </Footer>
        </>
    )
}

export default ShowListTripsPage