import fs from "fs";
import path from "path";
import express from "express";
import Papa from "papaparse";

const server = express();

const PORT = 8000;

server.get("/chocolate", (req, res) => {
  const csvFile = fs.readFileSync(path.resolve("chocolates.csv"), "utf-8");
  const parsedCSV = Papa.parse(csvFile, { header: true });
  res.send(parsedCSV.data);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
