const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/students-api")
  .then(() => {
    console.log("connection is succesful");
  })
  .catch((err) => {
    console.log("connection fails");
  });
