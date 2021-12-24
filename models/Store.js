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
  image: {
    type: String,
    required: true,
    default:
      'https://5.imimg.com/data5/SELLER/Default/2021/6/QQ/CU/ZF/12801873/paracetamol-tablet-500x500.JPG',
  },
});

module.exports = Store = mongoose.model('store', StoreSchema);
