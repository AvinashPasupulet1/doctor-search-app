const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.get('/', async (req, res) => {
  const { location, specialization } = req.query;
  const filter = {};
  if (location) filter.location = location;
  if (specialization) filter.specialization = specialization;

  const doctors = await Doctor.find(filter);
  res.json(doctors);
});

router.post('/', async (req, res) => {
  const newDoc = new Doctor(req.body);
  await newDoc.save();
  res.status(201).json(newDoc);
});

module.exports = router;
