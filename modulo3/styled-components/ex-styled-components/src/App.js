import React from 'react'
import logo from './images/logo.png'
import {Footer} from './style'
import {Header} from './style'
import {Content} from './style'

function App() {
  return (
    <div>
      <Header>
        <img src={logo} alt='logo da Labenu'/>
        <h1> LabZap </h1>
      </Header>

      <Content>
        <section className='sidebar'/>

        <section className='main-content'>
        <label for="remetente">Remetente:</label>
        <input type="text" id="remetente" name="remetente"/> 

        <label className='message-label' for="mensagem">Mensagem:</label>
        <input className='message-input' type="text" id="mensagem" name="mensagem"/> 

        <button> Enviar </button>
        </section>

        <section className='sidebar'/>
      </Content>

      <Footer>
        <p>Copyright © 2022 Labenu All rights reserved R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</p>
      </Footer>
    </div>
  );
}

export default App;
