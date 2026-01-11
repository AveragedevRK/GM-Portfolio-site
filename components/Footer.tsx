import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950 relative z-10 text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ghulam Khan. All systems operational.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-mono">
           <a 
             href="https://github.com/AveragedevRK/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="hover:text-cyan-400 cursor-pointer transition-colors"
           >
             GITHUB
           </a>
           <a 
             href="mailto:rajabamz381@gmail.com" 
             className="hover:text-cyan-400 cursor-pointer transition-colors"
           >
             EMAIL
           </a>
        </div>
      </div>
    </footer>
  );
};