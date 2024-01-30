// app.js

const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./models/restaurant');

const app = express();
const PORT = 3000;

// Connect to MongoDB (replace 'your_mongodb_connection_string' with your actual connection string)
mongoose.connect('mongodb+srv://GouravChamaria:1234@cluster0.wdagdjh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// REST API to return all restaurant details
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// REST API to return restaurant details by cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  const { cuisine } = req.params;
  try {
    const restaurants = await Restaurant.find({ cuisine });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// REST API to return selected restaurant details with sorting
app.get('/restaurants', async (req, res) => {
  const { sortBy } = req.query;
  try {
    const sortDirection = sortBy === 'DESC' ? -1 : 1;
    const restaurants = await Restaurant.find().sort({ restaurant_id: sortDirection });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// REST API to return specific restaurant details with conditions
app.get('/restaurants/:cuisine', async (req, res) => {
  const { cuisine } = req.params;
  try {
    const restaurants = await Restaurant.find({ cuisine, city: { $ne: 'Brooklyn' } })
      .select({ id: 1, cuisines: 1, name: 1, city: 1, restaurant_id: 1 })
      .sort({ name: 1 });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
