const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const VehicleType = require("./vehicleType.model");

const Vehicle = sequelize.define("Vehicle", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type_id: { type: DataTypes.INTEGER, references: { model: VehicleType, key: "id" } },
});

module.exports = Vehicle;
