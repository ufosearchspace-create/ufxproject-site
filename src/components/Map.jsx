import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import { getSightingsMap } from '../services/api';

const Map = ({ filters, onSightingClick }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize map
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([39.8283, -98.5795], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapInstanceRef.current);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    loadSightings();
  }, [filters]);

  const loadSightings = async () => {
    setLoading(true);
    try {
      const result = await getSightingsMap(filters);
      
      // Remove old markers
      if (markersLayerRef.current) {
        mapInstanceRef.current.removeLayer(markersLayerRef.current);
      }

      // Create marker cluster group
      const markers = L.markerClusterGroup({
        chunkedLoading: true,
        maxClusterRadius: 50
      });

      // Add markers
      result.data.forEach(sighting => {
        if (sighting.latitude && sighting.longitude) {
          const marker = L.marker([sighting.latitude, sighting.longitude]);
          
          const popupContent = `
            <div class="p-3">
              <h4 class="font-bold text-ufx-primary mb-2">${sighting.shape || 'Unknown'}</h4>
              <p class="text-sm"><strong>Date:</strong> ${sighting.datetime || 'N/A'}</p>
              <p class="text-sm"><strong>Location:</strong> ${sighting.city || 'Unknown'}, ${sighting.state || ''}</p>
              <p class="text-sm"><strong>Duration:</strong> ${sighting.duration_seconds || 'N/A'}s</p>
              <button 
                class="mt-2 w-full bg-ufx-primary text-white px-3 py-1 rounded hover:bg-ufx-secondary transition-colors text-sm"
                onclick="window.dispatchEvent(new CustomEvent('sighting-detail', { detail: ${sighting.id} }))"
              >
                View Details
              </button>
            </div>
          `;
          
          marker.bindPopup(popupContent);
          markers.addLayer(marker);
        }
      });

      mapInstanceRef.current.addLayer(markers);
      markersLayerRef.current = markers;

    } catch (error) {
      console.error('Error loading sightings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleSightingDetail = (e) => {
      if (onSightingClick) {
        onSightingClick(e.detail);
      }
    };

    window.addEventListener('sighting-detail', handleSightingDetail);
    return () => window.removeEventListener('sighting-detail', handleSightingDetail);
  }, [onSightingClick]);

  return (
    <div className="relative h-full">
      {loading && (
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow z-[1000]">
          <span className="text-sm">Loading sightings...</span>
        </div>
      )}
      <div ref={mapRef} className="h-full w-full rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;