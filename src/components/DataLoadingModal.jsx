import React, { useState } from 'react';
import { X, AlertTriangle, Image, FileText, Database } from 'lucide-react';

const DataLoadingModal = ({ onSelectOption, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const loadingOptions = [
    {
      id: 'all',
      title: 'Load All Data',
      description: 'Load all sightings without filtering',
      icon: Database,
      warning: true,
      warningText: 'This may take longer and use more bandwidth'
    },
    {
      id: 'with_images',
      title: 'Only Sightings with Images',
      description: 'Load only sightings that have associated images',
      icon: Image,
      warning: false
    },
    {
      id: 'with_images_and_descriptions',
      title: 'Sightings with Images & Descriptions',
      description: 'Load sightings that have both images and descriptions',
      icon: FileText,
      warning: false
    },
    {
      id: 'with_descriptions',
      title: 'Only Sightings with Descriptions',
      description: 'Load only sightings that have detailed descriptions',
      icon: FileText,
      warning: false
    }
  ];

  const handleConfirm = () => {
    if (selectedOption) {
      onSelectOption(selectedOption);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Choose Data Loading Options</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-gray-600 mb-4">
            Select how you want to load UFO sightings data:
          </p>

          {loadingOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedOption === option.id
                    ? 'border-ufx-primary bg-blue-50 shadow-md'
                    : 'border-gray-300 hover:border-ufx-primary hover:shadow'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    selectedOption === option.id ? 'bg-ufx-primary' : 'bg-gray-200'
                  }`}>
                    <IconComponent
                      size={24}
                      className={selectedOption === option.id ? 'text-white' : 'text-gray-600'}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                    {option.warning && (
                      <div className="mt-2 flex items-start space-x-2 text-yellow-700 bg-yellow-50 p-2 rounded">
                        <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{option.warningText}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === option.id
                        ? 'border-ufx-primary bg-ufx-primary'
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedOption}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedOption
                ? 'bg-ufx-primary text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Load Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataLoadingModal;
