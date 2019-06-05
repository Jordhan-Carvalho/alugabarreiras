const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  authorName: String,
  type: { type: String, required: true },
  city: { type: String, required: true },
  image: { type: String, required: true },
  image2: String,
  image3: String,
  price: { type: String, required: true },
  street: { type: String, required: true },
  district: { type: String, required: true },
  avatar: String,
  number: String,
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  bedroom: { type: String, required: true },
  bathroom: { type: String, required: true },
  area: String,
  garage: { type: String, required: true },
  petFriendly: String,
  tel: String,
  email: String,
  zap: String,
  lat: { type: String, required: true },
  lng: { type: String, required: true },
});

module.exports = Rent = mongoose.model('rent', RentSchema);
