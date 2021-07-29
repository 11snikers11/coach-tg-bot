const mongoose = require('mongoose');
const { Schema } = mongoose;
const playersSchema = new Schema({
  playerName: String,
  playDate: Date,
});

module.exports = mongoose.model('PlayersList', playersSchema);