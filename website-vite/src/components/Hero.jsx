import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="container hero col-xxl-12">
      <div className="overlay-drawing"></div>
      <div className="flex-item heroes">
        <div className="heroHead">
          <img src="/images/pseudo.png" alt="yellowline" className="line" />
          <p className="headingParag">PROFESSIONAL. INNOVATIVE. RELIABLE.</p>
        </div>
        <div>
          <h1>Exceptional Service Exceeding Expectations</h1>
          <p className="description">
            Our civil and structural team is committed to providing sustainable,
            creative & efficient engineering solutions for our communities
          </p>
          <Button buttonText="CONSULT NOW" />
        </div>
      </div>
      <div className="flex-item heroImg">
        <img src="/images/hero.png" alt="earth picture" />
      </div>
    </div>
  );
}
