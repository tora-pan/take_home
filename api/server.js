const express = require("express");
const app = express();

const csv = require("csv-parser");
const fs = require("fs");

let results = [];
let filteredResults = [];
const fileName = "properties.csv";

//csv gets passed and pushed to the reuslts array, then calls the function to filter on 'end'.
const getData = (file) => {
  fs.createReadStream(file)
    .pipe(csv({}))
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      filterData();
    });
  return results;
};

//when the client reaches out to '/data' the preparsed results are sent
app.get("/data", (req, res) => {
  console.log("getting tickled");
  res.send(filteredResults);
});

//parse the csv if the results array is currently empty.
function preParseData() {
  if (results.length == 0) {
    results = getData(fileName);
  }
}

//filter out all of the properties from the csv that contain the state CA
function filterData() {
  for (let i = 0; i < results.length; i++) {
    if (Object.values(results[i]).indexOf("ca") > -1) {
      //destructure all of the wanted fields off of the obj
      const {
        PROP_NAME,
        ADDRESS,
        CITY,
        STATE_ID,
        ZIP,
        MISSING_FIELD_COUNT,
        MISSING_DATA_ENCODING,
        ...others
      } = results[i];

      // create an obj with the fields we want
      let picked = {
        PROP_NAME,
        ADDRESS,
        CITY,
        STATE_ID,
        ZIP,
        MISSING_FIELD_COUNT,
        MISSING_DATA_ENCODING,
      };

      // set the missing field count and data encoding via help functions
      picked["MISSING_FIELD_COUNT"] = missingFields(results[i]);
      picked["MISSING_DATA_ENCODING"] = missingDataEncoding(results[i]);

      //add the desired function to the array of filtered results
      filteredResults.push(picked);
    }
  }
}

//when api loads up preparse the csv so it's ready to send to the client.
app.listen(5000, function () {
  preParseData();
});

function missingFields(data) {
  let count = 0;
  let row = Object.values(data);
  for (let i = 0; i < row.length; i++) {
    if (row[i] === "") {
      count += 1;
    }
  }
  return count;
}

function missingDataEncoding(data) {
  let empty = 0;
  let notEmpty = 0;
  let keepCounting = true;
  let missingData = "";
  let row = Object.values(data);

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
