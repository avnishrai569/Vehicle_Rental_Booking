// const VehicleType = require("../models/vehicleType.model");
// const {VehicleType} = require("../models/vehicleType.model.js");
const { VehicleType } = require("../models"); 
const {Vehicle} = require("../models");

// const {Vehicle} = require("../models/vehicle.model.js");

// const Vehicle = require("../models/vehicle.model");


exports.getVehicleTypes = async (req, res) => {
  try {
    console.log("VehicleType Model:",VehicleType); 
    if(!VehicleType){
      throw new Error("VehicleType model is undefined");
    }
    const types = await VehicleType.findAll();
    console.log("Fetched vehicle types:", types);
    res.json(types);
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// exports.getVehicles = async (req, res) => {
//   const vehicles = await Vehicle.findAll({ where: { type_id: req.params.type_id } });
//   res.json(vehicles);
// };
exports.getVehicles = async (req, res) => {
  try {
    // Support both query params (?type=2) and route params (/vehicles/2)
    const typeId = req.params.type_id || req.query.type;

    if (!typeId) {
      return res.status(400).json({ error: "Vehicle type ID is required" });
    }

    console.log("Fetching vehicles for type_id:", typeId);

    const vehicles = await Vehicle.findAll({ where: { type_id: typeId } });

    if (vehicles.length === 0) {
      return res.status(404).json({ error: "No vehicles found for this type" });
    }

    console.log("Fetched vehicles:", vehicles);
    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


