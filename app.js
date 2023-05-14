const express = require("express");
const app = express();
require('dotenv')
require("./db/conn");
const studentRouter = require("./router/student");
require("./models/student");
require("dotenv").config();
const port = process.env.PORT;
// dotenv.config({path:"./config.env"})
// dotenv.config({path:"./config.env"})

//  It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

app.use(studentRouter);

app.listen(port, () => {
  console.log(`connection is running on ${port}`);
});
