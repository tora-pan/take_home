import React, { useState } from "react";

import "./App.css";

import Content from "./components/content/Content";
import Header from "./components/header/Header";

function App() {
  const [selected, setSelected] = useState(true);

  let myData = {
    "header-Data": ["30%", "$2000000", "85%"],
    "content-A":
      "This should be displayed in Panel A. This is visible by default",
    "content-B":
      "This should be displayed in Panel B. This should be hidden by default",
  };

  const headerText = myData["header-Data"];
  const panelAText = myData["content-A"];
  const panelBText = myData["content-B"];

  return (
    <div className="App">
      <Header setSelected={setSelected} headerText={headerText} />
      <Content selected={selected} panelA={panelAText} panelB={panelBText} />
    </div>
  );
}

export default App;
