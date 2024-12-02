import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Earth from './components/Earth';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import IdeaGenerator from './pages/IdeaGenerator';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full-screen h-full-screen">
      <div className="absolute w-full-screen h-full-screen inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Stars 
              radius={500} 
              depth={60} 
              count={2000} 
              factor={7} 
              saturation={0}
              fade
              speed={1}
            />
            <Earth />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="mt-32 relative z-10 h-full-screen flex flex-col items-center justify-center">
        <motion.div 
          className="max-w-2xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Global Hackathon <span>🧑‍💻</span><br />
            Events Explorer & <span className="text-primary">Generat Idea 🚀</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Discover real-time events and data visualization from selected regions around the world. 
            Experience the power of interactive global mapping.
          </motion.p>

          <motion.div 
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            {/* <select className="w-96 px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
              <option value="" disabled selected>Select your region</option>
              <option value="na">North America</option>
              <option value="sa">South America</option>
              <option value="eu">Europe</option>
              <option value="as">Asia</option>
              <option value="af">Africa</option>
              <option value="oc">Oceania</option>
            </select> */}

            <motion.button 
              onClick={() => navigate('/explore')}
              className="w-96 px-8 py-3 bg-primary text-black font-semibold rounded-lg uppercase tracking-wider hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="mb-32 relative z-0 w-full h-full-screen flex-1 bg-gradient-to-b from-black to-gray-900"></div>

    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-x-hidden bg-black text-white">
        <Navbar />
        <main className="flex-1 relative w-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/idea-generator" element={<IdeaGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;