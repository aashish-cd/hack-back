const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  workingDays: [
    {
      type: String,
      required: true,
    },
  ],
  workingHours: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

module.exports = Doctor = mongoose.model('doctor', DoctorSchema);
