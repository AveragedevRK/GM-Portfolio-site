import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { HERO_IMAGE_URL } from '../constants';
import { TiltGlareCard } from './ui/TiltGlareCard';
import { SplitText } from './ui/SplitText';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start space-y-8">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 text-sm font-mono tracking-wider mb-6"
            >
              SYSTEM_STATUS: ONLINE
            </motion.div>
            
            <SplitText 
              text="Ghulam Khan" 
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
              delay={0.1}
            />
            
            <SplitText 
              text="Full-Stack & Systems Architect"
              className="text-2xl md:text-3xl text-slate-400 font-light tracking-wide"
              delay={0.3}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-lg text-slate-400 max-w-lg leading-relaxed"
          >
            Architecting production-grade web applications, logistics platforms, and mission-critical dashboards for high-velocity businesses.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-slate-950 font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-200 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative flex items-center gap-2">
                View Architecture
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2"
            >
              About / Systems
            </button>
          </motion.div>
        </div>

        {/* Right Visual - Portrait */}
        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] flex items-end justify-center lg:justify-end">
           {/* Glow behind head */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/4 right-0 lg:right-20 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full"
           />
           
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="relative z-10 h-full w-full flex items-end justify-center lg:justify-end"
           >
              {/* Image Container with Gradient Mask */}
              <div className="relative h-full w-auto aspect-[3/4] max-h-[800px]">
                <TiltGlareCard 
                  className="w-full h-full border-none bg-transparent" 
                  glareOpacity={0.2}
                  style={{
                    boxShadow: 'none',
                    background: 'transparent'
                  }}
                >
                  <img 
                    src={HERO_IMAGE_URL} 
                    alt="Ghulam Khan" 
                    className="h-full w-full object-contain object-bottom drop-shadow-2xl"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                    }}
                  />
                  
                  {/* Overlay Rim Light Effect (CSS) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30 pointer-events-none mix-blend-overlay" />
                </TiltGlareCard>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};