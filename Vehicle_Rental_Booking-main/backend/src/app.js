const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { sequelize } = require("./models"); // Import Sequelize instance
const vehicleRoutes = require("./routes/vehicle.routes");
const bookingRoutes = require("./routes/booking.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", vehicleRoutes);
app.use("/api", bookingRoutes);

// Sync Sequelize models
sequelize
  .sync({ force: false }) // WARNING: force: true will delete and recreate tables
  .then(() => {
    console.log("✅ Database synced successfully!");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => {
    console.error("❌ Error syncing database:", err);
  });
