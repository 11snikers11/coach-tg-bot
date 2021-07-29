const mongoose = require('mongoose');

async function connectToDb() {
  try {
    console.log('Connecting to db...');
    await mongoose.connect(
      'mongodb+srv://sa:0912SbX5pMMbJT79@cluster0.nle7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('Connected to db succesfully.');
  } catch (ex) {
    console.log('Error with connecting to db:', ex.message);
  }
}

module.exports = { connectToDb };
