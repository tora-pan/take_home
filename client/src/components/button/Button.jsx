import React from "react";
import "./button.styles.css";

const Button = ({ callApi, buttonText }) => {
  return (
    <div className="button">
      <button onClick={callApi}>{buttonText}</button>
    </div>
  );
};

export default Button;
