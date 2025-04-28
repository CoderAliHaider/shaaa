const dotenv = require('dotenv').config();
const connectDb = require('./db/index.js');
const server = require('./server.js');

connectDb().then((result) => {
    server.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to the database:', error.message);
});