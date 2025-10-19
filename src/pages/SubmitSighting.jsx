import React, { useState } from 'react';
import { Upload, MapPin, Calendar, Clock, FileText, Camera, Send } from 'lucide-react';
import AccessControlModal from '../components/AccessControlModal';

const SubmitSighting = ({ hasAccess }) => {
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [formData, setFormData] = useState({
    datetime: '',
    city: '',
    state: '',
    country: '',
    shape: '',
    duration: '',
    description: '',
    latitude: '',
    longitude: ''
  });
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // Access Control Check
  React.useEffect(() => {
    if (!hasAccess) {
      setShowAccessModal(true);
    }
  }, [hasAccess]);

  if (!hasAccess) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-2xl px-4">
            <div className="text-6xl mb-4">🔒🛸</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Feature</h2>
            <p className="text-gray-600 text-lg mb-6">
              Submit UFO sightings and earn tokens! This feature requires payment.
            </p>
            <button
              onClick={() => setShowAccessModal(true)}
              className="bg-ufx-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
            >
              Unlock Submissions
            </button>
          </div>
        </div>
        {showAccessModal && (
          <AccessControlModal 
            onClose={() => setShowAccessModal(false)} 
            requiredFeature="Sighting Submissions"
          />
        )}
      </>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      images.forEach((img, index) => {
        formDataToSend.append(`image${index}`, img.file);
      });

      const response = await fetch('https://ufx-backend.onrender.com/api/sightings', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('✅ Sighting submitted successfully! You will earn UFX tokens once verified.');
        setFormData({
          datetime: '',
          city: '',
          state: '',
          country: '',
          shape: '',
          duration: '',
          description: '',
          latitude: '',
          longitude: ''
        });
        setImages([]);
      } else {
        alert('❌ Failed to submit sighting. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting sighting:', error);
      alert('❌ Error submitting sighting. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Upload className="text-ufx-primary" size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Submit a UFO Sighting
          </h1>
          <p className="text-xl text-gray-600">
            Share your experience and earn UFX tokens for verified submissions
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date & Time */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar size={18} className="mr-2" />
                Date & Time of Sighting *
              </label>
              <input
                type="datetime-local"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <MapPin size={18} className="mr-2" />
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Phoenix"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  State/Province *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="AZ"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="USA"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Coordinates (Optional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Latitude (Optional)
                </label>
                <input
                  type="number"
                  step="any"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  placeholder="33.4484"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Longitude (Optional)
                </label>
                <input
                  type="number"
                  step="any"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  placeholder="-112.0740"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Shape */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Shape/Appearance *
              </label>
              <select
                name="shape"
                value={formData.shape}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              >
                <option value="">Select shape...</option>
                <option value="circle">Circle</option>
                <option value="disk">Disk</option>
                <option value="light">Light</option>
                <option value="sphere">Sphere</option>
                <option value="triangle">Triangle</option>
                <option value="cigar">Cigar</option>
                <option value="formation">Formation</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock size={18} className="mr-2" />
                Duration *
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                placeholder="e.g., 2 minutes, 30 seconds"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <FileText size={18} className="mr-2" />
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Describe what you saw in detail..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Camera size={18} className="mr-2" />
                Upload Photos/Videos (Optional - Earn more tokens!)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-ufx-primary transition-all">
                <input
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="text-gray-400 mb-2" size={48} />
                  <span className="text-gray-600 font-medium">Click to upload files</span>
                  <span className="text-sm text-gray-500 mt-1">
                    PNG, JPG, MP4 up to 10MB
                  </span>
                </label>
              </div>

              {/* Image Previews */}
              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reward Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-900 mb-2">💰 Earn Tokens!</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• 100 UFX for basic submission</li>
                <li>• +50 UFX per photo/video</li>
                <li>• +200 UFX if verified by AI</li>
                <li>• +500 UFX if trending on social media</li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Submit Sighting</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitSighting;