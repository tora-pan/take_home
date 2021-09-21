import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  // const [propertyData, setPropertyData] = useState([]);

  const [data, setData] = useState([]);

  function missingFields(prop) {
    let count = 0;
    let row = Object.values(prop);
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "") {
        count += 1;
      }
    }
    return count;
  }

  function missingDataEncoding(prop) {
    let empty = 0;
    let notEmpty = 0;
    let keepCounting = true;
    let missingData = "";
    let row = Object.values(prop);

    for (let i = 0; i < row.length; i++) {
      if (keepCounting) {
        if (row[i] !== "") {
          notEmpty++;
          if (i === row.length - 1) {
            missingData += notEmpty;
          }
        } else {
          missingData += notEmpty + " ";
          keepCounting = false;
          notEmpty = 0;
        }
      }

      if (!keepCounting) {
        if (row[i] === "") {
          empty++;
        } else {
          missingData += empty + " ";
          notEmpty++;
          keepCounting = true;
          empty = 0;
        }
      }
    }
    return missingData;
  }

  async function fetchMyAPI() {
    let response = await fetch("/data");
    response = await response.json();
    setData(response);
    console.log(data);
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
              <td>{missingFields(property)}</td>
              <td>{missingDataEncoding(property)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={fetchMyAPI}>Click Me</button>
    </div>
  );
}

export default App;
