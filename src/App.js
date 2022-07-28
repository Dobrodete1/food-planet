import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Price from './components/NewPrice/Price';
import Menu from './components/Menu/Menu';

function App() {
  return (<>
  <Header/>
    <div className="App">
      <Content/>
      <Price/>
      <Menu/>
    </div>
    </>
  );
}

export default App;
