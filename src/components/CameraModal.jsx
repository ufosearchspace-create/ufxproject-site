import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const CameraModal = ({ camera, onClose }) => {
  if (!camera) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2001] p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full">
        <div className="border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-ufx-primary">{camera.name}</h2>
            <p className="text-sm text-gray-600">{camera.location}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {camera.embed_url ? (
            <iframe src={camera.embed_url} className="w-full h-[500px] rounded-lg" allowFullScreen title={camera.name} />
          ) : (
            <div className="bg-gray-100 h-[500px] flex items-center justify-center rounded-lg">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Stream not available</p>
                {camera.external_url && (
                  <a href={camera.external_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-ufx-primary text-white px-4 py-2 rounded hover:bg-ufx-secondary transition-colors">
                    <span>View on External Site</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CameraModal; 
