import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Filter } from 'lucide-react';
import Map from '../components/Map';
import SearchPanel from '../components/SearchPanel';
import StatsDashboard from '../components/StatsDashboard';
import DetailModal from '../components/DetailModal';
import CameraModal from '../components/CameraModal';

const MapView = () => {
  const [filters, setFilters] = useState({});
  const [selectedSighting, setSelectedSighting] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* DESKTOP LAYOUT - Side by Side */}
      <div className="hidden lg:flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="w-80 bg-gray-50 p-4 overflow-y-auto space-y-4 border-r">
          <SearchPanel onFilterChange={setFilters} />
          <StatsDashboard />
        </div>

        {/* Desktop Map */}
        <div className="flex-1 p-4">
          <Map filters={filters} onSightingClick={setSelectedSighting} />
        </div>
      </div>

      {/* MOBILE LAYOUT - Map on Top, Drawer on Bottom */}
      <div className="lg:hidden flex flex-col h-full relative">
        {/* Mobile Map Container */}
        <div 
          className="flex-1 relative transition-all duration-300"
          style={{ 
            height: drawerOpen ? '40%' : '75%' 
          }}
        >
          <div className="absolute inset-0 p-2">
            <Map filters={filters} onSightingClick={setSelectedSighting} />
          </div>
        </div>

        {/* Bottom Drawer */}
        <div 
          className="bg-white shadow-2xl rounded-t-3xl transition-all duration-300 ease-out overflow-hidden flex flex-col"
          style={{ 
            height: drawerOpen ? '60%' : '25%',
            minHeight: '100px'
          }}
        >
          {/* Drawer Handle */}
          <div 
            className="flex flex-col items-center py-3 cursor-pointer active:bg-gray-100 border-b"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            {/* Drag Handle Bar */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-2"></div>
            
            {/* Header */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-ufx-primary" />
              <span className="font-bold text-gray-900">
                {drawerOpen ? 'Hide Filters' : 'Show Filters & Stats'}
              </span>
              {drawerOpen ? (
                <ChevronDown size={20} className="text-gray-600" />
              ) : (
                <ChevronUp size={20} className="text-gray-600" />
              )}
            </div>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {drawerOpen ? (
              <>
                <SearchPanel onFilterChange={setFilters} />
                <StatsDashboard />
              </>
            ) : (
              <div className="text-center text-gray-500 text-sm py-4">
                👆 Tap to expand filters and statistics
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedSighting && (
        <DetailModal 
          sightingId={selectedSighting} 
          onClose={() => setSelectedSighting(null)} 
          onOpenCamera={setSelectedCamera} 
        />
      )}

      {selectedCamera && (
        <CameraModal 
          camera={selectedCamera} 
          onClose={() => setSelectedCamera(null)} 
        />
      )}
    </div>
  );
};

export default MapView;
