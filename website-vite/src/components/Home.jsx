import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="content">
          <Hero />
        </div>
      </div>
    </div>
  );
}
