import React, { useState, useEffect } from 'react';
import { getSightingsStats } from '../services/api';
import { TrendingUp, Shapes } from 'lucide-react';

const StatsDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const result = await getSightingsStats();
      console.log('📊 Stats API response:', result);
      
      // Handle different response structures
      const data = result.data?.data || result.data;
      console.log('📊 Processed stats:', data);
      setStats(data);
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

  // Parse top shapes
  let topShapes = [];
  if (stats.top_shapes) {
    if (Array.isArray(stats.top_shapes)) {
      topShapes = stats.top_shapes.slice(0, 5);
    } else if (typeof stats.top_shapes === 'object') {
      topShapes = Object.entries(stats.top_shapes)
        .map(([shape, count]) => ({ shape, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    }
  }

  const totalSightings = stats.total_sightings || stats.total || stats.count || 0;

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
              {totalSightings.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {topShapes.length > 0 && (
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Shapes className="text-ufx-secondary" size={20} />
            <h3 className="font-bold">Top Shapes</h3>
          </div>
          
          <div className="space-y-2">
            {topShapes.map((item, index) => {
              const shape = item.shape || item[0] || 'Unknown';
              const count = item.count || item[1] || 0;
              return (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm capitalize">{shape}</span>
                  <span className="font-semibold text-ufx-primary">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;