import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'
import styled from 'styled-components'
import './App.css';
import { useState } from 'react'

const Formulario = styled.div `
  text-align: center;

  button {
    margin-top: 3vh;
    border-radius: 6px;
    text-align: center;
    padding: 5px; 
  }

  button:hover {
    background-color: pink;
  }
`

function App() {
  
  const [etapa, setEtapa] = useState(1)

  function RenderizaEtapa () {
    switch(etapa) {
      case 1:
        return <Etapa1></Etapa1>
        break;
      case 2: 
        return <Etapa2></Etapa2>
        break;
      case 3:
        return <Etapa3></Etapa3>
        break;
      case 4:
        return <EtapaFinal></EtapaFinal>
        break;
      default:
        return "Não há mais perguntas."
    }
  }

  function IrParaProximaEtapa () {
    return (
        setEtapa(etapa + 1)
    )
  }


  return (
    <Formulario>
      <RenderizaEtapa/>
      {etapa<=3 ? <button onClick={IrParaProximaEtapa}>Próxima etapa</button> : ""}
    </Formulario>
  );
}

export default App;
