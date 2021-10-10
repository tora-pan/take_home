import React, { useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchMyAPI() {
    if (data.length === 0) {
      let response = await fetch("/data");
      response = await response.json();
      setData(response);
    }
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Missing Fields</th>
            <th>Missing Data Encoding</th>
          </tr>
        </thead>
        <tbody>
          {data.map((property) => (
            <tr>
              <td>{property.PROP_NAME}</td>
              <td>{property.ADDRESS}</td>
              <td>{property.CITY}</td>
              <td>{property.STATE_ID}</td>
              <td>{property.ZIP}</td>
              <td>{property.MISSING_FIELD_COUNT}</td>
              <td>{property.MISSING_DATA_ENCODING}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={fetchMyAPI}>Click Me</button>
    </div>
  );
}

export default App;
