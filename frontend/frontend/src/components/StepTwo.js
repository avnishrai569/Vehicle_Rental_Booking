import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { getVehicles } from "../api/api";

const StepTwo = ({ formData, setFormData }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (formData.vehicleType) {
      getVehicles(formData.vehicleType).then(setVehicles);
    }
  }, [formData.vehicleType]);

  return (
    <FormControl fullWidth>
      <InputLabel>Select Vehicle</InputLabel>
      <Select
        value={formData.vehicleId}
        onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
      >
        {vehicles.map((vehicle) => (
          <MenuItem key={vehicle.id} value={vehicle.id}>{vehicle.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StepTwo;
