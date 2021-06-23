const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const userModel = mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

userModel.plugin(validator);

module.exports = mongoose.model("User", userModel);
