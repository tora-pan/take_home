const { application } = require("express");
const server = require("./server");
const testFile = "testData.csv";


describe("testing dataEncoding", () => {
  test("test dataEncoding() to return consecutive columns with data's count", () => {
    let testData = {
      Key1: "Value1",
      Key2: "Value2",
      Key3: "Value3",
      Key4: "Value4",
    };
    let returnedResult = server.missingDataEncoding(testData);
    let expectedResult = "4";
    expect(returnedResult).toBe(expectedResult);
  });
  
  test("test dataEncoding() to return consecutive columns with and without data's count", () => {
    let testData = {
      Key1: "Value1",
      Key2: "",
      Key3: "Value3",
      Key4: "Value4",
    };
    let returnedResult = server.missingDataEncoding(testData);
    let expectedResult = "1 1 2";
    expect(returnedResult).toBe(expectedResult);
  });
});

describe("testing missingFields", () => {
  test("test missingFields() empty key returns valid count", () => {
    let testData = { Key: "Value", Key2: "", Key3: "", Key4: "Value2" };
    let expectedResult = 2;
    let returnedResult = server.missingFields(testData);
    expect(returnedResult).toBe(expectedResult);
  });
  
  test("test missingFields() with no empty keys to return 0", () => {
    let testData = {
      Key: "Value",
      Key2: "123",
      Key3: "5124415",
      Key4: "Value2",
    };
    let expectedResult = 0;
    let returnedResult = server.missingFields(testData);
    expect(returnedResult).toBe(expectedResult);
  });
});

afterAll((done) => {
  server.shutItDown();
  done();
});
// filterData
// preParseData
// getData
