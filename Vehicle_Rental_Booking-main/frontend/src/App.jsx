import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h4" textAlign="center" sx={{ my: 4 }}>Vehicle Rental Booking</Typography>
      <MultiStepForm />
    </Container>
  );
}

export default App;
