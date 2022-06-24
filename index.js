import "dotenv";

import express from "express";
import bodyParser from "body-parser";

import client from "./src/db-client";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to car-rental-api",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
