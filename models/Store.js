const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  quantityInMg: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

module.exports = Store = mongoose.model('store', StoreSchema);
