const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
  },
  start_time: {
    type: Date,
  },

  end_time: {
    type: Date,
  },
});

const schedule = mongoose.model("schedule", scheduleSchema);

module.exports = schedule;
