

const express = require("express");
const router = express.Router();
const { createMessage, getAllMessages } = require("../controllers/message.controller.js");

// Test route
router.get("/test", (req, res) => {
  res.send("✅ Message routes working!");
});

// POST a message
router.post("/", createMessage);

// GET all messages
router.get("/", getAllMessages);

module.exports = router;
