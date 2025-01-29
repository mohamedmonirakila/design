import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Button(props) {
  return (
    <div>
      <motion.button
        type="submit"
        className="consBtn"
        style={{ color: "#000810" }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,198,49)",
        }}
      >
        {props.buttonText}
      </motion.button>
    </div>
  );
}
