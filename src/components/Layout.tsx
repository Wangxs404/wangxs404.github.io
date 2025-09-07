import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Terminal Header */}
      <div className="border-b border-green-600 p-4">
        <div className="flex items-center gap-2 text-green-300">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-4 text-sm">axis@terminal:~$</span>
        </div>
      </div>
      
      <Navigation />
      
      <main className="flex-1 p-6">
        {children}
      </main>
      
      {/* Terminal Footer */}
      <div className="border-t border-green-600 p-4 text-center text-green-600 text-sm">
        <p>© 2024 Axis Wang | Built with Terminal Aesthetics</p>
      </div>
    </div>
  );
};

export default Layout;