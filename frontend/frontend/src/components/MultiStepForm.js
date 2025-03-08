import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const steps = ["Select Vehicle Type", "Select Vehicle", "Confirm Booking"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleId: "",
    userName: "",
    startDate: "",
    endDate: "",
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box sx={{ width: "50%", margin: "auto", mt: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {activeStep === 0 && <StepOne formData={formData} setFormData={setFormData} />}
        {activeStep === 1 && <StepTwo formData={formData} setFormData={setFormData} />}
        {activeStep === 2 && <StepThree formData={formData} setFormData={setFormData} />}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MultiStepForm;
