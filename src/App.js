import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Menu from './components/Menu/Menu';
import Delivery from "./page/Delivery/Delivery";
import Contacts from './page/Contacts/Contacts';
import Pizza from "./page/Menu/Pizza";
import Burger from "./page/Menu/Burder";
import Sushi from "./page/Menu/Sushi";
import Rolls from "./page/Menu/Rolls";
import Salads from "./page/Menu/Salad";
import Desert from "./page/Menu/Desert";
import Drinks from "./page/Menu/Drinks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path='/menu' element={<Menu />} >
            <Route path='/pizza' element={<Pizza />} />
            <Route path='/burger' element={<Burger />} />
            <Route path='/sushi' element={<Sushi />} />
            <Route path='/rolls' element={<Rolls />} />
            <Route path='/salads' element={<Salads />} />
            <Route path='/deserts' element={<Desert />} />
            <Route path='/drinks' element={<Drinks />} />
          </Route>
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
