const express = require("express");
const app = express();

const csv = require("csv-parser");
const fs = require("fs");

let results = [];
const fileName = "properties.csv";

const getData = (file) => {
  fs.createReadStream(file)
    .pipe(csv({}))
    .on("data", (data) => results.push(data))
    .on("end", () => {});
  return results;
};

app.get("/data", (req, res) => {
  if (results.length == 0) {
    results = getData(fileName);
  }
  let filtered = [];
  for (let i = 0; i < results.length; i++) {
    if (Object.values(results[i]).indexOf("ca") > -1) {
      filtered.push(results[i]);
    }
  }
  res.send(filtered);
});

app.listen(5000);
