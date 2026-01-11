import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "", onClick }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      onClick={onClick}
      className={`relative rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden group cursor-pointer ${className}`}
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};
