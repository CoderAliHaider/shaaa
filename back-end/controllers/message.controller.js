// const Message = require("../models/message.js");

// exports.createMessage = async (req, res) => {
//   try {
//     const {message } = req.body;

//     const newMessage = new Message({message });
//     await newMessage.save();

//     res.status(201).json({ message: "Message sent successfully." });
//   } catch (error) {
//     console.error("Error saving message:", error);
//     res.status(500).json({ message: "Server error." });
//   }
// };

// exports.getAllMessages = async (req, res) => {
//   try {
//     const messages = await Message.find().sort({ createdAt: -1 });
//     res.status(200).json(messages);
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     res.status(500).json({ message: "Server error." });
//   }
// };


const Message = require("../models/message.js");

exports.createMessage = async (req, res) => {
  try {
    const { message } = req.body; // Only message is needed

    const newMessage = new Message({ message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Server error." });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Server error." });
  }
};
