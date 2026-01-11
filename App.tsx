import React, { useEffect, useState } from 'react';
import { Squares } from './components/ui/Squares';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ElectricBorder } from './components/ui/ElectricBorder';

const App: React.FC = () => {
  // Custom cursor logic
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        <Squares 
          direction="diagonal" 
          speed={0.3} 
          squareSize={50} 
          borderColor="rgba(255,255,255,0.05)"
          hoverFillColor="rgba(6, 182, 212, 0.05)"
        />
      </div>

      {/* Dynamic Cursor Glow (Global) */}
      <div 
        className="fixed pointer-events-none inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(14, 165, 233, 0.06), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        {/* Navigation / Brand fixed top */}
        <nav className="fixed top-0 left-0 right-0 h-20 z-40 flex items-center px-6 md:px-12 backdrop-blur-md bg-slate-950/70 border-b border-white/5">
           <div className="font-mono font-bold text-xl tracking-tighter text-white">
             GK<span className="text-cyan-500">.</span>DEV
           </div>
           
           <div className="ml-auto flex items-center gap-8">
             <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
                <a href="#about" className="hover:text-white transition-colors">CAPABILITIES</a>
             </div>
             
             {/* CTA with Electric Border */}
             <a 
               href="https://www.fiverr.com/gm_khan_"
               target="_blank"
               rel="noopener noreferrer"
               className="relative group cursor-pointer inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg overflow-hidden transition-transform active:scale-95 hover:bg-slate-800"
             >
               <span className="relative z-10 tracking-wide">Start Project</span>
               <ElectricBorder 
                 beamSize={150} 
                 duration={3} 
                 colorFrom="#22d3ee" // Cyan 400
                 colorTo="#e879f9" // Fuchsia 400
                 cornerRadius={8}
               />
               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </a>
           </div>
        </nav>

        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Footer />
      </div>
    </main>
  );
};

export default App;