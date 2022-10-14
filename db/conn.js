const mongoose = require("mongoose");
mongoose
  .connect(`mongodb+srv://root:root@cluster0.e0ccq4d.mongodb.net/records?retryWrites=true&w=majority`)
  .then(() => {
    console.log("connection is succesful");
  })
  .catch((err) => {
    console.log("connection fails");
  });
