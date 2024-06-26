const express = require("express");
const houses = require("./data/houses");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/houses", (req, res) => {
  res.json(houses);
});

app.listen(5000, console.log("Server is running on PORT 5000"));
