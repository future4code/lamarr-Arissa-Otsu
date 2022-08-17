import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import * as MyRoutes from '../../components/Coordinator'
import useForm from "../../hook/useForm";
import { base_url } from '../../constants/constants'
import {Form} from "./style";

function ShowApplicationFormPage () {

    const navigate = useNavigate()
    const [form, onChange, clearInputs] = useForm({name:"", age:"", applicationText:"", profession:"", country:"", id:""})

    const sendTripRequest = (event) => {

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }

        event.preventDefault()

        axios.post(`${base_url}trips/:id/apply`, body)
        .then((response) => {
            console.log(response.data)
            alert("Inscrição realizada com sucesso!")
            clearInputs()
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado")
        })
    }

    return (
        <>
            <h1> Formulário de aplicação </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar</button>
            <button> Enviar </button>
            <Form onSubmit={sendTripRequest}>
                <input
                    id="name"
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    pattern="^.{3,}$" 
                    title="mínimo de 3 caracteres"
                    required
                />
                <input
                    id="age"
                    name="age"
                    placeholder="Idade"
                    value={form.age}
                    onChange={onChange}
                    type="number"
                    required
                />
                <input
                    name="applicationText"
                    placeholder="Texto"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text"
                    required
                />
                <input
                    name="profession"
                    placeholder="Profissão"
                    value={form.profession}
                    onChange={onChange}
                    type="text"
                    required
                />
                <input
                    name="country"
                    placeholder="País"
                    value={form.country}
                    onChange={onChange}
                    type="text"
                    required
                />
                <input
                    name="id"
                    placeholder="Viagem"
                    value={form.id}
                    onChange={onChange}
                    type="text"
                    required
                />

                <button> Enviar </button>
            </Form>
        </>
    )
}

export default ShowApplicationFormPage