import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import * as MyRoutes from '../../components/Coordinator'
import useForm from "../../hook/useForm";
import { base_url } from '../../constants/constants'

function ShowLoginPage () {

    const navigate = useNavigate()
    const [form, onChange, clearInputs] = useForm ({email:"", password:""})

    const login = (event) => {
        event.preventDefault()

        const body ={
            email:form.email,
            password:form.password
        }
        
        axios.post(`${base_url}login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            console.log("Login feito com sucesso")
            navigate("/admin/trips/list")
            clearInputs()
        })
        .catch((error) =>{
            console.log(error.message)
            alert("Usuário ou senha não encontrados.")
        })
        
    }

    return (
        <>
            <h1> Página de Login </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
            <button onClick={() => MyRoutes.goToAdminHomePage(navigate)}> Login </button>
            <form onSubmit={login}>
                <label htmlFor="email"> E-mail:</label>
                <input
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                />
                <label htmlFor="password"> Senha:</label>
                <input
                    id="password"
                    name="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    required
                />
                <button> Enviar </button>
            </form>
        </>
    )
}

export default ShowLoginPage