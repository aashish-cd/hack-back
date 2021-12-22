const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/all', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    phone: req.body.phone,
    doctorName: req.body.doctorName,
    email: req.body.email,
    location: req.body.location,
  });
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

module.exports = router;
