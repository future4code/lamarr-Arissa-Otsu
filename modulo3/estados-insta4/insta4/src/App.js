import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {

  const listaDePosts = [
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
  ]
  
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
    {arrayDePosts}
  </MainContainer>
)
}

export default App;
