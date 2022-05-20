const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  chore: { type: String, required: true },
  day: { type: String, required: true },
});

module.exports = mongoose.model('Chore', choreSchema);
