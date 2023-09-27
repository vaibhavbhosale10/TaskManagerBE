const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/task-manager";
// const url2 = "mongodb://localhost:27017/dashboard";

mongoose.connect(url);

const connect = mongoose.connection;

connect.on("connected", () => {
  console.log(`Connected to ${url}`);
});
connect.on("disconnected", () => {
  console.log(`Connected to ${url}`);
});
connect.on("error", () => {
  console.log(`could not Connect to ${url}`, Error);
});
