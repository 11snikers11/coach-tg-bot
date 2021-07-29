const mongoose = require('mongoose');
require('dotenv').config();

const mongoSettings = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectToDb() {
  try {
    console.log('Connecting to db...');
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, mongoSettings);
    console.log('Connected to db succesfully.');
  } catch (ex) {
    console.log('Error with connecting to db:', ex.message);
  }
}

module.exports = { connectToDb };
