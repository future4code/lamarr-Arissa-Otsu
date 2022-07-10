
import React, { useState } from 'react';
import Message from './components/Message/Message';
import logo from './images/logo.png'
import {Content} from './style'
import {Footer} from './style'
import {Header} from './style'

function App() {
  const [inputName, setInputName] = useState("")
  const [inputMessage, setInputMessage] = useState("")
  const [chat, setInputChat] = useState([ ])

  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {user:inputName, message:inputMessage}
    const newChat = [...chat, newMessage]
    setInputChat(newChat)
    setInputName("")
    setInputMessage("")
  }

  const chatArray = chat.map((element, index)=>{
    return (
      <Message key={index}
        user={element.user}
        message={element.message}
      />
    )
  })
  
  return (
    <div>
      <Header>
        <img src={logo} alt='logo da Labenu'/>
        <h1> WhatsLab </h1>
      </Header>
      <Content>
        <section className='sidebar'/>
        <section className='main-content'>
          <div className='chat-content'>
            {chatArray}
          </div>
          <div className='send-bar'>
            <label> Usuário: </label>
            <input className='user-input' placeholder = 'Usuário' value={inputName} onChange={e => setInputName(e.target.value)}  />
            <label> Mensagem: </label>
            <input className='message-input' placeholder = 'Mensagem' value={inputMessage} onChange={e => setInputMessage(e.target.value)}/>
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </section>
        <section className='sidebar'/>
      </Content>
      <Footer>
        <p> Copyright © 2022 Arissa Otsu </p>
      </Footer>
    </div>
  );
}

export default App;
