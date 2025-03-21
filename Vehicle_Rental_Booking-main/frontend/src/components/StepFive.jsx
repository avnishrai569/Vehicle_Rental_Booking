import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { getVehicleTypes } from "../api/api";

const StepOne = ({ formData, setFormData }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    getVehicleTypes().then(setVehicleTypes);
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>Select Vehicle Type</InputLabel>
      <Select
        value={formData.vehicleType}
        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
      >
        {vehicleTypes.map((type) => (
          <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StepOne;
