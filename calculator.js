const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var width = Number(req.body.width);
  var height = Number(req.body.height) / 100;
  var result = width / (height * height);

  res.send(" bmi is: " + result);
});

app.listen(3000, function () {
  console.log("server started @ port 3000");
});
