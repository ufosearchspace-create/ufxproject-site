import React from 'react';
import { Loader2 } from 'lucide-react';

const ProgressBar = ({ progress, message, total, loaded }) => {
  const percentage = Math.min(100, Math.max(0, progress || 0));

  return (
    <div className="fixed top-4 right-4 bg-white px-6 py-4 rounded-lg shadow-xl z-[1000] min-w-[300px]">
      <div className="flex items-center space-x-3 mb-2">
        <Loader2 className="animate-spin text-ufx-primary" size={20} />
        <span className="text-sm font-semibold text-gray-900">
          {message || 'Loading sightings...'}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-ufx-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      {/* Progress Info */}
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>{percentage.toFixed(0)}%</span>
        {total != null && loaded != null && (
          <span>{loaded.toLocaleString()} / {total.toLocaleString()}</span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
