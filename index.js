const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://user123:rB1yUBJvRHRuj6X4@cluster0.jz43fjw.mongodb.net/t5_database?retryWrites=true&w=majority"
);

app.get("/getMessages", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/sendMessage", async (req, res) => {
  var myquery = { name: req.body.name };
  try {
    await UserModel.updateOne(
      myquery,
      {
        $push: {
          messages: [
            {
              sender: req.body.sender,
              title: req.body.title,
              message: req.body.message,
            },
          ],
        },
      },
      function (err, result) {
        if (err) {
          res.json(err);
        }
      }
    );
  } catch (err) {
    res.json({ status: "error", error: "User not found" });
  }

  res.json(message);
});

app.listen(3001, () => {
  console.log("server works");
});
