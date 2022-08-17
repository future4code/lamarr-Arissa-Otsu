import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../../components/Coordinator'
import { base_url } from '../../constants/constants'
import useForm from "../../hook/useForm";

function ShowCreateTripPage () {

    const navigate = useNavigate()
    const [form, onChange, clearInputs] = useForm({name:"", planet:"", date:"", description:"", durationInDays:""})

    const createTrip = (event) => {

        const header = {
            headers:{
                
        }
    }

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
            }

        event.preventDefault()

        axios.post(`${base_url}trips`, header, body)
        .then((response) => {
            console.log(response.data)
            alert("Viagem criada.")
            clearInputs()
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado.")
        })
    }

    return (
        <>
            <h1> Criação de Viagem </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
            <button> Criar </button>
            <form onSubmit={createTrip}>
                <input
                    id="name"
                    name="name"
                    placeholder="Nome da viagem"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    pattern="^.{5,}$" 
                    title="mínimo de 5 caracteres"
                    required
                />
                <input
                    id="planet"
                    name="planet"
                    placeholder="Planeta"
                    value={form.planet}
                    onChange={onChange}
                    type="text"
                    required
                />
                <input
                    name="date"
                    placeholder="Data da viagem"
                    value={form.date}
                    onChange={onChange}
                    required
                />
                <input
                    name="description"
                    placeholder="Descrição da viagem"
                    value={form.description}
                    onChange={onChange}
                    required
                />
                <input
                    name="durationInDays"
                    placeholder="Duração da viagem"
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                />
                <button> Enviar </button>
            </form>
        </>
    )
}

export default ShowCreateTripPage