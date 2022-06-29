import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/id/1011/50/50'}
            fotoPost={'https://picsum.photos/200/150?random=1'}
          />
          <Post
            nomeUsuario={'bruninho'}
            fotoUsuario={'https://picsum.photos/id/1025/50/50'}
            fotoPost={'https://picsum.photos/200/150?random=2'}
          />
          <Post
            nomeUsuario={'luquinhas'}
            fotoUsuario={'https://picsum.photos/id/237/50/50'}
            fotoPost={'https://picsum.photos/200/150?random=3'}
          />
  </div>
  
)

}


export default App;
