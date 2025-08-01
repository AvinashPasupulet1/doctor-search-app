const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  location: String,
  consultationFee: Number,
  rating: Number,
  stories: Number,
  clinicName: String,
  isAvailableToday: Boolean,
  imageUrl: String
});

module.exports = mongoose.model('Doctor', doctorSchema);
