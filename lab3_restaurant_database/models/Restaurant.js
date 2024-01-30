// models/Restaurant.js

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  restaurant_id: {
    type: Number,
    required: true,
  },
  // Add more fields as needed based on your data
  // Example: address, rating, menu, etc.
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
