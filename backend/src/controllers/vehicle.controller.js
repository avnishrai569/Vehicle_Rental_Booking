const VehicleType = require("../models/vehicleType.model");
const Vehicle = require("../models/vehicle.model");

exports.getVehicleTypes = async (req, res) => {
  const types = await VehicleType.findAll();
  res.json(types);
};

exports.getVehicles = async (req, res) => {
  const vehicles = await Vehicle.findAll({ where: { type_id: req.params.type_id } });
  res.json(vehicles);
};
