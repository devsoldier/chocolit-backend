// import fs from "fs";
// import path from "path";
import express from "express";
// import Papa from "papaparse";
import { loadParsedCSV } from "./csv_to_json";

const server = express();

const PORT = 8000;

server.get("/chocolate", (req, res) => {
  res.send(loadParsedCSV().data);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
