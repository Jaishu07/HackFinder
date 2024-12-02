import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const randomAvatar = `https://api.dicebear.com/6.x/avataaars/svg?seed=${Math.random()}`;

  const menuItems = [
    { path: '/explore', label: 'Explore' },
    { path: '/idea-generator', label: 'Generate Ideas' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/signup', label: 'Sign Up' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span 
              className="text-2xl font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              HackFinder
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Profile Avatar */}
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/profile')}
            >
              <img 
                src={randomAvatar}
                alt="Profile"
                className="w-8 h-8 rounded-full bg-white/10"
              />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/50 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div 
                className="flex items-center px-3 py-2 space-x-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-md cursor-pointer"
                onClick={() => {
                  navigate('/profile');
                  setIsOpen(false);
                }}
              >
                <img 
                  src={randomAvatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full bg-white/10"
                />
                <span className="text-base font-medium">Profile</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
