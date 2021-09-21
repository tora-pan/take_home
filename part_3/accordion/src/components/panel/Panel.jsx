import React from "react";
import "./panel.styles.css";

const Panel = ({ panelText, active, setActive }) => {
  const handleClick = (className) => {
    if (!active) {
      console.log("not");
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`panel-wrapper ${
        active ? "active-component" : "hidden-component"
      }`}
    >
      {panelText}
    </div>
  );
};

export default Panel;
