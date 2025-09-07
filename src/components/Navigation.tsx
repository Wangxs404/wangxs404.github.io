import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'home', command: 'cd ~' },
    { path: '/research', label: 'research', command: 'cd ~/research' },
    { path: '/development', label: 'development', command: 'cd ~/development' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b border-green-600 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Terminal Prompt */}
          <div className="flex items-center space-x-4">
            <span className="text-green-300 text-sm">axis@terminal:~$</span>
            <span className="text-green-400">ls -la</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-mono transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-green-300 underline'
                    : 'text-green-400 hover:text-green-300 hover:underline'
                }`}
              >
                <span className="text-green-600 mr-2">&gt;</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 hover:text-green-300 focus:outline-none"
            >
              {isOpen ? '[close]' : '[menu]'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-green-600">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-mono transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-green-300 underline'
                      : 'text-green-400 hover:text-green-300 hover:underline'
                  }`}
                >
                  <span className="text-green-600 mr-2">$</span>
                  {item.command}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;