import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Code, Cpu, Terminal, Shield, Plus, Minus } from 'lucide-react';

const SKILLS = [
  { 
    icon: <Terminal size={24} />, 
    title: "Full-Stack Architecture", 
    desc: "End-to-end React & Node systems.",
    details: "I architect scalable, type-safe ecosystems using React and Node, ensuring seamless data flow and maintainability from the database to the UI."
  },
  { 
    icon: <Database size={24} />, 
    title: "Data Engineering", 
    desc: "Complex schemas, SQL/NoSQL optimization.",
    details: "I design efficient database schemas and optimize query performance, ensuring your application handles complex data relationships and high-volume transactions without latency."
  },
  { 
    icon: <Server size={24} />, 
    title: "Cloud Infrastructure", 
    desc: "GCP, AWS, Dockerized deployments.",
    details: "I deploy resilient, auto-scaling infrastructure on AWS/GCP using Docker and CI/CD pipelines, minimizing downtime and operational overhead."
  },
  { 
    icon: <Cpu size={24} />, 
    title: "System Logic", 
    desc: "Algorithmic logistics & financial modeling.",
    details: "I translate intricate business requirements into deterministic algorithms for logistics and finance, ensuring accuracy in critical calculations and forecasts."
  },
  { 
    icon: <Shield size={24} />, 
    title: "Security", 
    desc: "Auth flows, RBAC, data protection.",
    details: "I implement robust security protocols including RBAC, OAuth, and data encryption to protect sensitive user information and maintain compliance."
  },
  { 
    icon: <Code size={24} />, 
    title: "API Development", 
    desc: "RESTful & GraphQL integration.",
    details: "I build documented, performant REST and GraphQL APIs that serve as reliable backbones for your web and mobile clients."
  },
];

export const About: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleSkill = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering <span className="text-indigo-400">Business Logic</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I don't just write code; I build systems that solve expensive problems. 
                My focus is on creating scalable, production-ready applications that 
                drive operational efficiency for Amazon sellers, SaaS founders, and logistics operators.
              </p>
              <p>
                From visualizing complex carbon credit payouts to architecting multi-warehouse 
                inventory algorithms, my work bridges the gap between technical complexity 
                and business utility.
              </p>
              <div className="pt-4">
                 <a 
                   href="https://www.fiverr.com/gm_khan_" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/20"
                 >
                    Initiate Collaboration
                 </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => toggleSkill(index)}
                className={`p-5 bg-slate-950 border rounded-xl transition-all cursor-pointer group ${
                    expandedIndex === index 
                    ? 'border-indigo-500/50 bg-slate-900/50 shadow-lg shadow-indigo-900/10' 
                    : 'border-slate-800 hover:border-indigo-500/30'
                }`}
              >
                <motion.div layout="position" className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`transition-colors ${expandedIndex === index ? 'text-indigo-400' : 'text-slate-500 group-hover:text-indigo-300'}`}>
                        {skill.icon}
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">{skill.title}</h3>
                            <p className="text-sm text-slate-500">{skill.desc}</p>
                        </div>
                    </div>
                    <div className="text-slate-600 transition-colors group-hover:text-indigo-400">
                        {expandedIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                </motion.div>

                <AnimatePresence>
                    {expandedIndex === index && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                                {skill.details}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};