import React, { useState } from "react";
import Panel from "../panel/Panel";
import "./content.styles.css";

const Content = ({ selected, panelA, panelB }) => {
  const [active, setActive] = useState(true);

  console.log(panelA);

  return (
    <div className={`content-wrapper ${selected ? "visible" : "hidden"}`}>
      <Panel active={active} panelText={panelA} setActive={setActive} />
      <Panel active={!active} panelText={panelB} setActive={setActive} />
    </div>
  );
};

export default Content;
