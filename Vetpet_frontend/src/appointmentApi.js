import api from "./api"; // import the Axios instance

const APPOINTMENT_BASE = "/api/appointment/";

// Get all appointments
export const getAppointments = async () => {
  const response = await api.get(`${APPOINTMENT_BASE}list/`);
  return response.data;
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  const response = await api.post(`${APPOINTMENT_BASE}add/`, appointmentData);
  return response.data;
};

// Get details of a single appointment
export const getAppointmentDetail = async (id) => {
  const response = await api.get(`${APPOINTMENT_BASE}${id}/`);
  return response.data;
};

// Update an appointment
export const updateAppointment = async (id, appointmentData) => {
  const response = await api.patch(`${APPOINTMENT_BASE}${id}/update/`, appointmentData);
  return response.data;
};

// Delete an appointment
export const deleteAppointment = async (id) => {
  const response = await api.delete(`${APPOINTMENT_BASE}${id}/delete/`);
  return response.data;
};

// Fetch dropdown data
export const getDoctors = async () => {
  const response = await api.get(`${APPOINTMENT_BASE}doctors/`);
  return response.data;
};

export const getPets = async () => {
  const response = await api.get(`${APPOINTMENT_BASE}pets/`);
  return response.data;
};

export const getTreatments = async () => {
  const response = await api.get(`${APPOINTMENT_BASE}treatments/`);
  return response.data;
};
