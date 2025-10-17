import React, { useState, useEffect } from 'react';
import { getSightingsStats } from '../services/api';
import { TrendingUp, MapPin, Shapes } from 'lucide-react';

const StatsDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const result = await getSightingsStats();
      setStats(result.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-4 bg-white rounded-lg shadow">Loading stats...</div>;
  }

  if (!stats) return null;

  const topShapes = Object.entries(stats.top_shapes || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-3">
          <TrendingUp className="text-ufx-primary" size={20} />
          <h3 className="font-bold text-lg">Statistics</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600">Total Sightings</div>
            <div className="text-2xl font-bold text-ufx-primary">
              {stats.total_sightings?.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Shapes className="text-ufx-secondary" size={20} />
          <h3 className="font-bold">Top Shapes</h3>
        </div>
        
        <div className="space-y-2">
          {topShapes.map(([shape, count]) => (
            <div key={shape} className="flex justify-between items-center">
              <span className="text-sm capitalize">{shape}</span>
              <span className="font-semibold text-ufx-primary">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;