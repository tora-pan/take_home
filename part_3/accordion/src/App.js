import React, { useState } from "react";

import "./App.css";

import Content from "./components/content/Content";
import Header from "./components/header/Header";

function App() {
  const [selected, setSelected] = useState(false);
  
  const panelA = "Panel A Text";
  const panelB = "Panel B Text";

  return (
    <div className="App">
      <Header setSelected={setSelected} />
      <Content selected={selected} panelA={panelA} panelB={panelB} />
    </div>
  );
}

export default App;
