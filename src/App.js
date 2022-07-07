import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Foot from "./components/Foot";
import { GlobalStyle } from "./GlobalStyle";
import "swiper/css/bundle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proyectos" element={<Proyectos />} />
      </Routes>
      <Contact />
      <Map />
      <Foot />
      <GlobalStyle />
    </Router>
  );
}

export default App;
