import React from 'react';
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
    <div className="App">
      <Content/>
      <Price/>
      <Menu/>
      <Questions/>
      <Reviews/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
