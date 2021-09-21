import React from "react";
import "./panel.styles.css";

const Panel = ({ panelText, active, setActivePanels }) => {
  const handleClick = () => {
    if (!active) {
      setActivePanels([panelText]);
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
