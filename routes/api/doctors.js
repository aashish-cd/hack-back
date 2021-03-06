const express = require('express');
const router = express.Router();

const Doctor = require('../../models/Doctor');

router.get('/all', (req, res) => {
  Doctor.find()
    .then((doctors) => res.json(doctors))
    .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
  const newItem = new Doctor({
    name: req.body.name,
    hospital: req.body.hospital,
    workingDays: req.body.workingDays,
    workingHours: req.body.workingHours,
    department: req.body.department,
    location: req.body.location,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Doctor.findById(id)
    .deleteOne()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

module.exports = router;
