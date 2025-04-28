const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    image: { type: String, required: true }, // matches 'Image' from data
    title: { type: String, required: true }, // you can rename this to 'name' if preferred
    description: { type: String, required: true },
    quantity: { type: String, required: true }, // added quantity field
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
