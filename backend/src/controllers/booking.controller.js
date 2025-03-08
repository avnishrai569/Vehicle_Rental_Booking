const Booking = require("../models/booking.model");

exports.submitBooking = async (req, res) => {
  const { user_name, vehicle_id, start_date, end_date } = req.body;
  
  // Check for overlapping bookings
  const existingBooking = await Booking.findOne({
    where: { vehicle_id, start_date: { [Op.lte]: end_date }, end_date: { [Op.gte]: start_date } }
  });

  if (existingBooking) {
    return res.status(400).json({ error: "Vehicle already booked in this range" });
  }

  const booking = await Booking.create({ user_name, vehicle_id, start_date, end_date });
  res.json(booking);
};
