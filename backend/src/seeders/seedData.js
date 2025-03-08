const sequelize = require("../config/db.config");
const VehicleType = require("../models/vehicleType.model");
const Vehicle = require("../models/vehicle.model");

async function seedDatabase() {
  await sequelize.sync({ force: true });

  const carType = await VehicleType.create({ name: "Sedan", wheels: 4 });
  await Vehicle.create({ name: "Toyota Camry", type_id: carType.id });

  console.log("Database seeded!");
}

seedDatabase();
