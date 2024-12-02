import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen min-w-screen w-full h-full pt-16 bg-black overflow-x-hidden">
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
