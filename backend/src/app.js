const express = require("express");
const cors = require("cors");
require("dotenv").config();

const vehicleRoutes = require("./src/routes/vehicle.routes");
const bookingRoutes = require("./src/routes/booking.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", vehicleRoutes);
app.use("/api", bookingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
