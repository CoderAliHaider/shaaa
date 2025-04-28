const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const server = express();
const productRoutes = require('./routes/product.routes.js');
const messageRoutes = require("./routes/message.routes.js");

server.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
server.use(express.json());
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));

// PRODUCTS
server.use('/api/products', productRoutes);
// MESSAGES
server.use("/api/messages", messageRoutes);

module.exports = server;
