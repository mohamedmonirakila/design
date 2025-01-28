import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  return (
    <div className="project">
      <div className="container" id="featured-3">
        <img
          className="yellow-line"
          src="/images/pseudo.png"
          alt="yellowline"
        />
        <h6>WHAT WE DO</h6>
        <h2 className="feature-top-h2">
          Our <span className="blue-h2">Projects</span>
        </h2>
        <div className="row g-4 py-4 m-0 row-cols-1 row-cols-lg-3 feature-flex">
          <div className="feature col">
            <img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
            />
            <h3>Project Title</h3>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
            />
            <h3>Project Title</h3>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
            />
            <h3>Project Title</h3>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
            />
            <h3>Project Title</h3>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
            />
            <h3>Project Title</h3>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </a>
          </div>
          <div className="feature col">
            <img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
            />
            <h3>Project Title</h3>
            <a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
