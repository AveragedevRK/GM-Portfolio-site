import React from "react";

interface ElectricBorderProps {
  className?: string;
  beamSize?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  cornerRadius?: number;
}

export const ElectricBorder = ({
  className = "",
  beamSize = 100,
  duration = 3,
  borderWidth = 1.5,
  colorFrom = "#06b6d4",
  colorTo = "#a855f7",
  delay = 0,
  cornerRadius = 8, // Matches rounded-lg default
}: ElectricBorderProps) => {
  return (
    <div
      style={
        {
          "--beam-size": beamSize,
          "--duration": duration,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": delay,
          "--corner-radius": cornerRadius,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] 
      [border:calc(var(--border-width)*1px)_solid_transparent]
      ![mask-clip:padding-box,border-box] 
      ![mask-composite:intersect] 
      [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]
      
      after:absolute after:aspect-square after:w-[calc(var(--beam-size)*1px)] 
      after:animate-border-beam after:[animation-delay:var(--delay)s] 
      after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] 
      after:[offset-anchor:100%_50%] 
      after:[offset-path:rect(0_auto_auto_0_round_calc(var(--corner-radius)*1px))] 
      ${className}`}
    />
  );
};