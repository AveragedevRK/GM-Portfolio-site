import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltGlareCardProps {
  children: React.ReactNode;
  className?: string;
  glareOpacity?: number;
  tiltScale?: number;
  style?: React.CSSProperties;
}

export const TiltGlareCard: React.FC<TiltGlareCardProps> = ({ 
  children, 
  className = "",
  glareOpacity = 0.2,
  tiltScale = 1.02,
  style = {}
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Calculate rotation based on mouse position
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  
  // Dynamic gradient background for glare
  const background = useMotionTemplate`radial-gradient(
    circle at ${glareX} ${glareY},
    rgba(255, 255, 255, ${glareOpacity}) 0%,
    transparent 80%
  )`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized position (-0.5 to 0.5)
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        ...style
      }}
      whileHover={{ scale: tiltScale }}
      className={`relative transform-gpu ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
      
      {/* Glare Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay"
        style={{
          background: background,
          opacity: useTransform(mouseX, (val) => Math.abs(val) * 0.8 + 0.2), // Base opacity + dynamic
        }}
      />
    </motion.div>
  );
};