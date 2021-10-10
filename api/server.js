const express = require("express");
const app = express();

const csv = require("csv-parser");
const fs = require("fs");

let results = [];
let filteredResults = [];
const fileName = "properties.csv";

let resultsToPass = {};

const getData = (file) => {
  console.log("calling getData with : ", file);
  fs.createReadStream(file)
    .pipe(csv({}))
    .on("data", (data) => results.push(data))
    .on("end", () => {});
  console.log("getData :", results.length);
  return results;
};

app.get("/data", (req, res) => {
  console.log(filteredResults.length);
  //preParseData();
  res.send(filteredResults);
});

async function preParseData() {
  if (results.length == 0) {
    console.log("results not set");
    results = await getData(fileName);
  }
  console.log("results is : ", results.length);

  for (let i = 0; i < results.length; i++) {
    if (Object.values(results[i]).indexOf("ca") > -1) {
      filteredResults.push(results[i]);
    }
  }
}

app.listen(5000, function () {
  // setTimeout(function () {
  //   preParseData();
  // }, 3000);
  preParseData();
});
