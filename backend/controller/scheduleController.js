const schedule = require("../model/schedule");
const mongoose = require("mongoose");

//display schedules controller
const getSchedule = async (req, res) => {
  try {
    const scheduleData = await schedule.find({});

    if (scheduleData && scheduleData.length > 0) {
      res.status(200).json(scheduleData);
    } else {
      res.status(404).json({ message: "No schedule data found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching schedule data",
      error: error.message,
    });
  }
};

//create new shift controller
const createShift = async (req, res) => {
  try {
    const { name, email, date, start_time, end_time } = req.body;

    // Create a new shift using the provided data
    const newShift = await schedule.create({
      name,
      email,
      date,
      start_time,
      end_time,
    });

    res.status(201).json({ message: "Shift created successfully", newShift });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the shift",
      error: error.message,
    });
  }
};

//delete a particuler shift controller
const deleteShift = async (req, res) => {
  try {
    const shiftId = req.params.id;
    // Check if the provided shiftId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(shiftId)) {
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const deletedShift = await schedule.findByIdAndDelete(shiftId);

    if (!deletedShift) {
      return res.status(404).json({ message: "Shift not found" });
    }

    // Use status code 204 for a successful deletion without sending a response message
    res.status(200).json({ message: "Shift deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update a particular shift
const updateShift = async (req, res) => {
  try {
    const{id}=req.params;
    const { name, email, date, start_time, end_time } = req.body;

    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }
    // Use findByIdAndUpdate to update the shift
    const updatedShift = await schedule.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,
        date: date,
        start_time: start_time,
        end_time: end_time,
      },
      { new: true }
    ); // { new: true } ensures the updated document is returned

    if (!updatedShift) {
      return res.status(404).json({ message: "Shift not found" });
    }

    res
      .status(200)
      .json({ message: "Shift updated successfully", updatedShift });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSchedule,
  createShift,
  deleteShift,
  updateShift,
};
