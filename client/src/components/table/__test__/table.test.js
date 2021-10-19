import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Table from "../Table";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Table></Table>, div);
});

test("table renders correctly", () => {
  const { getByTestId } = render(<Table />);
  const table = getByTestId("table-id");
  const tableTr = getByTestId("table-tr");
  expect(table).toHaveAttribute("data-testid", "table-id");
  expect(table).toHaveClass("table");
  expect(table).toBeVisible();
  expect(table).toContainElement(tableTr);
});

it("renders in table rows based on provided columns", () => {
  const cols = [
    { header: "Property Name", name: "PropertyName" },
    { header: "Address", name: "Address" },
    { header: "City", name: "City" },
    { header: "State", name: "State" },
    { header: "Zip", name: "Zip" },
    { header: "Missing Fields", name: "MissingFields" },
    { header: "Missing Data Encoding", name: "MissingDataEncoding" },
  ];
  const data = [
    {
      PROPERTY_NAME: "property 1",
      ADDRESS: "address 1",
      CITY: "city 1",
      STATE: "state 1",
      ZIP: "zip 1",
      MISSING_FIELDS: "missing fields 1",
      MISSING_DATA_ENCODING: "missing data encoding 1",
    },
    {
      PROPERTY_NAME: "property 2",
      ADDRESS: "address 2",
      CITY: "city 2",
      STATE: "state 2",
      ZIP: "zip 2",
      MISSING_FIELDS: "missing fields 2",
      MISSING_DATA_ENCODING: "missing data encoding 2",
    },
    {
      PROPERTY_NAME: "property 3",
      ADDRESS: "address 3",
      CITY: "city 3",
      STATE: "state 3",
      ZIP: "zip 3",
      MISSING_FIELDS: "missing fields 3",
      MISSING_DATA_ENCODING: "missing data encoding 3",
    },
  ];
  // Shallow render Data Table
  const container = shallow(<Table data={data} cols={cols} />);
  // There should be ONLY 1 table element
  const table = container.find("table");
  expect(table).toHaveLength(1);
  // The table should have ONLY 1 thead element
  const thead = table.find("thead");
  expect(thead).toHaveLength(1);
  // The number of th tags should be equal to number of columns
  const headers = thead.find("th");
  expect(headers).toHaveLength(cols.length);
  // Each th tag text should equal to column header
  headers.forEach((th, idx) => {
    expect(th.text()).toEqual(cols[idx].header);
  });
  // The table should have ONLY 1 tbody tag
  const tbody = table.find("tbody");
  expect(tbody).toHaveLength(1);
  // tbody tag should have the same number of tr tags as data rows
  const rows = tbody.find("tr");
  expect(rows).toHaveLength(data.length);
  // Loop through each row and check the content
  // Not exactly sure why but cell 3 and 5 return ""
  rows.forEach((tr, rowIndex) => {
    const cells = tr.find("td");
    expect(cells).toHaveLength(cols.length);
    expect(cells.at(1).text()).toEqual(data[rowIndex].ADDRESS);
    expect(cells.at(2).text()).toEqual(data[rowIndex].CITY);
    expect(cells.at(4).text()).toEqual(data[rowIndex].ZIP);
    expect(cells.at(6).text()).toEqual(data[rowIndex].MISSING_DATA_ENCODING);
  });
});
