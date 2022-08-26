import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import * as MyRoutes from '../../components/Coordinator'
import useForm from "../../hook/useForm";
import { base_url } from '../../constants/constants'
import {Buttons, Header, LoginForm, Input} from './style'

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
            <Header>
                <img alt="Desenho de um astronauta sentado em uma lua" src="https://img.freepik.com/vetores-premium/astronauta-sentado-na-lua-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-976.jpg"></img>
                <h1> Labe X </h1>
            </Header>

            
            
            <LoginForm onSubmit={login}>
                <h2> Página de Login </h2>
                <Input>
                    <label htmlFor="email"> E-mail:</label>
                    <input
                        id="email"
                        name="email"
                        placeholder="Insira seu e-mail"
                        value={form.email}
                        onChange={onChange}
                        type="email"
                        required
                    />
                </Input>
                <Input>
                    <label htmlFor="password"> Senha:</label>
                    <input
                        id="password"
                        name="password"
                        placeholder="Insira sua senha"
                        value={form.password}
                        onChange={onChange}
                        type="password"
                        required
                    />
                </Input>
                
                <Buttons>
                    <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
                    <button onClick={() => MyRoutes.goToAdminHomePage(navigate)}> Login </button>
                </Buttons>
            </LoginForm>
        </>
    )
}

export default ShowLoginPage