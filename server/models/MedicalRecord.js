const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);