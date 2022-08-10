import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../components/Coordinator'

function ShowLoginPage () {

    const navigate = useNavigate()


    return (
        <>
            <h1> Página de Login </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
            <button onClick={() => MyRoutes.goToAdminHomePage(navigate)}> Login </button>
        </>
    )
}

export default ShowLoginPage