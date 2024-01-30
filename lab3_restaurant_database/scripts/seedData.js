const mongoose = require("mongoose");
const Restaurant = require("../models/Restaurant"); // Adjust the filename based on the actual case

// Replace 'your_mongodb_connection_string' with your actual connection string
const mongoDBConnectionString = "mongodb+srv://GouravChamaria:1234@cluster0.wdagdjh.mongodb.net/?retryWrites=true&w=majority";

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoDBConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await Restaurant.deleteMany();
    console.log("Cleared existing data");

    // Sample seed data
    const seedData = [
      {
        address: {
          building: "1008",
          street: "Morris Park Ave",
          zipcode: "10462",
        },
        city: "Bronx",
        cuisine: "Bakery",
        name: "Morris Park Bake Shop",
        restaurant_id: "30075445",
      },
      {
        address: {
          street: "Thai Son Street",
          zipcode: null,
        },
        city: "Manhattan",
        cuisine: "Vietnamese",
        name: "Pho Me Long Time",
        restaurant_id: "30075455",
      },
      {
        address: {
          building: "253",
          street: "East 167 Street",
          zipcode: null,
        },
        city: "Bronx",
        cuisine: "Chicken",
        name: "Mom's Fried Chicken",
        restaurant_id: "40382900",
      },
      {
        address: {
          building: "120",
          street: "East 56 Street",
          zipcode: "19800",
        },
        city: "Mahattan",
        cuisine: "Italian",
        name: "Montebello Restaurant",
        restaurant_id: "40397082",
      },
      {
        address: {
          building: "195",
          street: "Soprano Street",
          zipcode: "17500",
        },
        city: "Staten Island",
        cuisine: "Hamburgers",
        name: "Joeys Burgers",
        restaurant_id: "40397555",
      },
      {
        address: {
          building: "200",
          street: "Queens Boulevard",
          zipcode: "19700",
        },
        city: "Queens",
        cuisine: "American",
        name: "Brunos on the Boulevard",
        restaurant_id: "40397678",
      },
      {
        address: {
          building: "555",
          street: "Sushi Street",
          zipcode: "17700",
        },
        city: "Brooklyn",
        cuisine: "Japanese",
        name: "Iron Chef House",
        restaurant_id: "40397699",
      },
      {
        address: {
          building: "555",
          street: "Fontana Street",
          zipcode: null,
        },
        city: "Brooklyn",
        cuisine: "Japanese",
        name: "Wasabi Sushi",
        restaurant_id: "40398000",
      },
      {
        address: {
          building: "900",
          street: "Goodfellas Street",
          zipcode: "17788",
        },
        city: "Brooklyn",
        cuisine: "Delicatessen",
        name: "Sal's Deli",
        restaurant_id: "40898000",
      },
      {
        address: {
          building: "909",
          street: "44 Gangster Way",
          zipcode: "17988",
        },
        city: "Queens",
        cuisine: "Delicatessen",
        name: "Big Tony's Sandwich Buffet",
        restaurant_id: "40898554",
      },
      {
        address: {
          building: "1201",
          street: "121 Canolli Way",
          zipcode: "17989",
        },
        city: "Queens",
        cuisine: "Delicatessen",
        name: "The Godfather Panini Express",
        restaurant_id: "40898554",
      },
    ];
    console.log("Seed Data:", seedData);

    // Insert new data
    const insertedData = await Restaurant.insertMany(seedData);
    console.log("Data seeded successfully:", insertedData);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the MongoDB connection
    mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run the seeding function
seedDatabase();
