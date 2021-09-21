import React, { useState } from "react";
import "./header.styles.css";

const Header = ({ setSelected }) => {
  const [toggler, setToggler] = useState(true);

  const toggle = () => {
    console.log(`toggler is ${toggler}`);
    if (toggler === true) {
      setSelected(true);
    } else {
      setSelected(false);
    }
    setToggler(!toggler);
  };

  return (
    <div className={`header-wrapper ${toggler ? "active" : ""}`}>
      <span>30%</span>
      <span>$2000000</span>
      <span>85%</span>
      <div className="header-button" onClick={toggle}>
        {`${toggler ? "+" : "-"} `}
      </div>
    </div>
  );
};

export default Header;
