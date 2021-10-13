const path = require("path");
var express = require("express");
const publicpath = path.join(__dirname, "/../public");
const port = process.env.PORT || 5000;
var app = express();
app.use(express.static(publicpath));

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
