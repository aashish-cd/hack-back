const express = require('express');
const router = express.Router();

const store = require('../../models/Store');

router.get('/all', (req, res) => {
  store
    .find()
    .then((stores) => res.json(stores))
    .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
  const newStore = new store({
    name: req.body.name,
    quantityInMg: req.body.quantityInMg,
    stock: req.body.stock,
    price: req.body.price,
    description: req.body.description,
    isAvailable: req.body.isAvailable ? true : false,
  });
  newStore
    .save()
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
  store
    .findById(req.params.id)
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});

module.exports = router;
