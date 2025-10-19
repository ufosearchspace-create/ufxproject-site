import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Kreiraj mailto link
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const mailtoLink = `mailto:ufosearchspace@gmail.com?subject=${encodeURIComponent(`UFX Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;

    // Simuliraj slanje
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
    }, 1000);
  };

  if (sent) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <div className="text-green-500 text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-600">Your email client should open. We will get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-ufx-primary flex items-center">
            <Mail className="mr-2" size={28} />
            Contact Team
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 text-2xl"
            type="button"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User size={18} className="mr-2" />
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail size={18} className="mr-2" />
              Your Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <MessageSquare size={18} className="mr-2" />
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="How can we help?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us more..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {sending ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;