import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, Calendar, Camera } from 'lucide-react';
import { getSightingById, getNearbyCameras } from '../services/api';

const DetailModal = ({ sightingId, onClose, onOpenCamera }) => {
  const [sighting, setSighting] = useState(null);
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sightingId) {
      loadSightingDetails();
    }
  }, [sightingId]);

  const loadSightingDetails = async () => {
    setLoading(true);
    try {
      const result = await getSightingById(sightingId);
      setSighting(result.data);

      if (result.data.latitude && result.data.longitude) {
        const camerasResult = await getNearbyCameras(
          result.data.latitude,
          result.data.longitude,
          50
        );
        setCameras(camerasResult.data || []);
      }
    } catch (error) {
      console.error('Error loading sighting details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!sightingId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-ufx-primary">Sighting Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>

        {loading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ufx-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading details...</p>
          </div>
        ) : sighting ? (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Calendar className="text-ufx-primary mt-1" size={20} />
                <div>
                  <div className="text-sm text-gray-600">Date & Time</div>
                  <div className="font-semibold">{sighting.datetime || 'N/A'}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-ufx-primary mt-1" size={20} />
                <div>
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold">{sighting.duration_seconds || 'N/A'} seconds</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 col-span-2">
                <MapPin className="text-ufx-primary mt-1" size={20} />
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-semibold">{sighting.city}, {sighting.state}, {sighting.country}</div>
                  <div className="text-sm text-gray-500">{sighting.latitude?.toFixed(4)}, {sighting.longitude?.toFixed(4)}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Shape</div>
              <div className="inline-block bg-ufx-primary text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {sighting.shape || 'Unknown'}
              </div>
            </div>
            {sighting.comments && (
              <div>
                <div className="text-sm text-gray-600 mb-2">Description</div>
                <div className="bg-gray-50 p-4 rounded-lg text-sm">{sighting.comments}</div>
              </div>
            )}
            {cameras.length > 0 && (
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Camera className="text-ufx-secondary" size={20} />
                  <h3 className="font-bold">Nearby Live Cameras ({cameras.length})</h3>
                </div>
                <div className="space-y-2">
                  {cameras.map((camera) => (
                    <div key={camera.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <div className="font-semibold text-sm">{camera.name}</div>
                        <div className="text-xs text-gray-600">{camera.distance_km?.toFixed(1)} km away</div>
                      </div>
                      <button onClick={() => onOpenCamera(camera)} className="bg-ufx-secondary text-white px-3 py-1 rounded text-sm hover:bg-ufx-primary transition-colors">
                        View Stream
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 text-center text-gray-600">Sighting not found</div>
        )}
      </div>
    </div>
  );
};

export default DetailModal;