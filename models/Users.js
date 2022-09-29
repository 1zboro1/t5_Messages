const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  messages: [
    {
      sender: { type: String },
      title: { type: String },
      message: { type: String },
    },
  ],
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
