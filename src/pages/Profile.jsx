import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  const randomAvatar = `https://api.dicebear.com/6.x/avataaars/svg?seed=${Math.random()}`;

  return (
    <div className="min-h-screen min-w-screen w-full h-full pt-16 bg-black overflow-x-hidden">
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="bg-white/5 backdrop-blur-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <img
                src={randomAvatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h1 
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              User Profile
            </motion.h1>
            
            <motion.p 
              className="text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              @username
            </motion.p>

            <div className="w-full space-y-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2">Bio</h3>
                <p className="text-gray-400">No bio added yet</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2">Skills</h3>
                <p className="text-gray-400">No skills added yet</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
