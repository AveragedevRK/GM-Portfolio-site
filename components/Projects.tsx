import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart2, Layers, Box, TrendingUp } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { SpotlightCard } from './ui/SpotlightCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getIcon = (type: string) => {
    switch(type) {
      case 'dashboard': return <Layers size={20} className="text-cyan-400" />;
      case 'analysis': return <BarChart2 size={20} className="text-indigo-400" />;
      default: return <Box size={20} className="text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <span className="text-cyan-500">/</span> Deployed Systems
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl"
          >
            Production environments handling real-time logistics, financial forecasting, and multi-warehouse inventory control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard 
                className="h-full flex flex-col p-6"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                    {getIcon(project.type)}
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-slate-950/30 border border-slate-800/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-cyan-500/80 font-mono mb-4">
                    {project.category}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.longDescription && (
                    <p className="text-slate-500 text-xs leading-relaxed border-l-2 border-slate-800 pl-3 italic">
                      {project.longDescription}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-sm group-hover:text-cyan-400 transition-colors text-slate-500">
                  <span className="font-medium">Initialize Preview</span>
                  <ArrowUpRight size={16} />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
