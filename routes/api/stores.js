const express = require('express');
const router = express.Router();

const Store = require('../../models/Store');

router.get('/all', (req, res) => {
  Store.find()
    .then((stores) => res.json(stores))
    .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
  const newStore = new Store({
    name: req.body.name,
    quantityInMg: req.body.quantityInMg,
    stock: req.body.stock,
    price: req.body.price,
    description: req.body.description,
    isAvailable: req.body.isAvailable ? true : false,
    image: req.body.image,
  });
  newStore
    .save()
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
  Store.findById(req.params.id)
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});
router.delete('/:id', (req, res) => {
  Store.findById(req.params.id)
    .then((item) => item.remove().then(res.json({ success: true })))
    .catch((err) => console.log(err));
});

module.exports = router;
