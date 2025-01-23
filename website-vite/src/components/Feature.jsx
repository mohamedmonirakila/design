import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

export default function Feature() {
  return (
    <div>
      <div className="container" id="featured-3">
        <img src="/images/pseudo.png" alt="yellowline" />
        <h6>OUR SERVICES</h6>
        <h2 className="feature-top-h2">
          Multi-Disciplined
          <br />
          Engineering <span className="blue-h2">Solutions</span>
        </h2>
        <div className="row g-4 py-4 m-0 row-cols-1 row-cols-lg-3 feature-flex">
          <div className="feature col">
            <div>
              <h2 className="featureNum">01</h2>
            </div>
            <h3>Process Engineering</h3>
            <p className="feature-p">
              Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin
            </p>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/vector.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <div>
              <h2 className="featureNum">02</h2>
            </div>
            <h3>Construction Services</h3>
            <p className="feature-p">
              Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin
            </p>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/vector.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <div>
              <h2 className="featureNum">03</h2>
            </div>
            <h3>Civil Engineering</h3>
            <p className="feature-p">
              Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin
            </p>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/vector.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <div>
              <h2 className="featureNum">04</h2>
            </div>
            <h3>Electrical Engineering</h3>
            <p className="feature-p">
              Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin
            </p>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/vector.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <div>
              <h2 className="featureNum">05</h2>
            </div>
            <h3>Chemistry and Metallurgy</h3>
            <p className="feature-p">
              Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin
            </p>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/vector.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <div>
              <h2 className="featureNum">06</h2>
            </div>
            <h3>Specialty Services</h3>
            <p className="feature-p">
              Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin
            </p>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/vector.png" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
