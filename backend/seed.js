// Import the Schedule model for working with the database
const Schedule = require("./model/schedule");

// Sample data to be inserted into the database
const Dummy_Schedule = [
  {
    name: "Aaditya",
    date: Date.now(),
    email: "singhaditya2233@gmail.com",
    start_time: Date.now(),
    end_time: Date.now(),
  },
];

// Function to seed the database with sample data
async function SeedUser() {
  // Remove all existing records in the Schedule collection
  await Schedule.deleteMany();

  // Insert the sample data into the Schedule collection
  await Schedule.insertMany(Dummy_Schedule);
}

// Export the SeedUser function to be used elsewhere
module.exports = SeedUser;
