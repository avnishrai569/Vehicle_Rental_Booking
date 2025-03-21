import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { submitBooking } from "../api/api";

const StepThree = ({ formData, setFormData }) => {
  const handleSubmit = async () => {
    try {
      await submitBooking({
        user_name: formData.userName,
        vehicle_id: formData.vehicleId,
        start_date: formData.startDate,
        end_date: formData.endDate,
      });
      alert("Booking Successful!");
    } catch (error) {
      alert("Error in booking!");
    }
  };

  return (
    <Box>
      <TextField fullWidth label="Your Name" value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
      
      <TextField fullWidth type="date" label="Start Date" InputLabelProps={{ shrink: true }}
        value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} />
      
      <TextField fullWidth type="date" label="End Date" InputLabelProps={{ shrink: true }}
        value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} />
      
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>Confirm Booking</Button>
    </Box>
  );
};

export default StepThree;
