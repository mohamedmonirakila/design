import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";
import Feature from "./Feature";
import Projects from "./Porjects";
import About from "./About.JSX";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="content">
          <Hero />
        </div>
      </div>
      <Feature />
      <Projects />
      <About />
      <ContactUs />
    </div>
  );
}
