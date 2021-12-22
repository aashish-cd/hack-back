const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = Cart = mongoose.model('cart', CartSchema);
