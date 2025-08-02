const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://quickdeskinbox:GTkP90b1y1AzWAAT@qickdesk.rmlkkjx.mongodb.net/?retryWrites=true&w=majority&appName=QickDesk');
    console.log('MongoDB connected successfully ');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1); // Stop the server if DB doesn't connect
  }
};

module.exports = connectDB;