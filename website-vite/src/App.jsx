import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Projects from "./components/Porjects";
import Navbar from "./components/Navbar";
import About from "./components/About.JSX";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Feature />
      <Projects />
      <About />
      <ContactUs />
    </div>
  );
}

export default App;
