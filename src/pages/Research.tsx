import React from 'react';
import researchData from '../data/research.json';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono">
      {/* Terminal Header */}
      <div className="border-b border-terminal-green/30 p-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm opacity-70">~/research</span>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>cat research_overview.txt</span>
          </div>
          <div className="ml-4 space-y-2">
            <div className="text-2xl font-bold">Academic Research Areas</div>
            <div className="opacity-80 max-w-4xl">
              Computational fluid dynamics and renewable energy systems,
              focusing on offshore wind energy and multiphase flow phenomena.
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>ls -la research_areas/</span>
          </div>
          <div className="ml-4 space-y-6">
            {researchData.map((area) => (
              <div key={area.id} className="border border-terminal-green/30 p-4 rounded">
                <div className="space-y-3">
                  <div className="text-xl font-bold text-terminal-green">
                    [{area.id}] {area.title}
                  </div>
                  
                  <div className="opacity-80 leading-relaxed">
                    {area.description}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm opacity-70">Technologies & Methods:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                      {area.technologies.map((tech) => (
                        <div key={tech} className="flex items-center space-x-2">
                          <span className="text-terminal-green">•</span>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>cat research_stats.json</span>
          </div>
          <div className="ml-4 border border-terminal-green/30 p-4 rounded">
            <div className="space-y-4">
              <div className="text-lg font-bold">Research Impact & Statistics</div>
              <div className="opacity-80">
                Contributing to renewable energy technologies through computational methods
                and numerical simulations bridging theory with practical applications.
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="text-terminal-green font-bold">Publications:</div>
                  <div>15+ peer-reviewed papers</div>
                </div>
                <div className="space-y-1">
                  <div className="text-terminal-green font-bold">Patents:</div>
                  <div>7+ granted patents</div>
                </div>
                <div className="space-y-1">
                  <div className="text-terminal-green font-bold">Software:</div>
                  <div>4+ copyrights</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>cat collaboration_info.txt</span>
          </div>
          <div className="ml-4 border border-terminal-green/30 p-4 rounded">
            <div className="space-y-3">
              <div className="text-lg font-bold">Research Collaboration</div>
              <div className="opacity-80">
                Open to collaborations in computational fluid dynamics, renewable energy,
                and interdisciplinary research projects.
              </div>
              
              <div className="space-y-2">
                <div className="text-sm opacity-70">Contact for collaboration:</div>
                <a
                  href="mailto:contact@axiswang.com"
                  className="block hover:bg-terminal-green/10 p-2 rounded transition-colors"
                >
                  → contact@axiswang.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;