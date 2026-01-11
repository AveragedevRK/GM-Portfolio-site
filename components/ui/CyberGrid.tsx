import React from 'react';
import { motion } from 'framer-motion';

export const CyberGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Moving Grid Effect - Perspective Plane */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
            backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px),
                              linear-gradient(to bottom, #334155 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(3)',
            transformOrigin: 'top center',
        }}
      />
      
      {/* Floating Particles/Orbs */}
      <motion.div 
        animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"
      />

      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
};
