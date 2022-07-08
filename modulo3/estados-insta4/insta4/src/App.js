import React, { useState } from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.form `
  margin: 20px;
  border: 2px solid yellow;
  border-radius: 15px;
  padding: 20px;

  .FormatarSegundoLabel {
    margin-left: 10px;
  }
  
  .FormatarTerceiroLabel {
    margin-left: 10px;
  }

  .FormatarInput {
    width: 160px;
    border-radius: 5px;
    border: 1px solid gray;
    height: 20px;
    padding-left: 6px;
    margin-left: 5px;
  }

  .FormatarInput:hover {
    border: 1px solid purple;
  }

  .FormatarButton {
    margin-left: 15px;
    height:25px;
    border-radius: 5px;
    background-color: pink;
    border: white
  }

  .FormatarButton:hover {
    border: 1px solid purple;
  }
`

function App() {
  const [inputName, setInputName] = useState("")
  const [inputPhoto, setInputPhoto] = useState("")
  const [inputPost, setInputPost] = useState("")
  const [listaDePosts, setInputListaDePosts] = useState([
    {
      nomeUsuario: "paulinha", 
      fotoUsuario:"https://picsum.photos/id/1011/50/50", 
      fotoPost:"https://picsum.photos/200/150?random=1"
    },
    {
      nomeUsuario: "bruninho", 
      fotoUsuario:"https://picsum.photos/id/1025/50/50", 
      fotoPost:"https://picsum.photos/200/150?random=2"
    },
    {
      nomeUsuario: "luquinhas", 
      fotoUsuario:"https://picsum.photos/id/237/50/50", 
      fotoPost:"https://picsum.photos/200/150?random=3"
    }
  ])

  const adicionarPost = (e) => {
    e.preventDefault();
    const novoPost = {nomeUsuario: inputName , fotoUsuario: inputPhoto, fotoPost: inputPost}
    const novaLista = [novoPost,...listaDePosts]
    setInputListaDePosts(novaLista)
  }

  const arrayDePosts = listaDePosts.map((item, index)=>{
    return (
      <Post key={index}
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario} 
        fotoPost={item.fotoPost} 
      />
    )
  })
  
  console.log (arrayDePosts)

return(
  <MainContainer>
    <Formulario>
      <label className='FormatarLabel'> Nome do usuário:</label>
      <input className='FormatarInput' placeholder = 'Insira o nome do usuário' value={inputName} onChange={e => setInputName(e.target.value)} />
      <label className='FormatarSegundoLabel'> Foto do usuário:</label>
      <input className='FormatarInput' placeholder = 'Insira o link da foto' value={inputPhoto} onChange={e => setInputPhoto(e.target.value)}/>
      <label className='FormatarTerceiroLabel'> Foto do post:</label>
      <input className='FormatarInput' placeholder = 'Insira o link do post' value={inputPost} onChange={e => setInputPost(e.target.value)}/>
      <button className='FormatarButton' onClick={adicionarPost}>Adicionar</button>
    </Formulario>
    {arrayDePosts}
  </MainContainer>
)
}

export default App;
