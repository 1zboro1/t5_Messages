const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  messages: [
    {
      sender: { type: String },
      tile: { type: String },
      message: { type: String },
    },
  ],
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
