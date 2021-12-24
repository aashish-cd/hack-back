const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderedAt: {
    type: Date,

    default: Date.now(),
  },

  medicineName: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
