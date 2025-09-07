import { useState, useEffect } from 'react';
import { Product, Skill } from '../types';

export default function Development() {
  const [products, setProducts] = useState<Product[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Load products data
    import('../data/products.json').then((data) => {
      setProducts(data.default);
    });

    // Load skills data
    import('../data/skills.json').then((data) => {
      setSkills(data.default.filter(skill => 
        skill.category === 'frontend' || 
        skill.category === 'backend' || 
        skill.category === 'tools'
      ));
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono">
      {/* Terminal Header */}
      <div className="border-b border-terminal-green/30 p-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm opacity-70">~/development</span>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>cat development_overview.txt</span>
          </div>
          <div className="ml-4 space-y-2">
            <div className="text-2xl font-bold">Independent Development</div>
            <div className="opacity-80">
              Personal projects, tech stack, and development portfolio.
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>ls -la projects/</span>
          </div>
          <div className="ml-4 space-y-4">
            {products.map((product) => (
              <div key={product.id} className="border border-terminal-green/30 p-4 rounded">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-green font-bold">
                      [{product.id}] {product.name}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      product.status === 'active' ? 'bg-terminal-green/20 text-terminal-green' :
                      product.status === 'development' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {product.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="opacity-80">{product.description}</div>
                  
                  <div className="space-y-2">
                    <div className="text-sm opacity-70">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, index) => (
                        <span key={index} className="text-terminal-green text-sm">
                          {tech}{index < product.technologies.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {product.link && (
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:bg-terminal-green/10 p-2 rounded transition-colors"
                    >
                      → {product.link}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>cat tech_stack.json</span>
          </div>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {['frontend', 'backend', 'tools'].map((category) => (
              <div key={category} className="border border-terminal-green/30 p-4 rounded">
                <div className="space-y-3">
                  <div className="text-terminal-green font-bold capitalize">
                    {category}
                  </div>
                  <div className="space-y-2">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span>{skill.name}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <span 
                                key={i} 
                                className={`w-2 h-2 ${
                                  i < skill.level ? 'bg-terminal-green' : 'bg-terminal-green/20'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <span>cat contact.txt</span>
          </div>
          <div className="ml-4 border border-terminal-green/30 p-4 rounded">
            <div className="space-y-3">
              <div className="text-lg font-bold">Contact & Links</div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-terminal-green font-bold">Email:</span>
                  <span>wangxs404@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-terminal-green font-bold">GitHub:</span>
                  <a 
                    href="https://github.com/wangxs404" 
                    className="hover:bg-terminal-green/10 p-1 rounded transition-colors"
                  >
                    github.com/wangxs404
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-terminal-green font-bold">Location:</span>
                  <span>Shanghai, China</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}