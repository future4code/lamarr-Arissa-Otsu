import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../components/Coordinator'

function ShowCreateTripPage () {

    const navigate = useNavigate()

    return (
        <>
            <h1> Criação de Viagem </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
            <button> Criar </button>
        </>
    )
}

export default ShowCreateTripPage