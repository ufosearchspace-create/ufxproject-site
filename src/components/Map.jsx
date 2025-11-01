import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import { getSightingsMap } from '../services/api';
import DataLoadingModal from './DataLoadingModal';
import ProgressBar from './ProgressBar';

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom UFO marker icon
const ufoIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDI1IDQxIj48cGF0aCBmaWxsPSIjMjU2M2ViIiBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDYuOSAxMi41IDI4LjUgMTIuNSAyOC41czEyLjUtMjEuNiAxMi41LTI4LjVDMjUgNS42IDE5LjQgMCAxMi41IDB6bTAgMTdjLTIuNSAwLTQuNS0yLTQuNS00LjVzMi00LjUgNC41LTQuNSA0LjUgMiA0LjUgNC41LTIgNC41LTQuNSA0LjV6Ii8+PC9zdmc+',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const Map = ({ filters, onSightingClick }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [allSightings, setAllSightings] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [progress, setProgress] = useState({ progress: 0, loaded: 0, total: 0, message: '' });

  // Initialize map
  useEffect(() => {
    if (!mapInstanceRef.current && mapRef.current) {
      console.log('🗺️ Initializing map...');
      mapInstanceRef.current = L.map(mapRef.current).setView([39.8283, -98.5795], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapInstanceRef.current);

      console.log('✅ Map initialized!');
      
      // Show loading modal after map is ready
      setShowLoadingModal(true);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Apply filters ONLY when data is loaded AND filters change
  useEffect(() => {
    if (dataLoaded && allSightings.length > 0) {
      console.log('🔍 Data is loaded, now applying filters...');
      applyFilters();
    }
  }, [filters, dataLoaded]);

  const handleLoadingOptionSelect = (option) => {
    setShowLoadingModal(false);
    loadAllSightings(option);
  };

  const loadAllSightings = async (option) => {
    setLoading(true);
    setDataLoaded(false);
    setProgress({ progress: 0, loaded: 0, total: 0, message: 'Initializing...' });
    
    try {
      // Build filters based on selected loading option
      const loadingFilters = {};
      
      switch (option) {
        case 'with_images':
          loadingFilters.has_image = true;
          setProgress({ ...progress, message: 'Loading sightings with images...' });
          break;
        case 'with_images_and_descriptions':
          loadingFilters.has_image = true;
          loadingFilters.has_description = true;
          setProgress({ ...progress, message: 'Loading sightings with images & descriptions...' });
          break;
        case 'with_descriptions':
          loadingFilters.has_description = true;
          setProgress({ ...progress, message: 'Loading sightings with descriptions...' });
          break;
        case 'all':
        default:
          setProgress({ ...progress, message: 'Loading all sightings...' });
          break;
      }
      
      console.log('📡 Fetching sightings from API with option:', option);
      console.log('📡 Loading filters:', loadingFilters);
      
      const result = await getSightingsMap(loadingFilters, (progressInfo) => {
        setProgress({
          progress: progressInfo.progress || 0,
          loaded: progressInfo.loaded,
          total: progressInfo.total,
          message: `Loading sightings... ${progressInfo.loaded ? `(${(progressInfo.loaded / 1024 / 1024).toFixed(2)} MB)` : ''}`
        });
      });
      
      console.log('✅ API Result:', result);
      
      // Handle different response structures
      let sightings = [];
      if (Array.isArray(result.data)) {
        sightings = result.data;
      } else if (result.data && Array.isArray(result.data.data)) {
        sightings = result.data.data;
      } else if (result.data && result.data.sightings) {
        sightings = result.data.sightings;
      }
      
      console.log('🎯 Total sightings loaded:', sightings.length);
      
      if (sightings.length > 0) {
        console.log('📊 First sighting sample:', sightings[0]);
        console.log('📅 Date fields:', {
          datetime: sightings[0].datetime,
          date: sightings[0].date,
          occurred: sightings[0].occurred
        });
        
        // ✅ KOMPLETNI DEBUG LOGOVI:
        console.log('🔍 ==== FULL FIRST SIGHTING ====');
        console.log(JSON.stringify(sightings[0], null, 2));
        console.log('🔍 ==== ALL AVAILABLE KEYS ====');
        console.log(Object.keys(sightings[0]));
        console.log('🔍 =============================');
      }
      
      setAllSightings(sightings);
      setDataLoaded(true);
      
    } catch (error) {
      console.error('❌ Error loading sightings:', error);
      setDataLoaded(true);
    } finally {
      setLoading(false);
      setProgress({ progress: 100, loaded: 0, total: 0, message: 'Complete!' });
    }
  };

  const applyFilters = () => {
    console.log('🔍 Applying filters:', filters);
    console.log('📊 Starting with', allSightings.length, 'total sightings');
    
    let filtered = [...allSightings];

    // Filter by shape
    if (filters.shape) {
      filtered = filtered.filter(s => 
        (s.shape || '').toLowerCase() === filters.shape.toLowerCase()
      );
      console.log(`📊 After shape filter (${filters.shape}):`, filtered.length);
    }

    // Filter by country
    if (filters.country) {
      filtered = filtered.filter(s => 
        (s.country || '').toLowerCase().includes(filters.country.toLowerCase())
      );
      console.log(`📊 After country filter (${filters.country}):`, filtered.length);
    }

    // Filter by state
    if (filters.state) {
      filtered = filtered.filter(s => 
        (s.state || '').toLowerCase().includes(filters.state.toLowerCase())
      );
      console.log(`📊 After state filter (${filters.state}):`, filtered.length);
    }

    // Filter by city
    if (filters.city) {
      filtered = filtered.filter(s => 
        (s.city || '').toLowerCase().includes(filters.city.toLowerCase())
      );
      console.log(`📊 After city filter (${filters.city}):`, filtered.length);
    }

   // Filter by year range
if (filters.year_from || filters.year_to) {
  const yearFrom = filters.year_from ? parseInt(filters.year_from) : 0;
  const yearTo = filters.year_to ? parseInt(filters.year_to) : 9999;
  
  console.log(`🔍 Year filter range: ${yearFrom} - ${yearTo}`);
  
  let matchCount = 0;
  let skipCount = 0;
  let noDateCount = 0;
  
  filtered = filtered.filter((s, index) => {
    // Try all possible date field names - date_event is the correct one!
    const dateStr = s.date_event || s.datetime || s.date || s.occurred || s.year || s.sighted || s.reported || '';
    
    if (!dateStr || String(dateStr).trim() === '') {
      noDateCount++;
      if (noDateCount <= 3) {
        console.log(`⚠️ Sighting #${index} has NO date field`);
      }
      return false; // EXCLUDE sightings without dates from year filter
    }
    
    // Try multiple date parsing methods
    let year = null;
    
    // Method 1: Direct year field
    if (s.year) {
      year = parseInt(s.year);
    }
    
    // Method 2: Try to parse ISO format (YYYY-MM-DD)
    if (!year) {
      const isoMatch = String(dateStr).match(/(\d{4})-\d{2}-\d{2}/);
      if (isoMatch) {
        year = parseInt(isoMatch[1]);
        if (matchCount === 0) console.log(`✅ Parsed year from date_event: "${dateStr}" → ${year}`);
      }
    }
    
    // Method 3: Try to find any 4-digit year
    if (!year) {
      const yearMatch = String(dateStr).match(/\b(19|20)\d{2}\b/);
      if (yearMatch) {
        year = parseInt(yearMatch[0]);
      }
    }
    
    // Method 4: Try Date.parse
    if (!year) {
      const parsed = new Date(dateStr);
      if (!isNaN(parsed.getTime())) {
        year = parsed.getFullYear();
      }
    }
    
    if (!year) {
      skipCount++;
      return false; // EXCLUDE unparseable dates
    }
    
    const matches = year >= yearFrom && year <= yearTo;
    
    if (matches) {
      matchCount++;
      // Debug first few matches
      if (matchCount <= 5) {
        console.log(`✅ Match #${matchCount}: "${dateStr}" → Year ${year}`);
      }
    }
    
    return matches;
  });
  
  console.log(`📊 After year filter (${yearFrom}-${yearTo}):`);
  console.log(`   ✅ ${matchCount} matches`);
  console.log(`   ⚠️ ${noDateCount} with no date (excluded)`);
  console.log(`   ❌ ${skipCount} couldn't parse (excluded)`);
  console.log(`   📊 Total: ${filtered.length}`);
}

    // Filter by duration
    if (filters.duration_min || filters.duration_max) {
      filtered = filtered.filter(s => {
        const duration = parseFloat(s.duration_seconds || s.duration || 0);
        
        const minDur = filters.duration_min ? parseFloat(filters.duration_min) : 0;
        const maxDur = filters.duration_max ? parseFloat(filters.duration_max) : Infinity;
        
        return duration >= minDur && duration <= maxDur;
      });
      console.log(`📊 After duration filter (${filters.duration_min}-${filters.duration_max}):`, filtered.length);
    }

    // Filter by has_image
    if (filters.has_image) {
      filtered = filtered.filter(s => {
        // Check if sighting has an image
        return s.image_url || s.image || s.images || s.has_image;
      });
      console.log(`📊 After has_image filter:`, filtered.length);
    }

    // Filter by has_description
    if (filters.has_description) {
      filtered = filtered.filter(s => {
        // Check if sighting has a description (non-empty string)
        const description = s.description || s.summary || s.text || '';
        return description && String(description).trim().length > 0;
      });
      console.log(`📊 After has_description filter:`, filtered.length);
    }

    console.log('✅ Final filtered count:', filtered.length);
    displaySightings(filtered);
  };

  const displaySightings = (sightings) => {
    if (!mapInstanceRef.current) {
      console.warn('⚠️ Map not initialized yet');
      return;
    }
    
    // Remove old markers
    if (markersLayerRef.current) {
      mapInstanceRef.current.removeLayer(markersLayerRef.current);
      markersLayerRef.current = null;
    }

    const markers = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true
    });

    let markerCount = 0;
    sightings.forEach((sighting, index) => {
      const lat = sighting.latitude || sighting.lat;
      const lon = sighting.longitude || sighting.lon || sighting.lng;
      
      if (lat && lon) {
        try {
          const marker = L.marker(
            [parseFloat(lat), parseFloat(lon)], 
            { icon: ufoIcon }
          );
          
          const city = sighting.city || 'Unknown';
          const state = sighting.state || '';
          const country = sighting.country || '';
          const location = [city, state, country].filter(Boolean).join(', ');
          const date = sighting.datetime || sighting.date || sighting.occurred || 'N/A';
          const duration = sighting.duration_seconds || sighting.duration || 'N/A';
          const shape = sighting.shape || 'Unknown';
          
          const popupContent = `
            <div class="p-3" style="min-width: 200px;">
              <h4 class="font-bold mb-2 capitalize" style="color: #2563eb;">${shape}</h4>
              <p class="text-sm"><strong>Date:</strong> ${date}</p>
              <p class="text-sm"><strong>Location:</strong> ${location}</p>
              <p class="text-sm"><strong>Duration:</strong> ${duration}s</p>
              <button 
                class="view-details-btn mt-2 w-full text-white px-3 py-1 rounded transition-colors text-sm"
                style="background-color: #2563eb;"
                data-sighting-id="${sighting.id}"
              >
                View Details
              </button>
            </div>
          `;
          
          marker.bindPopup(popupContent);
          
          marker.on('popupopen', () => {
            const btn = document.querySelector('.view-details-btn');
            if (btn) {
              btn.addEventListener('click', () => {
                if (onSightingClick) {
                  onSightingClick(sighting.id);
                }
              });
            }
          });
          
          markers.addLayer(marker);
          markerCount++;
        } catch (err) {
          console.error(`Error creating marker for sighting ${index}:`, err);
        }
      }
    });

    console.log(`✅ Displaying ${markerCount} markers`);
    
    if (markerCount > 0) {
      mapInstanceRef.current.addLayer(markers);
      markersLayerRef.current = markers;
      
      if (markers.getBounds && markers.getBounds().isValid()) {
        mapInstanceRef.current.fitBounds(markers.getBounds(), { padding: [50, 50] });
      }
    } else {
      console.warn('⚠️ No sightings match the current filters');
    }
  };

  return (
    <div className="relative h-full">
      {showLoadingModal && (
        <DataLoadingModal
          onSelectOption={handleLoadingOptionSelect}
          onClose={() => setShowLoadingModal(false)}
        />
      )}
      
      {loading && progress.progress !== null && (
        <ProgressBar
          progress={progress.progress}
          message={progress.message}
          loaded={progress.loaded}
          total={progress.total}
        />
      )}
      
      {!loading && dataLoaded && allSightings.length > 0 && (
        <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow z-[1000] text-xs">
          <span className="font-semibold">{allSightings.length.toLocaleString()}</span> total sightings loaded
        </div>
      )}
      <div ref={mapRef} className="h-full w-full rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;