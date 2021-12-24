const express = require('express');
const router = express.Router();

const Order = require('../../models/Order');

router.get('/all', (req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
  const newOrder = new Order({
    userName: req.body.userName,
    totalPrice: req.body.totalPrice,
    medicineName: req.body.medicineName,
    shippingAddress: req.body.shippingAddress,
    email: req.body.email,
    phone: req.body.phone,
  });
  newOrder
    .save()
    .then((order) => res.json(order))
    .catch((err) => console.log(err));
});

router.delete('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then((item) => item.remove().then(res.json({ success: true })))
    .catch((err) => console.log(err));
});

module.exports = router;
