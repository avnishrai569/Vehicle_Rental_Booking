const { VehicleType } = require("./models"); // Adjust path as needed

async function seedVehicleTypes() {
  try {
    const vehicleTypes = await VehicleType.findAll();

    if (vehicleTypes.length === 0) {
      await VehicleType.bulkCreate([
        { name: "Car" },
        { name: "Bike" },
        { name: "Scooter" },
        { name: "Truck" },
      ]);
      console.log("🚗 Default vehicle types added!");
    } else {
      console.log("✅ Vehicle types already exist.");
    }
  } catch (error) {
    console.error("❌ Error seeding vehicle types:", error);
  }
}

// Run seeding
seedVehicleTypes();
