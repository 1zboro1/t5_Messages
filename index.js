const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://user123:rB1yUBJvRHRuj6X4@cluster0.jz43fjw.mongodb.net/t5_database?retryWrites=true&w=majority"
);

app.get("/getMessages", (req, res) => {
  UserModel.findOne({ name: req.query.name }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result.messages);
    }
  });
});
app.get("/getUsers", (req, res) => {
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
    alert("Message sent")
    res.json({ status: "message sent" });
  } catch (err) {
    res.json({ status: "error", error: "User not found" });
  }
});

app.listen(3001, () => {
  console.log("server works on port 3001");
});
