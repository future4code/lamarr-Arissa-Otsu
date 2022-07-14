import React from 'react';
import styled from 'styled-components';

const PrimeiraEtapa = styled.div `
    text-align: center;
    margin-top: 5vh;

    h1 {
        margin-bottom: 5vh;
    }

    input {
        margin-bottom: 3vh;
        border-radius: 6px;
        text-align: center;
        height: 3vh;
        width: 12vw;
    }

    select {
        margin-bottom: 3vh;
        border-radius: 6px;
        text-align: center;
        height: 4vh;
    }
`

function Etapa1() {
    return (
    <PrimeiraEtapa>
        <h1> Etapa 1 - Dados Gerais </h1>
        <h2> 1. Qual é o seu nome? </h2> 
        <input placeholder='Digite o seu nome'/>
        <h2> 2. Qual é a sua idade? </h2> 
        <input placeholder='Digite a sua idade'/>
        <h2> 3. Qual é o seu e-mail? </h2> 
        <input placeholder='Digite o seu e-mail'/>
        <h2> 4. Qual é a seu escolaridade? </h2> 
        <select name="escolaridade">
            <option value="emincompleto">Ensino Médio Incompleto</option>
            <option value="emcompleto">Ensino Médio Completo</option>
            <option value="esincompleto">Ensino Superior Incompleto</option>
            <option value="escompleto">Ensino Superior Completo</option>
        </select> 
    </PrimeiraEtapa>
    )
}
export default Etapa1