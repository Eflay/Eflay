const mongoose = require("mongoose");

const thingSchema = mongoose.Schema({
  imageURL: { type: String, require: true },
});

module.exports = mongoose.model("Things", thingSchema);
