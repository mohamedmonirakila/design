import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Projects from "./components/Porjects";

function App() {
  return (
    <div>
      <Home />
      <Feature />
      <Projects />
    </div>
  );
}

export default App;
