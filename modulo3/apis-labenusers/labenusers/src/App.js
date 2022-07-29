import TelaLista from './components/TelaLista'
import TelaCadastro from  './components/TelaCadastro'
import { useState } from 'react';
import styled from 'styled-components';

const Tela = styled.div `
  text-align: center;
`
const Botao = styled.div `
  margin-top: 4vh;

  button {
    font-size: 2.5vh;
    border-radius: 5px;
  }

  button:hover {
    background-color: black;
    color: white;
  }
`

function App() {

  const [tela, setTela] = useState(1)

  function RenderizaTela () {
    switch(tela) {
      case 1:
        return <TelaCadastro></TelaCadastro>
      case 2: 
        return <TelaLista></TelaLista>
      default:
        return "Não há mais perguntas."
    }
  }

  function trocarDeTela () {
    if (tela===1) {
      return setTela(2)
    } else {
      return setTela(1)
    }
  }
  return (
    <Tela>
      <RenderizaTela/>
      <Botao>
        <button onClick={trocarDeTela}>Trocar de tela</button>
      </Botao>
    </Tela>
  );
}

export default App;
