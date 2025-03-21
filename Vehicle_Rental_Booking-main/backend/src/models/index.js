const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

if (typeof dbConfig.dialect !== "string") {
  throw new Error(`❌ Invalid dialect type: ${typeof dbConfig.dialect}. Expected a string.`);
}

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false, // Disable SQL logs
  }
);

// Import models
const VehicleType = require("./vehicleType.model")(sequelize, DataTypes);
const Vehicle = require("./vehicle.model")(sequelize, DataTypes);
const Booking = require("./booking.model")(sequelize, DataTypes);

// Define associations
VehicleType.hasMany(Vehicle, { foreignKey: "type_id" });
Vehicle.belongsTo(VehicleType, { foreignKey: "type_id" });

Vehicle.hasMany(Booking, { foreignKey: "vehicle_id" });
Booking.belongsTo(Vehicle, { foreignKey: "vehicle_id" });

module.exports = {
  sequelize,
  VehicleType,
  Vehicle,
  Booking,
};
