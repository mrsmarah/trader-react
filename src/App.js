import React from 'react';
import './App.css';
// import Admin from './components/adminPage/index';
import { Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Main from './components/main/main.js';




function App() {
  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default App;