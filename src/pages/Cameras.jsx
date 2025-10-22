import React, { useState } from 'react';
import { Video, MapPin, Wifi, WifiOff, Maximize2, Filter, Clock } from 'lucide-react';

const Cameras = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCamera, setSelectedCamera] = useState(null);

  // Mock camera data - replace with real API
  const cameras = [
    {
      id: 1,
      name: 'Roswell Sky Cam',
      location: 'Roswell, New Mexico, USA',
      status: 'online',
      lat: 33.3943,
      lon: -104.5230,
      thumbnail: 'https://via.placeholder.com/400x225?text=Roswell+Sky+Cam',
      stream: 'https://example.com/stream1',
      viewers: 234,
      lastSighting: '2 days ago'
    },
    {
      id: 2,
      name: 'Area 51 Monitor',
      location: 'Nevada, USA',
      status: 'online',
      lat: 37.2431,
      lon: -115.7930,
      thumbnail: 'https://via.placeholder.com/400x225?text=Area+51+Monitor',
      stream: 'https://example.com/stream2',
      viewers: 1823,
      lastSighting: '5 hours ago'
    },
    {
      id: 3,
      name: 'Phoenix Lights Watch',
      location: 'Phoenix, Arizona, USA',
      status: 'online',
      lat: 33.4484,
      lon: -112.0740,
      thumbnail: 'https://via.placeholder.com/400x225?text=Phoenix+Watch',
      stream: 'https://example.com/stream3',
      viewers: 567,
      lastSighting: '1 week ago'
    },
    {
      id: 4,
      name: 'Hessdalen Observatory',
      location: 'Hessdalen, Norway',
      status: 'online',
      lat: 62.7833,
      lon: 11.1833,
      thumbnail: 'https://via.placeholder.com/400x225?text=Hessdalen+Cam',
      stream: 'https://example.com/stream4',
      viewers: 892,
      lastSighting: '3 days ago'
    },
    {
      id: 5,
      name: 'Sedona Vortex Cam',
      location: 'Sedona, Arizona, USA',
      status: 'online',
      lat: 34.8697,
      lon: -111.7610,
      thumbnail: 'https://via.placeholder.com/400x225?text=Sedona+Vortex',
      stream: 'https://example.com/stream5',
      viewers: 445,
      lastSighting: '12 hours ago'
    },
    {
      id: 6,
      name: 'Rendlesham Forest',
      location: 'Suffolk, UK',
      status: 'online',
      lat: 52.0943,
      lon: 1.4524,
      thumbnail: 'https://via.placeholder.com/400x225?text=Rendlesham+Cam',
      stream: 'https://example.com/stream6',
      viewers: 678,
      lastSighting: '4 days ago'
    },
    {
      id: 7,
      name: 'Bonnybridge Sky',
      location: 'Scotland, UK',
      status: 'maintenance',
      lat: 56.0064,
      lon: -3.8889,
      thumbnail: 'https://via.placeholder.com/400x225?text=Bonnybridge+Cam',
      stream: null,
      viewers: 0,
      lastSighting: '2 weeks ago'
    },
    {
      id: 8,
      name: 'Wycliffe Well',
      location: 'Northern Territory, Australia',
      status: 'online',
      lat: -20.7817,
      lon: 134.2044,
      thumbnail: 'https://via.placeholder.com/400x225?text=Wycliffe+Well',
      stream: 'https://example.com/stream8',
      viewers: 321,
      lastSighting: '6 hours ago'
    },
    {
      id: 9,
      name: 'San Clemente Island',
      location: 'California, USA',
      status: 'online',
      lat: 33.0264,
      lon: -118.5918,
      thumbnail: 'https://via.placeholder.com/400x225?text=San+Clemente',
      stream: 'https://example.com/stream9',
      viewers: 1234,
      lastSighting: '1 hour ago'
    },
    {
      id: 10,
      name: 'Chilbolton Observatory',
      location: 'Hampshire, UK',
      status: 'offline',
      lat: 51.1450,
      lon: -1.4370,
      thumbnail: 'https://via.placeholder.com/400x225?text=Chilbolton+Cam',
      stream: null,
      viewers: 0,
      lastSighting: '1 month ago'
    },
    {
      id: 11,
      name: 'Mount Shasta Watch',
      location: 'California, USA',
      status: 'online',
      lat: 41.4092,
      lon: -122.1949,
      thumbnail: 'https://via.placeholder.com/400x225?text=Mt+Shasta',
      stream: 'https://example.com/stream11',
      viewers: 789,
      lastSighting: '8 hours ago'
    },
    {
      id: 12,
      name: 'Nazca Lines Sky',
      location: 'Peru',
      status: 'online',
      lat: -14.7390,
      lon: -75.1300,
      thumbnail: 'https://via.placeholder.com/400x225?text=Nazca+Lines',
      stream: 'https://example.com/stream12',
      viewers: 456,
      lastSighting: '2 days ago'
    }
  ];

  const filteredCameras = cameras.filter(camera => {
    if (selectedFilter === 'all') return true;
    return camera.status === selectedFilter;
  });

  const onlineCameras = cameras.filter(c => c.status === 'online').length;
  const totalViewers = cameras.reduce((sum, c) => sum + c.viewers, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Video className="text-ufx-primary" size={64} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Live UFO Monitoring Cameras
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch live feeds from strategic locations worldwide known for UFO/UAP activity. 
            Our 24/7 monitoring network captures real-time aerial phenomena.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Video className="text-ufx-primary" size={24} />
                <span className="text-3xl font-bold text-gray-900">{cameras.length}</span>
              </div>
              <div className="text-sm text-gray-600">Total Cameras</div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Wifi className="text-green-500" size={24} />
                <span className="text-3xl font-bold text-green-500">{onlineCameras}</span>
              </div>
              <div className="text-sm text-gray-600">Online Now</div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Video className="text-purple-500" size={24} />
                <span className="text-3xl font-bold text-purple-500">{totalViewers.toLocaleString()}</span>
              </div>
              <div className="text-sm text-gray-600">Active Viewers</div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-600" size={20} />
              <span className="font-semibold text-gray-700">Filter:</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-ufx-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({cameras.length})
              </button>
              <button
                onClick={() => setSelectedFilter('online')}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                  selectedFilter === 'online'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Wifi size={16} />
                <span>Online ({onlineCameras})</span>
              </button>
              <button
                onClick={() => setSelectedFilter('offline')}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                  selectedFilter === 'offline'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <WifiOff size={16} />
                <span>Offline</span>
              </button>
            </div>
          </div>
        </div>

        {/* Camera Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCameras.map(camera => (
            <div
              key={camera.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCamera(camera)}
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={camera.thumbnail}
                  alt={camera.name}
                  className="w-full h-48 object-cover"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 ${
                  camera.status === 'online'
                    ? 'bg-green-500 text-white'
                    : camera.status === 'maintenance'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-red-500 text-white'
                }`}>
                  {camera.status === 'online' ? <Wifi size={12} /> : <WifiOff size={12} />}
                  <span className="uppercase">{camera.status}</span>
                </div>

                {/* Live Badge */}
                {camera.status === 'online' && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>LIVE</span>
                  </div>
                )}

                {/* Expand Icon */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-all">
                  <Maximize2 size={20} />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {camera.name}
                </h3>
                
                <div className="flex items-start space-x-2 text-sm text-gray-600 mb-3">
                  <MapPin className="flex-shrink-0 mt-0.5" size={16} />
                  <span>{camera.location}</span>
                </div>

                {camera.status === 'online' && (
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-purple-600">
                      <Video size={14} />
                      <span className="font-semibold">{camera.viewers} viewers</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock size={14} />
                      <span>Last: {camera.lastSighting}</span>
                    </div>
                  </div>
                )}

                {camera.status === 'maintenance' && (
                  <div className="text-sm text-yellow-600 font-medium">
                    🔧 Under maintenance
                  </div>
                )}

                {camera.status === 'offline' && (
                  <div className="text-sm text-red-600 font-medium">
                    ⚠️ Currently offline
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCameras.length === 0 && (
          <div className="text-center py-12">
            <WifiOff className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No cameras match this filter
            </h3>
            <p className="text-gray-600">
              Try selecting a different filter option.
            </p>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2 text-blue-900">
            📡 About Our Camera Network
          </h3>
          <p className="text-sm text-blue-800 mb-4">
            Our global monitoring network consists of high-resolution cameras positioned at 
            locations with documented UFO/UAP activity. All footage is recorded and archived 
            on the blockchain for transparency and verification.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <strong>✅ 24/7 Monitoring:</strong> Continuous recording day and night
            </div>
            <div>
              <strong>✅ HD Quality:</strong> 1080p minimum resolution
            </div>
            <div>
              <strong>✅ AI Detection:</strong> Automated anomaly detection
            </div>
            <div>
              <strong>✅ Public Access:</strong> All feeds freely available
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedCamera && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCamera(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">{selectedCamera.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-300 mt-1">
                  <MapPin size={14} />
                  <span>{selectedCamera.location}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCamera(null)}
                className="text-white hover:text-gray-300 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Video Stream */}
            <div className="bg-black aspect-video flex items-center justify-center">
              {selectedCamera.status === 'online' ? (
                <div className="text-center text-white">
                  <Video size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">Live Stream</p>
                  <p className="text-sm text-gray-400">
                    Stream URL: {selectedCamera.stream}
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    (Video player integration coming soon)
                  </p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <WifiOff size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Camera Offline</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm">
                <div className={`flex items-center space-x-1 ${
                  selectedCamera.status === 'online' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {selectedCamera.status === 'online' ? <Wifi size={16} /> : <WifiOff size={16} />}
                  <span className="font-semibold">{selectedCamera.status.toUpperCase()}</span>
                </div>
                {selectedCamera.status === 'online' && (
                  <>
                    <div className="text-purple-600 flex items-center space-x-1">
                      <Video size={16} />
                      <span>{selectedCamera.viewers} watching</span>
                    </div>
                    <div className="text-gray-600 flex items-center space-x-1">
                      <Clock size={16} />
                      <span>Last sighting: {selectedCamera.lastSighting}</span>
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => setSelectedCamera(null)}
                className="bg-ufx-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cameras;
