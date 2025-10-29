import React, { useState } from 'react';
import { User, Wallet, Award, Eye, Upload, Settings } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    username: 'ufosearchspace-create',
    walletAddress: '0x742d...5f4e',
    ufxBalance: 1250,
    totalSubmissions: 23,
    verifiedSubmissions: 18,
    totalViews: 8432,
    rank: 'Gold Contributor',
    joinDate: '2025-01-15',
    recentActivity: [
      { date: '2025-10-15', action: 'Submitted sighting', reward: '+15 UFX', location: 'Phoenix, AZ' },
      { date: '2025-10-12', action: 'Sighting verified', reward: '+5 UFX', location: 'Roswell, NM' },
      { date: '2025-10-08', action: 'Comment upvoted', reward: '+2 UFX', location: '-' },
      { date: '2025-10-05', action: 'Submitted sighting', reward: '+15 UFX', location: 'San Diego, CA' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <User className="text-ufx-primary" size={48} />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{userData.username}</h1>
              <div className="flex items-center space-x-4 text-sm opacity-90">
                <span className="flex items-center">
                  <Wallet size={16} className="mr-1" />
                  {userData.walletAddress}
                </span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {userData.rank}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{userData.ufxBalance}</div>
              <div className="text-sm opacity-90">UFX Tokens</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Upload className="mx-auto text-ufx-primary mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-900">{userData.totalSubmissions}</div>
            <div className="text-sm text-gray-600">Total Submissions</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Award className="mx-auto text-green-500 mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-900">{userData.verifiedSubmissions}</div>
            <div className="text-sm text-gray-600">Verified</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Eye className="mx-auto text-purple-500 mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-900">{userData.totalViews.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Wallet className="mx-auto text-ufx-secondary mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-900">{userData.ufxBalance}</div>
            <div className="text-sm text-gray-600">UFX Balance</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b">
            <div className="flex space-x-1 p-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-ufx-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('submissions')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'submissions'
                    ? 'bg-ufx-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                My Submissions
              </button>
              <button
                onClick={() => setActiveTab('wallet')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'wallet'
                    ? 'bg-ufx-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Wallet
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'settings'
                    ? 'bg-ufx-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Settings
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Activity</h2>
                <div className="space-y-4">
                  {userData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-4">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{activity.action}</div>
                        <div className="text-sm text-gray-600">
                          {activity.location !== '-' && `📍 ${activity.location} • `}
                          {activity.date}
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">{activity.reward}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'submissions' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">My Submissions</h2>
                <p className="text-gray-600">Your submitted sightings will appear here...</p>
              </div>
            )}

            {activeTab === 'wallet' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Wallet</h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Balance:</span>
                    <span className="text-3xl font-bold text-ufx-primary">{userData.ufxBalance} UFX</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-ufx-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                      💰 Buy More Tokens
                    </button>
                    <button className="bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                      📤 Withdraw
                    </button>
                  </div>
                </div>
                <h3 className="font-bold mb-4 text-gray-900">Transaction History</h3>
                <p className="text-gray-600">No recent transactions</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Notifications
                    </label>
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-ufx-primary"
                      defaultChecked
                    />
                    <span className="ml-2 text-gray-700">Send me email updates</span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Visibility
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all">
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
