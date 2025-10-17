import axios from 'axios';

const API_BASE_URL = 'https://ufx-backend-1.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Sightings API
export const getSightings = async (params = {}) => {
  const response = await api.get('/sightings', { params });
  return response.data;
};

export const getSightingById = async (id) => {
  const response = await api.get(`/sightings/${id}`);
  return response.data;
};

export const getSightingsMap = async (params = {}) => {
  const response = await api.get('/sightings/map', { params });
  return response.data;
};

export const getSightingsStats = async () => {
  const response = await api.get('/sightings/stats');
  return response.data;
};

// Cameras API
export const getCameras = async () => {
  const response = await api.get('/cameras');
  return response.data;
};

export const getCameraById = async (id) => {
  const response = await api.get(`/cameras/${id}`);
  return response.data;
};

export const getNearbyCameras = async (lat, lon, radius = 50) => {
  const response = await api.get('/cameras/nearby', {
    params: { lat, lon, radius }
  });
  return response.data;
};

export default api;