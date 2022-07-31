import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Price from './components/NewPrice/Price';
import Menu from './components/Menu/Menu';
import Questions from './components/Questions/Questions';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (<>
  <Header/>
  <Routes className="App">
    <Route path="/" element={<Content />} />
    <Route path="/price" element={<Price />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/questions" element={<Questions/>} />
    <Route path="/reviews" element={<Reviews />} />
  </Routes>
    {/* <div >
      <Content/>
      <Price/>
      <Menu/>
      <Questions/>
      <Reviews/>
    </div> */}
    <Footer/>
    </>
  );
}

export default App;
