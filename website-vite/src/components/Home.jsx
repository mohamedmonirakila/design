import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Hero from "./Hero";


export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="content">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
}
