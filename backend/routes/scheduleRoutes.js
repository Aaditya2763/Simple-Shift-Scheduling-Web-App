const express = require("express");
const router = express.Router();
const {
  getSchedule,
  createShift,
  deleteShift,
  updateShift,
} = require("../controller/scheduleController");

//Route to display schedule
router.route("/schedule").get(getSchedule);

//Route to create shift
router.route("/schedule/create-shift")
.post(createShift);

//Route to delete shift
router.route("/shift/delete/:id")
.delete(deleteShift);

//Route to update shift
router.route("/shift/update/:id")
.patch(updateShift);

module.exports = router;
