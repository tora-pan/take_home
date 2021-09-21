import React, { useState } from "react";
import Panel from "../panel/Panel";
import "./content.styles.css";

const Content = ({ selected, panelA, panelB }) => {
  const [activePanels, setActivePanels] = useState(["panelA"]);

  return (
    <div className={`content-wrapper ${selected ? "visible" : "hidden"}`}>
      <Panel active={activePanels.includes("PanelA")} panelText={panelA} setActivePanels={setActivePanels} />
      <Panel active={activePanels.includes("PanelB")} panelText={panelB} setActivePanels={setActivePanels} />
    </div>
  );
};

export default Content;
