import React from 'react';
import { Link } from 'react-router-dom';
import personalData from '../data/personal.json';
// import researchData from '../data/research.json';
// import productsData from '../data/products.json';
// import skillsData from '../data/skills.json';

const Home: React.FC = () => {
  // const featuredProducts = productsData.slice(0, 3);
  // const frontendSkills = skillsData.filter(skill => skill.category === 'frontend').slice(0, 4);
  // const researchSkills = skillsData.filter(skill => skill.category === 'research').slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono">
      {/* Terminal Header */}
      <div className="border-b border-terminal-green/30 p-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm opacity-70">~/personal-homepage</span>
        </div>
      </div>

      {/* Main Terminal Content */}
      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span className="typing-animation">whoami</span>
          </div>
          <div className="ml-4 space-y-2">
            <div className="text-2xl font-bold">{personalData.name}</div>
            <div className="text-lg opacity-80">{personalData.title}</div>
            <div className="opacity-70 max-w-2xl">{personalData.description}</div>
          </div>
        </div>

        {/* Navigation Commands */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>ls -la sections/</span>
          </div>
          <div className="ml-4 space-y-1">
            <Link to="/research" className="block hover:bg-terminal-green/10 p-2 rounded transition-colors">
              drwxr-xr-x research/     # Academic research and publications
            </Link>
            <Link to="/development" className="block hover:bg-terminal-green/10 p-2 rounded transition-colors">
              drwxr-xr-x development/  # Independent projects and products
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>cat contact.txt</span>
          </div>
          <div className="ml-4 space-y-1">
            {personalData.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-terminal-green/10 p-1 rounded transition-colors"
              >
                {social.name}: {social.url}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;