const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true }, // Only message field
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
