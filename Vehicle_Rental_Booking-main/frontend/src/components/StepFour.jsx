import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { submitBooking } from "../api/api";

const StepFour = ({ formData, setFormData }) => {
  const handleSubmit = async () => {
    try {
      // Submit booking data to the backend
      await submitBooking({
        user_name: formData.userName,
        vehicle_id: formData.vehicleId,
        start_date: formData.startDate,
        end_date: formData.endDate,
      });
      alert("Booking Successful!");
      // Reset form after successful submission
      setFormData({
        vehicleType: "",
        vehicleId: "",
        userName: "",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      alert("Error in booking! Please try again.");
    }
  };

  return (
    <Box>
      <Typography variant="h6">Confirm Your Booking</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography>Name: {formData.userName}</Typography>
        <Typography>Vehicle Type: {formData.vehicleType}</Typography>
        <Typography>Vehicle Model: {formData.vehicleId}</Typography>
        <Typography>Start Date: {formData.startDate}</Typography>
        <Typography>End Date: {formData.endDate}</Typography>
      </Box>
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Confirm Booking
      </Button>
    </Box>
  );
};

export default StepFour;
