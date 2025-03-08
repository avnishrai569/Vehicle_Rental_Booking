const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Vehicle = require("./vehicle.model");

const Booking = sequelize.define("Booking", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_name: { type: DataTypes.STRING, allowNull: false },
  vehicle_id: { type: DataTypes.INTEGER, references: { model: Vehicle, key: "id" } },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Booking;
