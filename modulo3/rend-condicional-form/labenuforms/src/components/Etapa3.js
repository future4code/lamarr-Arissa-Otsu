import React from 'react';
import styled from 'styled-components';

const TerceiraEtapa = styled.div `
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

function Etapa3() {
    return (
    <TerceiraEtapa>
        <h1> Etapa 3 - Informações Gerais de Ensino </h1>
        <h2> 5. Por que você não terminou um curso de graduação? </h2> 
        <input placeholder='Digite o motivo'/>
        <h2> 6. Você fez algum curso complementar? </h2> 
        <select name="curso">
            <option value="curso-tecnico">Curso Técnico</option>
            <option value="curso-ingles">Curso de Inglês</option>
            <option value="nenhum-curso">Não fiz curso complementar</option>
        </select> 
    </TerceiraEtapa>
    )
}
export default Etapa3