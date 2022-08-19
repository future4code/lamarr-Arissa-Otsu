import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import { base_url } from '../../constants/constants'
import useProtectedPage from "../../hook/useProtectedPage";

function ShowTripDetailsPage () {
    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token")

        const header = {
            headers: {
                auth: token
            }
        }
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/arissa/trip/MNllruNrr9j7ODYXoyOw", header) //necessário colocar id
        .then((response) => {
            console.log(response.data)
            alert("Successo")
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado")
        })
    }, [])

    return (
        <>
            <h1> Página de detalhes da viagem </h1>
        </>
    )
}

export default ShowTripDetailsPage