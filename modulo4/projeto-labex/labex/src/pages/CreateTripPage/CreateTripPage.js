import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios"
import * as MyRoutes from '../../components/Coordinator'
import { base_url } from '../../constants/constants'
import useForm from "../../hook/useForm";
import useProtectedPage from "../../hook/useProtectedPage";
import {Buttons, Form, Header} from './style'

function ShowCreateTripPage () {

    useProtectedPage()
    const navigate = useNavigate()
    const [form, onChange, clearInputs] = useForm({name:"", planet:"", date:"", description:"", durationInDays:""})

    const createTrip = (event) => {

        const token = localStorage.getItem("token")

        const header = {
            headers:{
                auth: token
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

        axios.post(`${base_url}trips`, body, header)
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
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> Labe  </h1>
            </Header>
            
            
            <Form onSubmit={createTrip}>
                <h2> Criação de Viagem </h2>
                <label htmlFor="name"> Nome: </label>
                <input //MÍNIMO DE 5 LETRAS????
                    id="name"
                    name="name"
                    placeholder="Nome da viagem"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    minLength={5}
                    required
                />
                <label htmlFor="planet"> Planeta: </label>
                <select id="planet" name="planet" value={form.planet} onChange={onChange} required>
                    <option value="" label="Selecione um planeta ">Selecione um planeta</option>
                    <option value="Mercúrio"> Mercúrio </option>
                    <option value="Vênus"> Vênus </option>
                    <option value="Terra"> Terra </option>
                    <option value="Marte"> Marte </option>
                    <option value="Júpiter"> Júpiter </option>
                    <option value="Saturno"> Saturno </option>
                    <option value="Urano"> Urano </option>
                    <option value="Netuno"> Netuno </option>
                </select>
                <label htmlFor="date"> Data:</label>
                <input
                    id="date"
                    name="date"
                    placeholder="Data da viagem"
                    value={form.date}
                    onChange={onChange}
                    type="date"
                    min="2022-08-15" //NECESSÁRIO CORRIGIR!!!
                    required
                />
                <label htmlFor="description"> Descrição </label>
                <input //MÍNIMO DE 30 LETRAS????
                    id="description"
                    name="description"
                    placeholder="Descrição da viagem"
                    value={form.description}
                    onChange={onChange}
                    type="text"
                    minLength={30}
                    required
                />
                <label name="durationInDays"> Duração: </label>
                <input
                    name="durationInDays"
                    placeholder="Duração da viagem"
                    value={form.durationInDays}
                    onChange={onChange}
                    type="number"
                    min="50"
                    required
                />
                <Buttons>
                    <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
                    <button> Criar </button>
                </Buttons>
            </Form>
        </>
    )
}

export default ShowCreateTripPage