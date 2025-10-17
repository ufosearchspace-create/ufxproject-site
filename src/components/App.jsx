import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Map from './components/Map';
import SearchPanel from './components/SearchPanel';
import StatsDashboard from './components/StatsDashboard';
import DetailModal from './components/DetailModal';
import CameraModal from './components/CameraModal';

function App() {
  const [filters, setFilters] = useState({});
  const [selectedSighting, setSelectedSighting] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(null);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      
      <div className="flex-1 flex overflow-hidden">
        <div className="w-80 bg-gray-50 p-4 overflow-y-auto space-y-4">
          <SearchPanel onFilterChange={setFilters} />
          <StatsDashboard />
        </div>

        <div className="flex-1 p-4">
          <Map filters={filters} onSightingClick={setSelectedSighting} />
        </div>
      </div>

      {selectedSighting && (
        <DetailModal sightingId={selectedSighting} onClose={() => setSelectedSighting(null)} onOpenCamera={setSelectedCamera} />
      )}

      {selectedCamera && (
        <CameraModal camera={selectedCamera} onClose={() => setSelectedCamera(null)} />
      )}
    </div>
  );
}

export default App;
