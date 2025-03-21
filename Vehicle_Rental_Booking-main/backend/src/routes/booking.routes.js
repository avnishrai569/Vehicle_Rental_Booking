const express = require("express");
const { submitBooking } = require("../controllers/booking.controller");

const router = express.Router();
router.post("/book", submitBooking);

module.exports = router;
