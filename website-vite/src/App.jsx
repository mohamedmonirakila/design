import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Projects from "./components/Porjects";
import Navbar from "./components/Navbar";
import About from "./components/About.JSX";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Feature />
      <Projects />
      <About />
    </div>
  );
}

export default App;
