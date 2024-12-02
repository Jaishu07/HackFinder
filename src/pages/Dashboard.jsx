import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen min-w-screen w-full h-full pt-16 bg-black overflow-x-hidden">
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Your Hackathons</h2>
            <p className="text-gray-400">No hackathons registered yet.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming Events</h2>
            <p className="text-gray-400">No upcoming events.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Your Profile</h2>
            <p className="text-gray-400">Complete your profile to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
