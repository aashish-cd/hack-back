const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmbulanceSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

module.exports = Ambulance = mongoose.model('ambulance', AmbulanceSchema);
