const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  patientName: String,
  consultationFee: Number,
  medicineCost: Number,
  totalAmount: Number,
});

module.exports = mongoose.model("Bill", billSchema);