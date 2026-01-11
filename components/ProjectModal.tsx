import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Monitor, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (project) {
      setIsLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl h-[85vh] bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="h-14 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6 shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-slate-800 mx-2" />
                <h3 className="text-slate-200 font-medium truncate max-w-[200px] md:max-w-md">
                  {project.title}
                </h3>
                <span className="text-xs text-slate-500 border border-slate-800 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  Live Preview
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-800"
                  title="Open in new tab"
                >
                  <ExternalLink size={18} />
                </a>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-800"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content / Iframe */}
            <div className="flex-1 bg-slate-950 relative w-full h-full">
               {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-900">
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                     <p className="text-slate-500 text-sm animate-pulse">Establishing secure connection...</p>
                  </div>
                </div>
              )}
              <iframe
                src={project.url}
                className="w-full h-full border-none bg-white"
                onLoad={handleIframeLoad}
                title={`Preview of ${project.title}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
            
            {/* Footer */}
            <div className="h-10 bg-slate-950 border-t border-slate-800 flex items-center justify-end px-4 gap-4 text-xs text-slate-500">
               <span>Secure Connection</span>
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
