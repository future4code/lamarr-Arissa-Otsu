import React from 'react';
import styled from 'styled-components';

const UltimaEtapa = styled.div `
    text-align: center;

    h1 {
        margin-bottom: 5vh;
    }

    input {
        margin-bottom: 3vh;
        border-radius: 6px;
        text-align: center;
        height: 3vh;
    }

    select {
        margin-bottom: 3vh;
        border-radius: 6px;
        text-align: center;
        height: 4vh;
    }
`

function EtapaFinal() {
    return (
    <UltimaEtapa>
        <h1> Essas foram as perguntas de hoje. Obrigado pela sua participação!</h1>
        <h2> &#10084; </h2>
    </UltimaEtapa>
    )
}
export default EtapaFinal