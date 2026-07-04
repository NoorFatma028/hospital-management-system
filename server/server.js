const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const patientRoutes = require("./routes/patientRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/hospitalDB"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.use("/patients", patientRoutes);
const appointmentRoutes = require("./routes/appointmentRoutes");

app.use("/appointments", appointmentRoutes);
const billRoutes = require("./routes/billRoutes");
app.use("/bills", billRoutes);
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});