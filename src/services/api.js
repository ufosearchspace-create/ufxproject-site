export const getSightingsMap = async (filters, onProgress) => {
  try {
    // Koristi NOVI combined endpoint
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
    console.error('Error fetching sightings:', error);
    throw error;
  }
};

// Za pojedinačne sightinge
export const getSightingDetails = async (sightingId) => {
  try {
    const response = await axios.get(`${API_URL}/api/combined/${sightingId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sighting details:', error);
    throw error;
  }
};
