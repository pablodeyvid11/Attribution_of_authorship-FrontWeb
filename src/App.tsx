import React from 'react';
import './App.css';
import Navbar from './Nav'
import Footer from './Footer';
import Startpage from './Starpage';
import Sobre from './Sobre';
import Comece from './Comece';
import Atribuicao from './Atribuicao';
import Treino from './Treino';


function App() {
  return (
    <>

     <Navbar></Navbar>
      <Treino></Treino>
     <Footer></Footer>

    </>
  );
}

export default App;