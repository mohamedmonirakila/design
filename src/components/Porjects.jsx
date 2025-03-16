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
                    fontSize: '1.5rem',
                    fontWeight: 'bold',

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
                      style={{ height: 400}}
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
        style={{ padding: 0, marginBottom: "1.4rem", minHeight: 221, height: 307}}
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
      name: "Dar El Sakn",
      images: [
        "/images/project2/dar1.jpeg",
        "/images/project2/dar2.jpeg",
        "/images/project2/dar3.jpeg",
        "/images/project2/dar4.jpeg",
        "/images/project2/dar44.jpeg",
        "/images/project2/dar5.jpeg",
        "/images/project2/dar6.jpeg",
        "/images/project2/dar7.jpeg",
        "/images/project2/dar8.jpeg",
        "/images/project2/dar9.jpeg",
      ],
    },
    {
      id: 2,
      name: "Office",
      images: [
        "/images/project1/office1.jpeg",
        "/images/project1/office2.jpeg",
        "/images/project1/office3.jpeg",
        "/images/project1/office4.jpeg",
      ],
    },
    {
      id: 3,
      name: "Consulate",
      images: [
        "/images/project4/consulate1.jpeg",
        "/images/project4/consulate2.jpeg",
        "/images/project4/consulate3.jpeg",
        "/images/project4/consulate4.jpeg",
        "/images/project4/consulate5.jpeg",
        "/images/project4/consulate6.jpeg",
      ],
    },
    {
      id: 4,
      name: "Bedrooms",
      images: [
       "/images/project3/bed5.jpeg",
        "/images/project3/bed6.jpeg",
        "/images/project3/bed7.jpeg",
        "/images/project3/bed1.jpeg",
        "/images/project3/bed2.jpeg",
        "/images/project3/bed3.jpeg",
        "/images/project3/bed4.jpeg",
        "/images/project3/bed10.jpeg",
        "/images/project3/bed11.jpeg",
        "/images/project3/bed12.jpeg",
      ],
    },
    {
      id: 5,
      name: "Bathrooms",
      images: [
        "/images/project5/bath10.jpg",
        "/images/project5/bath11.jpg",
        "/images/project5/bath12.jpg",
        "/images/project5/bath1.jpeg",
        "/images/project5/bath2.jpeg",
        "/images/project5/bath3.jpeg",
        "/images/project5/bath5.jpeg",
        "/images/project5/bath6.jpeg",
        "/images/project5/bath7.jpeg",
      ],
    },
    {
      id: 6,
      name: "Living rooms",
      images: [
        "/images/project6/living1.jpg",
        "/images/project6/living2.jpg",
        "/images/project6/living3.jpg",
        "/images/project6/living4.jpg",
        "/images/project6/living5.jpeg",
        "/images/project6/living6.jpeg",
        "/images/project6/living7.jpeg",
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
