import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../components/Coordinator'

function ShowHomePage () {

    const navigate = useNavigate()

    return (
        <div>
            <h1> Página Inicial </h1>
            <button onClick={() => MyRoutes.goToLoginPage(navigate)}> Área Administrativa </button>
            <button onClick={() => MyRoutes.goToListTripsPage(navigate)}> Lista de Viagens </button>
        </div>
    )
}

export default ShowHomePage
