import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      <Skills />
      <Portfolio />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
