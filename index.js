const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://user123:Password123@cluster0.jz43fjw.mongodb.net/t5_database?retryWrites=true&w=majority"
);

// app.get("/getMessages", (req, res) => {

// });

app.listen(3001, () => {
  console.log("server works");
});
