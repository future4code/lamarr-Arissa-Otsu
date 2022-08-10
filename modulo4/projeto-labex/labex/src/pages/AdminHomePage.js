import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../components/Coordinator'

function ShowAdminHomePage () {

    const navigate = useNavigate()

    return (
        <>
            <h1> Página da área administrativa </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
            <button onClick={() => MyRoutes.goToCreateTripPage(navigate)}> Criar Viagem </button>
            <button onClick={() => MyRoutes.goToLoginPage(navigate)}> Logout </button>
        </>
    )
}

export default ShowAdminHomePage