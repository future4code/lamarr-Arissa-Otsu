import React from 'react';
import styled from 'styled-components';

const UltimaEtapa = styled.div `
    text-align: center;

    h1 {
        margin-top: 35vh;
        line-height: 10vh;
    }

    h2 {
        margin-bottom: 5vh;
    }
`

function EtapaFinal() {
    return (
    <UltimaEtapa>
        <h1> Obrigado pela sua participação!</h1>
        <h2>Entraremos em contato em breve.</h2>
        <h3> &#10084; </h3>
    </UltimaEtapa>
    )
}
export default EtapaFinal