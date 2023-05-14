const mongoose = require("mongoose");
require("dotenv").config()
const MONGO_DB_URL=process.env.MONGODB_URL
mongoose
  .connect(`${MONGO_DB_URL}`)
  .then(() => {
    console.log("connection is succesful");
  })
  .catch((err) => {
    console.log("connection fails");
  });

