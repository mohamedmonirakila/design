import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Button(props) {
  return (
    <div>
      <button type="submit" className="consBtn">
        {props.buttonText}
      </button>
    </div>
  );
}
