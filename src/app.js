const express = require("express");
const app = express();
require("./db/conn");
const studentRouter = require("./router/student");
const Student = require("./models/student");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(`connection is running on ${port}`);
});
