import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiMongodb, SiFirebase, SiFlask, SiDjango, 
  SiOpenai, SiKubernetes, SiPostgresql, SiRedis, SiSpring } from 'react-icons/si';

const techStackIcons = {
  'React': FaReact,
  'Node.js': FaNodeJs,
  'Python': FaPython,
  'AWS': FaAws,
  'Docker': FaDocker,
  'TensorFlow': SiTensorflow,
  'MongoDB': SiMongodb,
  'Firebase': SiFirebase,
  'Flask': SiFlask,
  'Django': SiDjango,
  'OpenAI': SiOpenai,
  'Kubernetes': SiKubernetes,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
  'Spring': SiSpring
};

const ProjectIdeaCard = ({ idea }) => {
  const renderTechStack = (stack) => {
    return stack.map((tech, index) => {
      const Icon = techStackIcons[tech];
      return Icon ? (
        <div key={index} className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
          <Icon className="text-lg" />
          <span className="text-sm">{tech}</span>
        </div>
      ) : (
        <div key={index} className="bg-white/10 px-3 py-1 rounded-full">
          <span className="text-sm">{tech}</span>
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-bold mb-4 text-primary">{idea.name}</h3>
      
      <div className="mb-6">
        <p className="text-gray-300">{idea.description}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 text-white">Key Features</h4>
        <ul className="space-y-2">
          {idea.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span className="text-primary">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 text-white">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {renderTechStack(idea.techStack)}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2 text-white">Impact</h4>
        <p className="text-gray-300">{idea.impact}</p>
      </div>
    </motion.div>
  );
};

export default ProjectIdeaCard;
