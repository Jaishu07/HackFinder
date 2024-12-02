import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ProjectIdeaCard from '../components/ProjectIdeaCard';

const genAI = new GoogleGenerativeAI("AIzaSyBj42IUQuzZATeK1YEjJgS8V4D4svokPAs");

const IdeaGenerator = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState(null);
  const [error, setError] = useState(null);

  const parseAIResponse = (text) => {
    try {
      const projects = [];
      const projectSections = text.split(/Project \d+:/g).filter(Boolean);
      
      projectSections.forEach(section => {
        const nameMatch = section.match(/(?:Name:|Title:)?\s*([^\n]+)/);
        const descriptionMatch = section.match(/Description:\s*([^\n]+(?:\n[^\n]+)*?)(?=\n[A-Z]|$)/i);
        const featuresMatch = section.match(/Key Features:([^\n]+(?:\n[^A-Z][^\n]+)*)/i);
        const techStackMatch = section.match(/Technical Stack:([^\n]+(?:\n[^A-Z][^\n]+)*)/i);
        const impactMatch = section.match(/Potential Impact:([^\n]+(?:\n[^A-Z][^\n]+)*)/i);

        if (nameMatch) {
          const features = featuresMatch ? 
            featuresMatch[0].split('\n')
              .map(f => f.trim())
              .filter(f => f && !f.startsWith('-'))
              .map(f => f.replace(/^[•*-]\s*/, '')) : [];

          const techStack = techStackMatch ?
            techStackMatch[0].split(/[,\n]/)
              .map(t => t.trim())
              .filter(t => t && !t.startsWith('-'))
              .map(t => t.replace(/^[•*-]\s*/, '')) : [];

          projects.push({
            name: nameMatch[1].trim(),
            description: descriptionMatch ? descriptionMatch[1].trim() : '',
            features: features,
            techStack: techStack,
            impact: impactMatch ? impactMatch[1].trim() : ''
          });
        }
      });

      return projects;
    } catch (err) {
      console.error('Error parsing AI response:', err);
      return null;
    }
  };

  const generateIdeas = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `Generate 3 innovative project ideas for this hackathon: ${url}

      For each project provide:
      1. Project Name: A catchy and descriptive name
      2. Description: A clear 2-3 sentence overview
      3. Key Features: 3-4 main features
      4. Technical Stack: List of technologies (choose from: React, Node.js, Python, AWS, Docker, TensorFlow, MongoDB, Firebase, Flask, Django, OpenAI, Kubernetes, PostgreSQL, Redis, Spring)
      5. Potential Impact: One sentence about the project's potential impact

      Format each project clearly and avoid using asterisks or bullet points.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const parsedIdeas = parseAIResponse(text);
      if (parsedIdeas && parsedIdeas.length > 0) {
        setIdeas(parsedIdeas);
      } else {
        setError("Failed to parse the AI response. Please try again.");
      }
    } catch (err) {
      setError("Failed to generate ideas. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen w-full h-full pt-24 pb-12 bg-black overflow-x-hidden">
      <div className="w-full h-full px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            AI Project Idea Generator
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter a hackathon URL and let AI help you generate innovative project ideas tailored to the hackathon's theme.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex gap-4 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Enter hackathon URL..."
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={generateIdeas}
              disabled={loading || !url}
              className={`px-6 py-2 rounded-lg font-medium ${
                loading || !url
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/80'
              } text-white transition-colors`}
            >
              {loading ? 'Generating...' : 'Generate Ideas'}
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-400 text-center mb-8">
            {error}
          </div>
        )}

        {ideas && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <ProjectIdeaCard key={index} idea={idea} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaGenerator;
