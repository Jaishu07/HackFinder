import React from 'react';
import { motion } from 'framer-motion';
import HackathonCard from '../components/HackathonCard';

const hackathons = [
  {
    id: 1,
    title: "Global AI Hackathon 2024",
    description: "Global Hack Week: Data Week",
    date: "Friday December 6, 2024 12:00PM to Dec 12, 1:00PM EST",
    location: "Event is hosted online",
    // prize: "",
    image: "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/213/153/thumb/IG.jpg?1728917585",
    officialLink: "https://events.mlh.io/events/11596",
    tags: ["AI", "Machine Learning", "Web3"]
  },
  {
    id: 2,
    title: "Climate Tech Challenge",
    description: "Innovative solutions for climate change",
    date: "April 1-3, 2024",
    location: "Hybrid",
    prize: "$30,000",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    officialLink: "https://climatehack.tech",
    tags: ["Climate", "Sustainability", "IoT"]
  },
  {
    id: 3,
    title: "Web3 DeFi Hackathon",
    description: "Building the future of decentralized finance",
    date: "March 22-24, 2024",
    location: "Virtual",
    prize: "$40,000",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    officialLink: "https://web3hack.dev",
    tags: ["Web3", "DeFi", "Blockchain"]
  },
  {
    id: 4,
    title: "Health Tech Innovation",
    description: "Revolutionary healthcare solutions",
    date: "April 8-10, 2024",
    location: "Virtual",
    prize: "$35,000",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    officialLink: "https://healthhack.io",
    tags: ["Healthcare", "AI", "Mobile"]
  },
    
  {
        "id": 6,
        "title": "Hacklytics 2024",
        "description": "A 36-hour data science-focused hackathon hosted by Georgia Tech.",
        "date": "February 9-11, 2024",
        "location": "Atlanta, GA and online",
        "image": "https://hacklytics.io/static/images/hacklytics_logo.png",
        "officialLink": "https://hacklytics.io",
        "tags": ["Data Science", "Sustainability", "Sports"]
      },
      {
        "id": 7,
        "title": "Meta Quest Presence Platform Hackathon",
        "description": "Build innovative mixed reality applications using the Meta Presence Platform.",
        "date": "March 25 - May 13, 2024",
        "location": "Online",
        "image": "https://metaquesthackathon.devpost.com/meta-quest.png",
        "officialLink": "https://metaquesthackathon.devpost.com",
        "tags": ["Mixed Reality", "AR/VR", "Gaming"]
      },
      {
        "id": 8,
        "title": "MLH December Month-Long Hackathon",
        "description": "A month-long challenge hosted by Major League Hacking for developers worldwide.",
        "date": "December 1-31, 2024",
        "location": "Online",
        "image": "https://mlh-december-hackathon.devpost.com/mlh-logo.png",
        "officialLink": "https://mlh-december-hackathon.devpost.com",
        "tags": ["Open Source", "Web Development", "AI"]
      },
      {
        "id": 9,
        "title": "Hack the North 2024",
        "description": "Canada's largest hackathon hosted at the University of Waterloo.",
        "date": "September 13-15, 2024",
        "location": "Waterloo, ON, Canada",
        "image": "https://hackthenorth.com/images/logo.png",
        "officialLink": "https://hackthenorth.com",
        "tags": ["AI", "Fintech", "Education"]
      },
      {
        "id": 10,
        "title": "HackMIT 2024",
        "description": "MIT's annual student-run hackathon featuring innovative projects and workshops.",
        "date": "September 14-15, 2024",
        "location": "Cambridge, MA, USA",
        "image": "https://hackmit.org/images/logo.png",
        "officialLink": "https://hackmit.org",
        "tags": ["Blockchain", "Healthcare", "Sustainability"]
      }
    
    
  
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [locationFilter, setLocationFilter] = React.useState('');

  const filteredHackathons = React.useMemo(() => {
    return hackathons.filter(hackathon => {
      const matchesSearch = (
        hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );

      const matchesLocation = !locationFilter || 
        hackathon.location.toLowerCase().includes(locationFilter.toLowerCase());

      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, locationFilter]);

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
            Latest Hackathons
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover upcoming hackathons from around the world. Join the community and showcase your skills.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex gap-4 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search hackathons by title, description, or tags..."
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              className="px-4 py-2 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="virtual">Virtual</option>
              <option value="hybrid">Hybrid</option>
              <option value="in-person">In-Person</option>
            </select>
          </div>
        </div>

        {filteredHackathons.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No hackathons found matching your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHackathons.map((hackathon) => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
