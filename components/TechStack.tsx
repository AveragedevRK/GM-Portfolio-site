import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiDjango, SiFlask, SiFastapi,
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiGatsby,
  SiPostgresql, SiMongodb, SiMicrosoftsqlserver, SiSupabase,
  SiFirebase, SiGooglecloud, SiAmazonaws, SiServerless
} from 'react-icons/si';

interface Tool {
  name: string;
  icon: any;
  desc: string;
  color: string;
}

const TECH_CATEGORIES: { title: string; tools: Tool[] }[] = [
  {
    title: "Backend / APIs",
    tools: [
      { name: "Node.js", icon: SiNodedotjs, desc: "Event-driven runtime for scalable apps", color: "#339933" },
      { name: "Express.js", icon: SiExpress, desc: "Minimalist web infrastructure", color: "#000000" },
      { name: "NestJS", icon: SiNestjs, desc: "Enterprise-grade Node architecture", color: "#E0234E" },
      { name: "Python", icon: SiPython, desc: "Data processing & backend logic", color: "#3776AB" },
      { name: "Django", icon: SiDjango, desc: "Secure, high-level framework", color: "#092E20" },
      { name: "Flask", icon: SiFlask, desc: "Lightweight microservices", color: "#000000" },
      { name: "FastAPI", icon: SiFastapi, desc: "High-performance async APIs", color: "#009688" },
    ]
  },
  {
    title: "Frontend Ecosystem",
    tools: [
      { name: "React", icon: SiReact, desc: "Component-based UI architecture", color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, desc: "SSR & production React", color: "#000000" },
      { name: "Vue", icon: SiVuedotjs, desc: "Progressive interface framework", color: "#4FC08D" },
      { name: "Angular", icon: SiAngular, desc: "Comprehensive app platform", color: "#DD0031" },
      { name: "Gatsby", icon: SiGatsby, desc: "Static site generation", color: "#663399" },
    ]
  },
  {
    title: "Data Persistence",
    tools: [
      { name: "PostgreSQL", icon: SiPostgresql, desc: "Advanced relational reliability", color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, desc: "Flexible document storage", color: "#47A248" },
      { name: "MS SQL", icon: SiMicrosoftsqlserver, desc: "Enterprise data warehousing", color: "#CC2927" },
      { name: "Supabase", icon: SiSupabase, desc: "Real-time open source backend", color: "#3ECF8E" },
    ]
  },
  {
    title: "Cloud & Infra",
    tools: [
      { name: "AWS", icon: SiAmazonaws, desc: "Scalable cloud infrastructure", color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, desc: "Google-scale computing", color: "#4285F4" },
      { name: "Firebase", icon: SiFirebase, desc: "Rapid backend development", color: "#FFCA28" },
      { name: "Serverless", icon: SiServerless, desc: "Event-driven architecture", color: "#FD5750" },
    ]
  }
];

const TechCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex items-center justify-center transition-all duration-200 ${isHovered ? 'z-50' : 'z-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Container */}
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`
          relative z-10 p-4 rounded-xl cursor-pointer transition-colors duration-300
          ${isHovered ? 'bg-slate-800' : 'bg-slate-900/40'}
          border ${isHovered ? 'border-slate-700' : 'border-slate-800/50'}
        `}
      >
        <tool.icon 
          size={28} 
          className={`transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-500'}`}
          style={{ color: isHovered ? tool.color : undefined }}
        />
        
        {/* Glow effect on hover */}
        {isHovered && (
          <motion.div
            layoutId="glow"
            className="absolute inset-0 -z-10 rounded-xl blur-md opacity-40"
            style={{ backgroundColor: tool.color }}
          />
        )}
      </motion.div>

      {/* Tooltip Reveal */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-48 p-3 mt-3 rounded-lg border border-slate-700 bg-slate-900/95 backdrop-blur-xl shadow-xl pointer-events-none"
          >
            {/* Tooltip Arrow */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-t border-l border-slate-700 rotate-45" />
            
            <div className="flex flex-col items-center text-center">
              <span className="text-white font-medium text-sm mb-1">{tool.name}</span>
              <span className="text-xs text-slate-400 leading-tight">{tool.desc}</span>
            </div>
            
            {/* Bottom highlight line */}
            <div 
              className="absolute bottom-0 left-2 right-2 h-[1px] opacity-50" 
              style={{ background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)` }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 relative z-10 border-b border-white/5 bg-slate-950/30">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:text-left"
        >
            <h3 className="text-lg font-mono text-cyan-400 mb-2">02. TECHNOLOGIES</h3>
            <h2 className="text-3xl font-bold text-white">Production Stack</h2>
        </motion.div>

        <div className="grid gap-12">
          {TECH_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-slate-400 text-sm font-semibold tracking-wider uppercase mb-6 pl-2 border-l-2 border-slate-800">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 md:gap-6">
                {category.tools.map((tool, toolIdx) => (
                  <TechCard key={toolIdx} tool={tool} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};