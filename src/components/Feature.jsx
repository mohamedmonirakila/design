import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const detailsHoverEffect = {
  scale: 1.1,
  filter: "drop-shadow(0px 0px 5px rgba(37, 170, 225, 0.8))",
};

// Animation for the entire page
const pageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

// Animation for each feature item
const featureVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Feature() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.01, once: false }}
      variants={pageVariants}
      className="container"
      id="featured-3"
    >
      <img className="yellow-line" src="/images/pseudo.png" alt="yellowline" />
      <h6>OUR SERVICES</h6>
      <h2 className="feature-top-h2">
        Multi-Disciplined
        <br />
        Engineering <span className="blue-h2">Solutions</span>
      </h2>

      <div className="row g-4 py-4 m-0 row-cols-1 row-cols-lg-3 feature-flex">
        {[
          { num: "01", title: "Construction Services" },
          { num: "02", title: "Civil Engineering" },
          { num: "03", title: "Architecture Design" },
          { num: "04", title: "Interior Design" },
          { num: "05", title: "Landscape Design" },
          { num: "06", title: "Commercial" },
        ].map((feature, index) => (
          <motion.div
            key={feature.num}
            className="feature col service"
            variants={featureVariants}
          >
            <div>
              <h2 className="featureNum">{feature.num}</h2>
            </div>
            <h3>{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
