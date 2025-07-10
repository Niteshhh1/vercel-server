
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
     type:String
  },
  description: { type: String, required: true },
  designation: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);
