import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import photo from './images/Arissa.PNG';
import logo from './images/logo.jpg';
import logo2 from './images/logo2.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './images/icone-email.png';
import endereco from './images/icone-endereco.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={photo}
          nome="Arissa Otsu" 
          descricao="Oi, eu sou a Arissa. Sou estudante do curso de Web Full Stack da Labenu, atuo como Analista de Processos em uma
          indústria do ramo de biotecnologia e também sou mãe da Luna, uma beagle bem travessa."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={email}
          texto="Email:"
          dados="arissaotsu@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={endereco}
          texto="Endereço:"
          dados="Rua Moranguinho, 123 - Paraguaçu Paulista - SP"
        />
      </div>
    
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logo}
          nome="Biorigin (ago/2019 - atual)" 
          descricao="Promovendo a melhoria contínua dos processos industriais através da análise estatística de dados." 
        />
        
        <CardGrande 
          imagem={logo2} 
          nome="AIChE (mai/2018 - jul/2019)" 
          descricao="Proporcionando aos alunos da graduação oportunidades de aquisição de novos conhecimentos a partir da promoção de
          palestras, visitas técnicas e projetos sociais." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
