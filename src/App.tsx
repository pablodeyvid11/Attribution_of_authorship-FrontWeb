import React from 'react';
import './App.css';
import  Router  from './routes';
import Navbar from './Nav'
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router></Router>
      <Footer></Footer>
    </>
  );
}

export default App;