import React from "react";
import { Route,BrowserRouter } from "react-router-dom";
import Navbar from './Nav'
import Footer from './Footer';
import Startpage from './Starpage';
import Comece from './Comece';
import Atribuicao from './Atribuicao';
import Treino from './Treino';

function Rote() {
    return (
      <>
        <BrowserRouter>
            <Route component={Startpage} path="/" exact={true}></Route>
            <Route component={Comece} path="/comece"></Route>
            <Route component={Atribuicao} path="/atribuicao"></Route>
            <Route component={Treino} path="/treino"></Route>
        </BrowserRouter>
  
      </>
    );
  }
  
  export default Rote;