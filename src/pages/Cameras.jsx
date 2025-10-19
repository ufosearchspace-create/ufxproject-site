import React, { useState } from 'react';
import { Camera, MapPin, Eye, AlertCircle, ExternalLink } from 'lucide-react';
import AccessControlModal from '../components/AccessControlModal';

const Cameras = ({ hasAccess }) => {
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [showAccessModal, setShowAccessModal] = useState(false);

  // Provjeri pristup prije učitavanja
  React.useEffect(() => {
    if (!hasAccess) {
      setShowAccessModal(true);
    }
  }, [hasAccess]);

  // Access Control Check
  if (!hasAccess) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-2xl px-4">
            <div className="text-6xl mb-4">🔒📹</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Feature</h2>
            <p className="text-gray-600 text-lg mb-6">
              Access to Live UFO Cameras requires payment. Choose your access method to unlock 6 live camera feeds.
            </p>
            <button
              onClick={() => setShowAccessModal(true)}
              className="bg-ufx-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
            >
              Unlock Cameras
            </button>
          </div>
        </div>
        {showAccessModal && (
          <AccessControlModal 
            onClose={() => setShowAccessModal(false)} 
            requiredFeature="Live Cameras"
          />
        )}
      </>
    );
  }

  // Live camera data sa YouTube embedovima
  const cameras = [
    {
      id: 1,
      name: 'CFHT–Asahi StarCam',
      location: 'Maunakea, Hawaii, USA',
      lat: 19.8260,
      lon: -155.4747,
      status: 'online',
      viewers: 247,
      embedUrl: 'https://www.youtube.com/embed/qJ8lYplu1y0?autoplay=1&mute=1',
      source: 'CFHT/Asahi via YouTube',
      sourceUrl: 'https://www.cfht.hawaii.edu/',
      thumbnail: 'https://picsum.photos/seed/cam1/400/300'
    },
    {
      id: 2,
      name: 'Sky Tower - Wilmington',
      location: 'Wilmington, North Carolina, USA',
      lat: 34.2257,
      lon: -77.9447,
      status: 'online',
      viewers: 312,
      embedUrl: 'https://www.youtube.com/embed/-1lAxsTsHcQ?autoplay=1&mute=1',
      source: 'Wilmington Tower via YouTube',
      sourceUrl: 'https://www.youtube.com/watch?v=-1lAxsTsHcQ',
      thumbnail: 'https://picsum.photos/seed/cam2/400/300'
    },
    {
      id: 3,
      name: 'SFA Observatory All-Sky',
      location: 'Texas, USA',
      lat: 31.6018,
      lon: -94.6682,
      status: 'online',
      viewers: 421,
      embedUrl: 'https://www.youtube.com/embed/njldYTU00zY?autoplay=1&mute=1',
      source: 'SFA Observatory via YouTube',
      sourceUrl: 'https://www.youtube.com/watch?v=njldYTU00zY',
      thumbnail: 'https://picsum.photos/seed/cam3/400/300'
    },
    {
      id: 4,
      name: 'Night Sky Live 4K',
      location: 'Norfolk, USA',
      lat: 36.8508,
      lon: -76.2859,
      status: 'online',
      viewers: 1247,
      embedUrl: 'https://www.youtube.com/embed/mL7mzoBBQkY?autoplay=1&mute=1',
      source: 'Independent Creator via YouTube',
      sourceUrl: 'https://www.youtube.com/watch?v=mL7mzoBBQkY',
      thumbnail: 'https://picsum.photos/seed/cam4/400/300'
    },
    {
      id: 5,
      name: 'All-Sky Camera 4K',
      location: 'USA',
      lat: 37.0902,
      lon: -95.7129,
      status: 'online',
      viewers: 892,
      embedUrl: 'https://www.youtube.com/embed/NUrjHFxmR4E?autoplay=1&mute=1',
      source: 'Independent Creator via YouTube',
      sourceUrl: 'https://www.youtube.com/watch?v=NUrjHFxmR4E',
      thumbnail: 'https://picsum.photos/seed/cam5/400/300'
    },
    {
      id: 6,
      name: 'UAF Fairbanks Aurora Cam',
      location: 'Fairbanks, Alaska, USA',
      lat: 64.8378,
      lon: -147.7164,
      status: 'online',
      viewers: 567,
      embedUrl: 'https://www.youtube.com/embed/O52zDyxg5QI?autoplay=1&mute=1',
      source: 'Explore.org via YouTube',
      sourceUrl: 'https://www.youtube.com/watch?v=O52zDyxg5QI',
      thumbnail: 'https://picsum.photos/seed/cam6/400/300'
    }
  ];

  const onlineCameras = cameras.filter(c => c.status === 'online').length;
  const totalViewers = cameras.reduce((sum, c) => sum + c.viewers, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Camera className="text-ufx-primary" size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live UFO Sky Cameras
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch live camera feeds from strategic locations around the world. 
            Spot something? Submit a sighting and earn tokens!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {onlineCameras} 🟢
            </div>
            <div className="text-gray-600">Cameras Online</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-ufx-primary mb-2">
              {totalViewers.toLocaleString()}
            </div>
            <div className="text-gray-600">Active Viewers</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-ufx-primary mb-2">24/7</div>
            <div className="text-gray-600">Monitoring</div>
          </div>
        </div>

        {/* Camera Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cameras.map((camera) => (
            <div
              key={camera.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCamera(camera)}
            >
              <div className="relative">
                <img
                  src={camera.thumbnail}
                  alt={camera.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                  camera.status === 'online'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}>
                  {camera.status === 'online' ? '🟢 LIVE' : '🔴 OFFLINE'}
                </div>
                {camera.status === 'online' && (
                  <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Eye size={12} />
                    <span>{camera.viewers} watching</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{camera.name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-1" />
                  <span>{camera.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Attribution Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2 text-lg">📹 Camera Sources</h3>
          <p className="text-blue-800 text-sm mb-3">
            All camera feeds are embedded from public sources with proper attribution:
          </p>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• YouTube streams are embedded per YouTube Terms of Service</li>
            <li>• Explore.org cameras are embedded with permission (their ToS allows embedding)</li>
            <li>• Observatory feeds are publicly available for educational use</li>
          </ul>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Add Your Camera?</h2>
          <p className="mb-6">
            Host a camera in your area and earn UFX tokens for every view!
          </p>
          <button 
            onClick={() => {
              alert('📹 Camera hosting program launching Q1 2026!\n\nFollow @UFX_Project for updates.');
              window.open('https://x.com/UFX_Project', '_blank');
            }}
            className="bg-white text-ufx-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            📹 Become a Host
          </button>
        </div>
      </div>

      {/* Camera Modal */}
      {selectedCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedCamera.name}</h2>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <MapPin size={14} className="mr-1" />
                  {selectedCamera.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedCamera(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              {selectedCamera.status === 'online' ? (
                <>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                    <iframe
                      src={selectedCamera.embedUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={selectedCamera.name}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Eye size={16} className="mr-1" />
                      {selectedCamera.viewers} watching
                    </span>
                    <span>📍 {selectedCamera.lat.toFixed(4)}, {selectedCamera.lon.toFixed(4)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Source:</p>
                        <p className="text-sm font-semibold text-gray-900">{selectedCamera.source}</p>
                      </div>
                      <a
                        href={selectedCamera.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-ufx-primary hover:text-ufx-secondary text-sm font-semibold"
                      >
                        <span>Visit Source</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <AlertCircle className="mx-auto text-gray-400 mb-2" size={48} />
                    <p className="text-gray-600 font-semibold">Camera Offline</p>
                    <p className="text-sm text-gray-500">Check back later!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cameras;