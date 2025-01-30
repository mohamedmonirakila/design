import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCarouselModal = ({ images, show, onClose, projectName }) => {
  return (
    <div
      className={`modal fade ${show ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      style={{ zIndex: 1150, backdropFilter: "blur(2px)" }}
    >
      <div
        className="modal-dialog modal-lg"
        style={{
          position: "relative",
          top: "15%",
          maxWidth: "75%",
        }}
      >
        <div
          className="modal-content"
          style={{ borderRadius: "5%", overflow: "hidden" }}
        >
          <div className="modal-body py-0 px-0">
            <div
              id="projectCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#projectCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Carousel Inner */}
              <div className="carousel-inner" style={{ position: "relative" }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  style={{
                    position: "absolute",
                    top: "2rem",
                    right: "2rem",
                  }}
                ></button>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Slide ${index + 1}`}
                    />
                    <div className="carousel-caption">
                      <h5>{projectName}</h5>
                      <p>
                        Slide {index + 1} of {images.length}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onShowModal }) => {
  return (
    <div className="feature col">
      <motion.img
        className="project-image"
        src={project.images[0]}
        alt={project.name}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        style={{ padding: 0, marginBottom: "1.4rem" }}
        onClick={(e) => {
          e.preventDefault();
          onShowModal(project.images, project.name);
        }}
      />
      <h3>{project.name}</h3>
      <motion.a
        href="#"
        className="icon-link"
        style={{ textDecoration: "none" }}
        whileHover={{
          scale: 1.1,
          filter: "drop-shadow(0px 0px 5px rgba(255, 198, 49, 0.8))",
        }}
        initial={{
          scale: 1,
          filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
        }}
        animate={{
          scale: 1,
          filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
        }}
        onClick={(e) => {
          e.preventDefault();
          onShowModal(project.images, project.name);
        }}
      >
        DETAILS
        <img src="/images/yellow-arrow.png" alt="arrow" />
      </motion.a>
    </div>
  );
};

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  const [selectedProjectName, setSelectedProjectName] = useState("");

  const projects = [
    {
      id: 1,
      name: "Project 1",
      images: [
        "/images/project-image.png",
        "/images/project-image2.png",
        "/images/project-image.png",
      ],
    },
    {
      id: 2,
      name: "Project 2",
      images: [
        "/images/project-image2.png",
        "/images/project-image.png",
        "/images/project-image2.png",
      ],
    },
    {
      id: 3,
      name: "Project 3",
      images: [
        "/images/project-image.png",
        "/images/project-image2.png",
        "/images/project-image.png",
      ],
    },
    {
      id: 4,
      name: "Project 4",
      images: [
        "/images/project-image2.png",
        "/images/project-image.png",
        "/images/project-image2.png",
      ],
    },
    {
      id: 5,
      name: "Project 5",
      images: [
        "/images/project-image.png",
        "/images/project-image2.png",
        "/images/project-image.png",
      ],
    },
    {
      id: 6,
      name: "Project 6",
      images: [
        "/images/project-image2.png",
        "/images/project-image.png",
        "/images/project-image2.png",
      ],
    },
  ];

  const handleShowModal = (images, name) => {
    setSelectedProjectImages(images);
    setSelectedProjectName(name);
    setShowModal(true);
  };

  return (
    <div className="project">
      <motion.div
        className="container"
        id="featured-3"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onShowModal={handleShowModal}
            />
          ))}
        </div>
      </motion.div>
      <ProjectCarouselModal
        images={selectedProjectImages}
        show={showModal}
        projectName={selectedProjectName}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
