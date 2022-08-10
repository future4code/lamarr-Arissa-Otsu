import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../components/Coordinator'

function ShowListTripsPage () {

    const navigate = useNavigate()
    
    return (
        <>
            <h1> Lista de Viagens </h1>
            <button onClick={() => MyRoutes.goToApplicationFormPage(navigate)}> Inscreva-se</button>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
        </>
    )
}

export default ShowListTripsPage