const express = require("express");
const router = express.Router();
const Bill = require("../models/Bill");

// Add Bill
router.post("/", async (req, res) => {
  const bill = new Bill(req.body);
  await bill.save();
  res.json(bill);
});

// Get All Bills
router.get("/", async (req, res) => {
  const bills = await Bill.find();
  res.json(bills);
});

// Update Bill
router.put("/:id", async (req, res) => {
  const bill = await Bill.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(bill);
});

// Delete Bill
router.delete("/:id", async (req, res) => {
  await Bill.findByIdAndDelete(req.params.id);
  res.json({ message: "Bill Deleted" });
});

module.exports = router;