import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, Calendar, Camera, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { getSightingById } from '../services/api';

const DetailModal = ({ sightingId, onClose, onOpenCamera }) => {
  const [sighting, setSighting] = useState(null);
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (sightingId) {
      loadSightingDetails();
    }
  }, [sightingId]);

  const loadSightingDetails = async () => {
    setLoading(true);
    try {
      const result = await getSightingById(sightingId);
      console.log('🔍 Sighting detail result:', result);
      
      // Handle different response structures
      const data = result.data?.data || result.data;
      console.log('🔍 Processed sighting data:', data);
      console.log('🖼️ Images:', data.images);
      setSighting(data);
      
    } catch (error) {
      console.error('Error loading sighting details:', error);
    } finally {
      setLoading(false);
    }
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (sighting?.images && currentImageIndex < sighting.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Parse images - they can be JSON string or array
  const getImages = () => {
    if (!sighting?.images) return [];
    
    try {
      // If it's a string, parse it
      if (typeof sighting.images === 'string') {
        const parsed = JSON.parse(sighting.images);
        return Array.isArray(parsed) ? parsed : [];
      }
      // If it's already an array
      if (Array.isArray(sighting.images)) {
        return sighting.images;
      }
    } catch (err) {
      console.error('Error parsing images:', err);
    }
    
    return [];
  };

  const images = getImages();

  if (!sightingId) return null;

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold text-ufx-primary">Sighting Details</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 transition-colors hover:bg-gray-100 p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-ufx-primary mx-auto"></div>
              <p className="mt-4 text-gray-600 font-medium">Loading details...</p>
            </div>
          ) : sighting ? (
            <div className="p-6 space-y-6">
              {/* Images Section - NOVO! */}
              {images.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Camera className="text-ufx-secondary" size={20} />
                    <h3 className="font-bold text-lg">Images ({images.length})</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {images.map((imageUrl, index) => (
                      <div 
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer group hover:ring-2 hover:ring-ufx-primary transition-all"
                      >
                        <img 
                          src={imageUrl}
                          alt={`Sighting image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                          <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="text-ufx-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Date & Time</div>
                    <div className="font-semibold">
                      {sighting.datetime || sighting.date || sighting.occurred || sighting.date_event || 'N/A'}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="text-ufx-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="font-semibold">
                      {sighting.duration || sighting.duration_seconds || 'N/A'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="text-ufx-primary mt-1 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="font-semibold">
                    {[sighting.city, sighting.state, sighting.country].filter(Boolean).join(', ') || 'Unknown'}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {(sighting.latitude || sighting.lat) && (sighting.longitude || sighting.lon) ? (
                      <>
                        📍 {parseFloat(sighting.latitude || sighting.lat).toFixed(4)}, {parseFloat(sighting.longitude || sighting.lon).toFixed(4)}
                      </>
                    ) : 'Coordinates unavailable'}
                  </div>
                </div>
              </div>

              {/* Shape Badge */}
              {sighting.shape && (
                <div>
                  <div className="text-sm text-gray-600 mb-2">Shape</div>
                  <div className="inline-block bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-md">
                    {sighting.shape}
                  </div>
                </div>
              )}

              {/* Description */}
              {(sighting.description || sighting.comments || sighting.summary) && (
                <div>
                  <div className="text-sm text-gray-600 mb-2 font-semibold">Description</div>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm whitespace-pre-wrap border-l-4 border-ufx-primary">
                    {sighting.description || sighting.comments || sighting.summary}
                  </div>
                </div>
              )}

              {/* Source Link */}
              {sighting.source_url && (
                <div>
                  <a 
                    href={sighting.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-ufx-primary hover:text-ufx-secondary transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Original Report</span>
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-600">Sighting not found</div>
          )}
        </div>
      </div>

      {/* Lightbox for Images */}
      {lightboxOpen && images.length > 0 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[3000] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                disabled={currentImageIndex === 0}
                className={`absolute left-4 text-white p-3 rounded-full transition-all ${
                  currentImageIndex === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:bg-white hover:bg-opacity-20 hover:scale-110'
                }`}
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                disabled={currentImageIndex === images.length - 1}
                className={`absolute right-4 text-white p-3 rounded-full transition-all ${
                  currentImageIndex === images.length - 1 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:bg-white hover:bg-opacity-20 hover:scale-110'
                }`}
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Image */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
          >
            <img 
              src={images[currentImageIndex]}
              alt={`Sighting image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23333" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Not Available%3C/text%3E%3C/svg%3E';
              }}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;