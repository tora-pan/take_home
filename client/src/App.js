import React, { useState } from "react";

import Button from "./components/button/Button";
import Table from "./components/table/Table";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [buttonText, setButtonText] = useState("Load Data");

  async function fetchMyAPI() {
    if (data.length === 0) {
      let response = await fetch("/data");
      response = await response.json();
      setData(response);
      setButtonText("Data Loaded");
    }
  }

  return (
    <div className="app-container">
      <Table data={data} />
      <Button callApi={fetchMyAPI} buttonText={buttonText} />
    </div>
  );
}

export default App;
