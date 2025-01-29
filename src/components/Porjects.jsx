import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const detailsHoverEffect = {
  scale: 1.1,
  filter: "drop-shadow(0px 0px 5px rgba(255, 198, 49, 0.8))",
};

const imageHoverEffect = {
  scale: 1.1,
  boxShadow: "0px 0px 8px rgb(255,255,255)",
};

const pageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

export default function Projects() {
  return (
    <div className="project">
      <motion.div
        className="container"
        id="featured-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.01, once: false }}
        variants={pageVariants}
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
          <div className="feature col">
            <motion.img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
              whileHover={detailsHoverEffect}
              initial={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              animate={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              style={{ padding: 0, marginBottom: "1.4rem" }}
            />
            <h3>Project Title</h3>
            <motion.a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
              whileHover={detailsHoverEffect}
              initial={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              animate={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </motion.a>
          </div>
          <div className="feature col">
            <motion.img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
              whileHover={imageHoverEffect}
              style={{ padding: 0, marginBottom: "1.4rem" }}
            />
            <h3>Project Title</h3>
            <motion.a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
              whileHover={detailsHoverEffect}
              initial={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              animate={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </motion.a>
          </div>
          <div className="feature col">
            <motion.img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
              whileHover={imageHoverEffect}
              style={{ padding: 0, marginBottom: "1.4rem" }}
            />
            <h3>Project Title</h3>
            <motion.a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
              whileHover={detailsHoverEffect}
              initial={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              animate={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </motion.a>
          </div>
          <div className="feature col">
            <motion.img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
              whileHover={imageHoverEffect}
              style={{ padding: 0, marginBottom: "1.4rem" }}
            />
            <h3>Project Title</h3>
            <motion.a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
              whileHover={detailsHoverEffect}
              initial={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              animate={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </motion.a>
          </div>
          <div className="feature col">
            <motion.img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
              whileHover={imageHoverEffect}
              style={{ padding: 0, marginBottom: "1.4rem" }}
            />
            <h3>Project Title</h3>
            <motion.a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
              whileHover={detailsHoverEffect}
              initial={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              animate={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </motion.a>
          </div>
          <div className="feature col">
            <motion.img
              className="project-image"
              src="/images/project-image.png"
              alt="project"
              whileHover={imageHoverEffect}
              style={{ padding: 0, marginBottom: "1.4rem" }}
            />
            <h3>Project Title</h3>
            <motion.a
              href="#"
              className="icon-link"
              style={{ textDecoration: "none" }}
              whileHover={detailsHoverEffect}
              initial={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
              animate={{
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(37, 170, 225, 0))",
              }}
            >
              DETAILS
              <img src="/images/yellow-arrow.png" alt="arrow" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
