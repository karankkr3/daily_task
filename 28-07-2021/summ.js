const express = require("express");
const app = express();
const port = 8022;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sumnum.html");
});

app.get("/form", (req, res) => {
  var num1 = parseInt(req.query.num1);
  var num2 = parseInt(req.query.num2);
  var total = num1 + num2;
  res.send("total :" + total);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
