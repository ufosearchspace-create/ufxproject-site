import axios from 'axios';

const BASE_URL = 'https://ufx-backend-1.onrender.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSightingsMap = async (filters = {}, onProgress = null) => {
  const params = new URLSearchParams();
  
  // Add only parameters that have a value
  Object.keys(filters).forEach(key => {
    if (filters[key] !== '' && filters[key] !== null && filters[key] !== undefined && filters[key] !== false) {
      params.append(key, filters[key]);
    }
  });
  
  console.log('🔍 Sending filters to API:', filters);
  console.log('🔗 API URL:', `/sightings/map?${params.toString()}`);
  
  const config = {};
  
  // Add progress tracking if callback is provided
  if (onProgress && typeof onProgress === 'function') {
    config.onDownloadProgress = (progressEvent) => {
      if (progressEvent.lengthComputable) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress({
          progress: percentCompleted,
          loaded: progressEvent.loaded,
          total: progressEvent.total
        });
      } else {
        // If total is not available, just report loaded bytes
        onProgress({
          progress: null,
          loaded: progressEvent.loaded,
          total: null
        });
      }
    };
  }
  
  return api.get(`/sightings/map?${params.toString()}`, config);
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