import React, { useState } from "react";
import "./header.styles.css";

const Header = ({ setSelected, headerText }) => {
  const [toggler, setToggler] = useState(false);

  const toggle = () => {
    if (toggler === true) {
      setSelected(true);
    } else {
      setSelected(false);
    }
    setToggler(!toggler);
  };

  return (
    <div className={`header-wrapper ${toggler ? "active" : ""}`}>
      <span>{headerText[0]}</span>
      <span>{headerText[1]}</span>
      <span>{headerText[2]}</span>
      <div className="header-button" onClick={toggle}>
        {`${toggler ? "+" : "-"} `}
      </div>
    </div>
  );
};

export default Header;
