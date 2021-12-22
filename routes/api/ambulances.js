const express = require('express');
const router = express.Router();

const Ambulance = require('../../models/Ambulance');

router.get('/all', (req, res) => {
  Ambulance.find()
    .then((ambulances) => res.json(ambulances))
    .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
  const newItem = new Ambulance({
    location: req.body.location,
    phone: req.body.phone,
    isAvailable: req.body.isAvailable ? true : false,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

module.exports = router;
