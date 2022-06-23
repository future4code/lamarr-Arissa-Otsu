import photo from './imagens/Arissa1.jpg';
import './App.css';

function App() {
  function alertmessage() {
    alert ("Tenha uma boa noite! Até mais!")
  }
  return (
    <div className="App">
      <h1 className="titulo">Olá! Eu sou a <i><u>Arissa</u></i>!</h1>
      <img className="imagem" src={photo} alt="Foto de perfil" /> 
      <p className="paragrafo">Esse site foi feito a partir do meu primeiro contato com o React.</p>
      <button className="botao"onClick={alertmessage}>Clique aqui!</button>
    </div>
  );
}

export default App;
