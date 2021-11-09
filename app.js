const express = require("express");

const app = express();

app.use(express.static("public"));

// GET
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/public/views/work.html");
});

app.get("/galery", (req, res) => {
  res.sendFile(__dirname + "/public/views/galery.html");
});

app.listen(3000, () => {
  console.log("Server is runing!");
});
