import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Menu from './components/Menu/Menu';
import { Delivery } from "./page/Delivery/Delivery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/delivery' element={<Delivery/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
