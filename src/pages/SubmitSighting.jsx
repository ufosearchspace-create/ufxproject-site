import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Clock, Upload, CheckCircle } from 'lucide-react';

const SubmitSighting = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    city: '',
    country: '',
    shape: '',
    duration: '',
    description: '',
    email: '',
    photos: []
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const shapes = [
    'Circle', 'Triangle', 'Sphere', 'Disk', 'Cigar', 'Rectangle',
    'Oval', 'Formation', 'Light', 'Fireball', 'Unknown', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Implement actual submission to backend/blockchain
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Sighting submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          date: '',
          time: '',
          location: '',
          city: '',
          country: '',
          shape: '',
          duration: '',
          description: '',
          email: '',
          photos: []
        });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit sighting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={80} />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sighting Submitted!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Thank you for contributing to the UFX Network. Your sighting will be reviewed 
            and added to our database.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            💡 You'll receive a confirmation email once your sighting is verified.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Camera className="text-ufx-primary" size={64} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Submit UFO Sighting
          </h1>
          <p className="text-lg text-gray-600">
            Share your UFO/UAP experience with the community. All submissions are 
            verified and added to our blockchain database.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="mr-2" size={18} />
                Date of Sighting *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Clock className="mr-2" size={18} />
                Time *
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="mr-2" size={18} />
              Location (Address or Coordinates) *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., 123 Main St or 40.7128° N, 74.0060° W"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>

          {/* City & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="e.g., Los Angeles"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Country *
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="e.g., United States"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Shape & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Shape *
              </label>
              <select
                name="shape"
                value={formData.shape}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              >
                <option value="">Select shape...</option>
                {shapes.map(shape => (
                  <option key={shape} value={shape}>{shape}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Duration *
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g., 5 minutes, 30 seconds"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what you saw in detail... (movement, color, behavior, etc.)"
              required
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Be as detailed as possible. Include information about weather conditions, 
              other witnesses, and any unusual effects.
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Your Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Optional: We'll send you a confirmation when your sighting is verified.
            </p>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <Upload className="mr-2" size={18} />
              Photos/Videos (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-ufx-primary transition-colors">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Camera className="text-gray-400 mb-2" size={40} />
                <span className="text-sm text-gray-600">
                  Click to upload photos or videos
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  PNG, JPG, MP4 up to 10MB each
                </span>
              </label>
              {formData.photos.length > 0 && (
                <div className="mt-4 text-sm text-green-600">
                  ✅ {formData.photos.length} file(s) selected
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-ufx-primary hover:bg-blue-700 text-white shadow-lg'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                '📡 Submit Sighting'
              )}
            </button>
          </div>

          {/* Privacy Notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-600">
            <strong>Privacy Notice:</strong> Your submission will be stored on the blockchain 
            for transparency and immutability. Personal information (email) is optional and 
            stored securely. Anonymous submissions are welcome.
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitSighting;
