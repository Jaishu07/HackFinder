import React from 'react';
import { motion } from 'framer-motion';



const HackathonCard = ({ hackathon }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative h-48">
      <img 
        src={hackathon.image} 
        alt={hackathon.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold">
        {hackathon.prize}
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {hackathon.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{hackathon.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{hackathon.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <span>📅 {hackathon.date}</span>
        <span>📍 {hackathon.location}</span>
      </div>
      
      <a 
        href={hackathon.officialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 "
      >
        Official Page
      </a>
    </div>
  </motion.div>
);

export default HackathonCard;