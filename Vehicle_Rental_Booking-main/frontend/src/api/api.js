import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getVehicleTypes = async () => {
  const response = await axios.get(`${API_BASE_URL}/vehicle-types`);
  return response.data;
};

export const getVehicles = async (typeId) => {
  const response = await axios.get(`${API_BASE_URL}/vehicles/${typeId}`);
  return response.data;
};

export const submitBooking = async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/book`, bookingData);
  return response.data;
};
