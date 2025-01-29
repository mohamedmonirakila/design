import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import { motion } from "framer-motion";

import TypingEffect from "./TypingEffect"; // Import the TypingEffect component

const yellowlineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const pageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.01, once: false }}
      variants={pageVariants}
      className="container hero col-xxl-12"
    >
      <div className="flex-item heroes">
        <div className="overlay-drawing"></div>
        <div className="heroHead">
          <motion.img
            src="/images/pseudo.png"
            alt="yellowline"
            className="line"
            initial="hidden"
            whileInView="visible"
            variants={yellowlineVariants}
          />
          <TypingEffect as="p" className="headingParag">
            PROFESSIONAL. INNOVATIVE. RELIABLE.
          </TypingEffect>
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
        <img
          className="constructionImg"
          src="/images/hero.png"
          alt="constructionSite"
        />
        <img
          className="heroVector"
          src="/images/heroVector.png"
          alt="earth picture"
        />
        <img
          className="heroVector2"
          src="/images/heroVector2.png"
          alt="earth picture"
        />
      </div>
    </motion.div>
  );
}
