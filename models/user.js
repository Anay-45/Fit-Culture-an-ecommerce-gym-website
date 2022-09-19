const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique:true },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
  },
  {
    collection: "users",
  }
);


module.exports = mongoose.model("user", UserSchema);
