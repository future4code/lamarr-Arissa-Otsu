import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../components/Coordinator'
import useProtectedPage from "../../hook/useProtectedPage";
import {AdminHomeContainer, Buttons, Header, ListItem, LoadingIcon} from './style'
import { base_url } from '../../constants/constants'
import useRequestData from "../../hook/useRequestData";
import Loading from 'react-loading'

function ShowAdminHomePage () {

    useProtectedPage()

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const [tripsList, isLoadingTripsList, errorTripsList, getTrips] = useRequestData(`${base_url}trips`)

    const deleteTrip = (id, name) => {

        const token = localStorage.getItem("token")

        const header = {
            headers:{
                auth: token
            }
        }
        
        if (window.confirm(`Você tem certeza que quer deletar a viagem ${name}?`)) {
            axios.delete(`${base_url}trips/${id}`, header) 
            .then((response) => {
                console.log(response.data)
                alert(`Viagem ${name} deletada`)
                getTrips()
            })
            .catch((error) => {
                console.log(error.message)
                alert("Algo deu errado")
            })
        }
    }

    const renderAllTrips = tripsList&&tripsList.trips.map((trip) => {
        return <ListItem key={trip.id} onClick={() => MyRoutes.goToTripDetailsPage(navigate, trip.id)}>
                <span>  {trip.name} </span>
                <button  onClick={() => deleteTrip(trip.id, trip.name)}> X </button>
            </ListItem>
    })


    return (
        <>
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> LabeX </h1>
            </Header>
            <AdminHomeContainer>
                <h2> Painel Administrativo </h2>
                <Buttons>
                    <button onClick={() => MyRoutes.goToCreateTripPage(navigate)}> Criar Viagem </button>
                    <button onClick={() => logout()}> Logout </button>
                    <button onClick={() => MyRoutes.goToHomePage(navigate)}> Voltar para Home </button>
                </Buttons>
            </AdminHomeContainer>
            <LoadingIcon>
                {isLoadingTripsList && <Loading type={"spokes"} color={"orange"} height={'10%'} width={'10%'} />}
            </LoadingIcon>
            {!isLoadingTripsList && tripsList && renderAllTrips}
            {!isLoadingTripsList && !tripsList && errorTripsList}
            
        </>
    )
}

export default ShowAdminHomePage