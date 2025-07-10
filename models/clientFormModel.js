const mongoose = require('mongoose');

const ClientFormSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('ClientFormDetails', ClientFormSchema);
