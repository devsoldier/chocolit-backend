import fs from "fs";
import path from "path";
import Papa from "papaparse";

export function loadParsedCSV() {
  const csvFile = fs.readFileSync(path.resolve("chocolates.csv"), "utf-8");
  const parsedCSV = Papa.parse(csvFile, { header: true });
  return parsedCSV;
}
