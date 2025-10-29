import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

const SearchPanel = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    shape: '',
    country: '',
    state: '',
    city: '',
    year_from: '',
    year_to: '',
    duration_min: '',
    duration_max: ''
  });

  const shapes = ['light', 'circle', 'triangle', 'fireball', 'sphere', 'disk', 'oval', 'other'];

  const handleChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearFilters = () => {
    const emptyFilters = {
      shape: '',
      country: '',
      state: '',
      city: '',
      year_from: '',
      year_to: '',
      duration_min: '',
      duration_max: ''
    };
    setFilters(emptyFilters);
    if (onFilterChange) {
      onFilterChange(emptyFilters);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="text-ufx-primary" size={20} />
          <h3 className="font-bold text-lg">Search Filters</h3>
        </div>
        <button
          onClick={clearFilters}
          className="text-sm text-gray-600 hover:text-ufx-primary flex items-center space-x-1"
        >
          <X size={16} />
          <span>Clear</span>
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Shape</label>
          <select
            value={filters.shape}
            onChange={(e) => handleChange('shape', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
          >
            <option value="">All Shapes</option>
            {shapes.map(shape => (
              <option key={shape} value={shape}>{shape.charAt(0).toUpperCase() + shape.slice(1)}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            type="text"
            value={filters.country}
            onChange={(e) => handleChange('country', e.target.value)}
            placeholder="e.g. us, uk, ca, de, fr"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State/Region</label>
          <input
            type="text"
            value={filters.state}
            onChange={(e) => handleChange('state', e.target.value)}
            placeholder="e.g. ca, ny, tx, bayern"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            value={filters.city}
            onChange={(e) => handleChange('city', e.target.value)}
            placeholder="e.g. San Diego, London, Berlin"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year Range</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              value={filters.year_from}
              onChange={(e) => handleChange('year_from', e.target.value)}
              placeholder="From"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
            <input
              type="number"
              value={filters.year_to}
              onChange={(e) => handleChange('year_to', e.target.value)}
              placeholder="To"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration (seconds)</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              value={filters.duration_min}
              onChange={(e) => handleChange('duration_min', e.target.value)}
              placeholder="Min"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
            <input
              type="number"
              value={filters.duration_max}
              onChange={(e) => handleChange('duration_max', e.target.value)}
              placeholder="Max"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel; 
