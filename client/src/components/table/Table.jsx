import React from "react";
import "./table.styles.css";

const Table = (data) => {
  return (
    <div className="table" data-testid="table-id">
      <table>
        <thead>
          <tr data-testid="table-tr">
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
          {data.data &&
            data.data.map((property, key) => (
              <tr key={key}>
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
    </div>
  );
};

export default Table;
