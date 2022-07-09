
import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './components/Message/Message';
import {Content} from './style'

function App() {
  const [inputName, setInputName] = useState("")
  const [inputMessage, setInputMessage] = useState("")
  const [chat, setInputChat] = useState([ ])

  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {user:inputName, message:inputMessage}
    const newChat = [...chat, newMessage]
    setInputChat(newChat)
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
        <Content>
          <section className='main-content'>
            <div className='chat-content'>
              {chatArray}
            </div>
            <div className='send-bar'>
              <input className='user-input' placeholder = 'Usuário' value={inputName} onChange={e => setInputName(e.target.value)} />
              <input className='message-input' placeholder = 'Mensagem' value={inputMessage} onChange={e => setInputMessage(e.target.value)}/>
              <button onClick={sendMessage}>Enviar</button>
            </div>
          </section>
      </Content>
      
    </div>
  );
}

export default App;
