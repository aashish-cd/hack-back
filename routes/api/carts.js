const express = require('express');
const router = express.Router();

const Cart = require('../../models/Cart');

router.get('/all', (req, res) => {
  Cart.find()
    .then((cart) => res.json(cart))
    .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
  const newCart = new Cart({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  newCart
    .save()
    .then((cart) => res.json(cart))
    .catch((err) => console.log(err));
});

module.exports = router;
