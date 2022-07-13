import React from 'react';
import styled from 'styled-components';

const SegundaEtapa = styled.div `
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

function Etapa2() {
    return (
    <SegundaEtapa>
        <h1> Etapa 2 - Informações do Ensino Superior </h1>
        <h2> 5. Qual é o seu curso de graduação? </h2> 
        <input placeholder='Digite o nome do curso'/>
        <h2> 6. Qual é o nome da faculdade? </h2> 
        <input placeholder='Digite o nome da faculdade'/>
    </SegundaEtapa>
    )
}
export default Etapa2