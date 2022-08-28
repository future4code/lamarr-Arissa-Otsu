import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { base_url } from '../../constants/constants'
import * as MyRoutes from '../../components/Coordinator'
import useProtectedPage from "../../hook/useProtectedPage";
import {Header, TripDetails, CandidatesList, Candidate, ApprovedCandidatesList, Buttons, Footer, LoadingIcon} from './style'
import Loading from 'react-loading'

function ShowTripDetailsPage () {
    useProtectedPage()
    const navigate = useNavigate()
    const pathParam = useParams();
    const [tripDetails, setTripDetails] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect (() => {
        getTripDetails()
    }, [])

    const getTripDetails = () => {
        const token = localStorage.getItem("token")

        const header = {
            headers: {
                auth: token
            }
        }

        setIsLoading(true)
        axios.get(`${base_url}trip/${pathParam.id}`, header) 
        .then((response) => {
            console.log("Successo")
            console.log(response.data)
            setTripDetails(response.data)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado")
            setIsLoading(false)
            setError(error)
        })
    }

    

    const decideCandidate = (decision, candidadeId) => {
        const token = localStorage.getItem("token")

        const body = {
            approve: decision,
        }

        const header = {
            headers: {
                auth: token
            }
        }
        axios.put(`${base_url}trips/${pathParam.id}/candidates/${candidadeId}/decide`, body, header)
        .then((response) => {
            console.log(response.data)
            alert("Decisão registrada")
            getTripDetails()
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado")
        })
    }

    const candidatesList = tripDetails && tripDetails.trip.candidates.map ((candidate) => {
        return <Candidate key={candidate.id}>
            <span> <b> Nome: </b> {candidate.name} </span>
            <span> <b>Profissão:</b> {candidate.profession} </span>
            <span> <b>País:</b> {candidate.country} </span>
            <span> <b>Idade:</b> {candidate.age} </span>
            <span> <b>Motivo:</b> {candidate.applicationText} </span>
            <div>
                <button type="button" onClick={() => decideCandidate (false, candidate.id)}> Reprovar</button>
                <button type="button" onClick={() => decideCandidate (true, candidate.id)}> Aprovar </button>
            </div>
        </Candidate>
    })

    const approvedCandidatesList = tripDetails && tripDetails.trip.approved.map ((candidate) => {
        return <div key={candidate.id}>
            <span> {candidate.name} </span>
        </div>
    })

    function changeDate (date) {
        return date.split('-').reverse().join('/')
    }

    return (
        <>  
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> LabeX </h1>
            </Header>

            <Buttons>
                <button type='button' onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
                <button type='button' onClick={() => MyRoutes.goToHomePage(navigate)}> Voltar para Home </button>
            </Buttons>
            
            <TripDetails>
                <h2> Detalhes da viagem </h2>
                <LoadingIcon> {isLoading && <Loading type={"spokes"} color={"orange"} height={'10%'} width={'10%'} />}</LoadingIcon>
                
                {!isLoading && tripDetails &&
                <div>
                    {tripDetails && <p> <b>Nome:</b> {tripDetails.trip.name} </p>}
                    {tripDetails && <p> <b>Descrição:</b> {tripDetails.trip.description} </p>}
                    {tripDetails && <p> <b>Planeta:</b> {tripDetails.trip.planet} </p>}
                    {tripDetails && <p> <b>Duração:</b> {tripDetails.trip.durationInDays} </p>}
                    {tripDetails && <p> <b>Data:</b> {changeDate(tripDetails.trip.date)} </p>}
                </div>}
                {!isLoading && !tripDetails && error}
            </TripDetails>
            
            <CandidatesList>
                <h2> Candidatos para avaliação </h2>
                <LoadingIcon> {isLoading && <Loading type={"spokes"} color={"orange"} height={'10%'} width={'10%'} />} </LoadingIcon>
                {!isLoading && tripDetails &&
                <div>
                    {candidatesList && candidatesList.length === 0 ?  <p>Ainda não há candidatos para essa viagem</p> : (candidatesList)}
                </div>}
                {!isLoading && !tripDetails && error}
            </CandidatesList>

            <ApprovedCandidatesList>
                <h2> Candidatos aprovados</h2>
                <LoadingIcon>{isLoading && <Loading type={"spokes"} color={"orange"} height={'10%'} width={'10%'} />} </LoadingIcon>
                {!isLoading && tripDetails && 
                <div>
                    {approvedCandidatesList && approvedCandidatesList.length === 0 ? ("Nenhum candidato foi aprovado até o momento") : (approvedCandidatesList) }
                </div>}
                {!isLoading && !tripDetails && error}
            </ApprovedCandidatesList>

            <Footer>
                <footer> Copyright © 2022 | Arissa Otsu | LabeX</footer>
            </Footer>
        </>
    )
}

export default ShowTripDetailsPage