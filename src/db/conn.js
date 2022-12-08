const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/assignment-api", {})
  .then(console.log("connection is on....."))
  .catch((e) => {
    console.log("no conection");
  });
