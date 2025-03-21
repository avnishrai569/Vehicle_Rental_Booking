const express = require("express");
const { getVehicleTypes, getVehicles } = require("../controllers/vehicle.controller");

const router = express.Router();

router.get("/vehicle-types", getVehicleTypes);
router.get("/vehicles/:type_id?", getVehicles); // Allows optional `:type_id`

module.exports = router;

// const express = require("express");
// const { getVehicleTypes, getVehicles } = require("../controllers/vehicle.controller");

// const router = express.Router();
// router.get("/vehicle-types", getVehicleTypes);
// router.get("/vehicles/:type_id", getVehicles);

// module.exports = router;
