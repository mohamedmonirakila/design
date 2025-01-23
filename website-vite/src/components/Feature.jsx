import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

export default function Feature() {
  return (
    <div>
      <div className="container px-2.5 py-5" id="featured-3">
        <img src="/images/pseudo.png" alt="yellowline" />
        <h6>OUR SERVICES</h6>
        <h2 className="pb-2">
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
      <div className="first">
        <div className="container px-4 pt-5" id="hanging-icons">
          <img src="/images/pseudo.png" alt="yellowline" className="line" />
          <h6 style={{ color: "white" }}>WHAT WE DO</h6>
          <h2 className="pb-2" style={{ color: "white" }}>
            Our <span className="blue-h2">Services</span>
          </h2>
          <div className="row g-4 pt-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start features-2col">
              <div>
                <img
                  src="/images/feature.jfif"
                  alt="features"
                  style={{ maxWidth: "365px", objectFit: "cover" }}
                />
                <div className="featuresWWD">
                  <h3 className="features-h3">Language Courses</h3>
                  <a
                    href="#"
                    className="details-2 icon-link"
                    style={{ textDecoration: "none" }}
                  >
                    DETAILS
                    <img src="/images/Vector1.png" alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-start features-2col">
              <div>
                <img
                  src="/images/feature.jfif"
                  alt="features"
                  style={{ maxWidth: "365px", objectFit: "cover" }}
                />
                <div className="featuresWWD">
                  <h3 className="features-h3">Administrative Courses</h3>
                  <a
                    href="#"
                    className="details-2 icon-link"
                    style={{ textDecoration: "none" }}
                  >
                    DETAILS
                    <img src="/images/Vector1.png" alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-start features-2col">
              <div>
                <img
                  src="/images/feature.jfif"
                  alt="features"
                  style={{ maxWidth: "365px", objectFit: "cover" }}
                />
                <div className="featuresWWD">
                  <h3 className="features-h3">Scholarships Courses</h3>
                  <a
                    href="#"
                    className="details-2 icon-link"
                    style={{ textDecoration: "none" }}
                  >
                    DETAILS
                    <img src="/images/Vector1.png" alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
