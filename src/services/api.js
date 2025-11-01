import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://ufx-backend-1.onrender.com';

// Helper za error handling
const handleApiError = (error) => {
  console.error('API Error:', error);
  throw error;
};

// =====================
// SIGHTINGS ENDPOINTS
// =====================

export const getSightingsMap = async (filters, onProgress) => {
  try {
    // Koristi COMBINED endpoint za obe tabele
    const response = await axios.get(`${API_URL}/api/combined/map`, {
      params: filters,
      onDownloadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress({
            progress: percentCompleted,
            loaded: progressEvent.loaded,
            total: progressEvent.total
          });
        }
      }
    });
    return response;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getSightingDetails = async (sightingId) => {
  try {
    // Koristi combined endpoint za detalje
    const response = await axios.get(`${API_URL}/api/combined/${sightingId}`);
    return response.data;
  } catch (error) {
    // Fallback na stari endpoint
    try {
      const response = await axios.get(`${API_URL}/api/sightings/${sightingId}`);
      return response.data;
    } catch (fallbackError) {
      return handleApiError(error);
    }
  }
};

// Alias za getSightingDetails (za kompatibilnost)
export const getSightingById = getSightingDetails;

export const getSightingsStats = async () => {
  try {
    // Pokušaj combined stats prvo
    const response = await axios.get(`${API_URL}/api/combined/stats`);
    return response.data;
  } catch (error) {
    // Fallback na stari endpoint
    try {
      const response = await axios.get(`${API_URL}/api/sightings/stats`);
      return response.data;
    } catch (fallbackError) {
      return handleApiError(error);
    }
  }
};

export const getSightings = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_URL}/api/sightings`, {
      params: filters
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// =====================
// REPORTS ENDPOINTS
// =====================

export const submitReport = async (reportData) => {
  try {
    const response = await axios.post(`${API_URL}/api/reports`, reportData);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getReportDetails = async (reportId) => {
  try {
    const response = await axios.get(`${API_URL}/api/reports/${reportId}`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getReportsNearby = async (lat, lon, radius = 50) => {
  try {
    const response = await axios.get(`${API_URL}/api/reports/nearby`, {
      params: { lat, lon, radius }
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// =====================
// CAMERAS ENDPOINTS
// =====================

export const getCameras = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/cameras`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getCamerasNearby = async (lat, lon, radius = 50) => {
  try {
    const response = await axios.get(`${API_URL}/api/cameras/nearby`, {
      params: { lat, lon, radius }
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getCameraDetails = async (cameraId) => {
  try {
    const response = await axios.get(`${API_URL}/api/cameras/${cameraId}`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Alias za getCameraDetails (za kompatibilnost)
export const getCameraById = getCameraDetails;

// =====================
// AUTH ENDPOINTS
// =====================

export const checkAccess = async (walletAddress) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/check-access`, {
      address: walletAddress
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// =====================
// UTILITY FUNCTIONS
// =====================

export const searchSightings = async (searchQuery) => {
  try {
    const response = await axios.get(`${API_URL}/api/sightings`, {
      params: {
        search: searchQuery,
        limit: 50
      }
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getShapes = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/sightings/shapes`);
    return response.data;
  } catch (error) {
    // Return mock data if endpoint doesn't exist
    return {
      success: true,
      data: ['circle', 'triangle', 'light', 'fireball', 'disk', 'sphere', 'oval', 'cigar', 'formation', 'other']
    };
  }
};

// Export default API object for backward compatibility
export default {
  getSightings,
  getSightingsMap,
  getSightingDetails,
  getSightingById,  // Alias
  getSightingsStats,
  submitReport,
  getReportDetails,
  getReportsNearby,
  getCameras,
  getCamerasNearby,
  getCameraDetails,
  getCameraById,  // Alias
  checkAccess,
  searchSightings,
  getShapes
};
