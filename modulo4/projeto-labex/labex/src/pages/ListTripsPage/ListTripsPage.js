import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../components/Coordinator'
import { base_url } from '../../constants/constants'
import useRequestData from "../../hook/useRequestData";
import Loading from 'react-loading'
import { CardContainer, List, Buttons, LoadingIcon } from "./style";

function ShowListTripsPage () {

    const [tripsList, isLoadingTripsList, errorTripsList] = useRequestData(`${base_url}trips`)
    const navigate = useNavigate()
    const renderTripsList = tripsList&&tripsList.trips.map((trip) => {
        return <CardContainer key={trip.id}> 
        <p> <b>Nome: </b> {trip.name} </p> 
        <p> <b>Descrição: </b> {trip.description} </p>
        <p> <b>Planeta: </b> {trip.planet} </p>
        <p> <b>Duração: </b> {trip.durationInDays} </p>
        <p> <b>Data: </b> {trip.date} </p>
        </CardContainer> 
    })
    
    return (
        <List>
            <h1> Lista de Viagens </h1>
            <Buttons>
                <button onClick={() => MyRoutes.goToApplicationFormPage(navigate)}> Inscreva-se</button>
                <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
            </Buttons>
            <LoadingIcon>
                {isLoadingTripsList && <Loading type={"spokes"} color={"orange"} height={'20%'} width={'20%'} />}
            </LoadingIcon>
            {!isLoadingTripsList && tripsList && renderTripsList}
            {!isLoadingTripsList && !tripsList && errorTripsList}
        </List>
    )
}

export default ShowListTripsPage