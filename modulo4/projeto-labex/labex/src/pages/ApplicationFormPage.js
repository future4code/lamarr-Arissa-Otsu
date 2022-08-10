import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../components/Coordinator'

function ShowApplicationFormPage () {

    const navigate = useNavigate()

    return (
        <>
            <h1> Formulário de aplicação </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
            <button> Enviar </button>
        </>
    )
}

export default ShowApplicationFormPage