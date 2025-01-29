import React from "react";
import { motion } from "framer-motion";

// Utility function to split the text and return an array of span elements
const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      style={{ display: "inline-block" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index * 0.1, // Adjust the typing speed by modifying the delay
        duration: 0.1, // Duration of the typing effect for each character
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

// Typing effect function with a className prop
const TypingEffect = ({ children, as: Component = "p", className = "" }) => {
  const text = children || "";
  const splitTextArray = splitText(text);

  return <Component className={className}>{splitTextArray}</Component>;
};

export default TypingEffect;
