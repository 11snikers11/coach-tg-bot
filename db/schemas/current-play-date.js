const mongoose = require('mongoose');
const { Schema } = mongoose;

const currentPlayDateSchema = new Schema({
  playDate: Date,
  currentDate: Boolean,
});

module.exports = mongoose.model('CurrentPlayDate', currentPlayDateSchema);
