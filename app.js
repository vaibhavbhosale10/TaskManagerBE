const express = require("express"); //npm i express
const bodyParser = require("body-parser"); //npm i body-parser
const cors = require("cors"); //npm i cors
require("dotenv").config(); //npm i dotenv

const DB = require("./V1/models/database");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 9090;

app.use("/api/tasks", require("./V1/routes/task-route"));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
