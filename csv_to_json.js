import csv from "csvtojson";

const csvFilePath = "chocolates.csv";

export function loadCSV() {
  csv()
    .fromFile(csvFilePath)
    .toString()
    .then((jsonObj) => {
      console.log(jsonObj);
      //   return JSON.stringify(jsonObj);
      return jsonObj;
    });
}
