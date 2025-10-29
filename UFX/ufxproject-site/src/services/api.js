import axios from 'axios';

const BASE_URL = 'https://ufx-backend-1.onrender.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSightingsMap = async (filters = {}) => {
  const params = new URLSearchParams();
  
  // Dodaj samo parametre koji imaju vrijednost
  Object.keys(filters).forEach(key => {
    if (filters[key] !== '' && filters[key] !== null && filters[key] !== undefined) {
      params.append(key, filters[key]);
    }
  });
  
  console.log('🔍 Sending filters to API:', filters);
  console.log('🔗 API URL:', `/sightings/map?${params.toString()}`);
  
  return api.get(`/sightings/map?${params.toString()}`);
};

export const getSightingsStats = async () => {
  return api.get('/sightings/stats');
};

export const getSightingById = async (id) => {
  return api.get(`/sightings/${id}`);
};

export const getNearbyCameras = async (lat, lon, radius = 50) => {
  return api.get(`/cameras/nearby?latitude=${lat}&longitude=${lon}&radius=${radius}`);
};

export default api;