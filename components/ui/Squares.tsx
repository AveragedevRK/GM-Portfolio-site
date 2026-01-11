import React, { useRef, useEffect, useState } from 'react';

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'down' | 'right' | 'left';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
}

export const Squares: React.FC<SquaresProps> = ({
  direction = 'right',
  speed = 0.5,
  borderColor = '#334155',
  squareSize = 40,
  hoverFillColor = '#222',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize);
      const startY = Math.floor(gridOffset.current.y / squareSize);

      for (let x = 0; x < numSquaresX.current; x++) {
        for (let y = 0; y < numSquaresY.current; y++) {
          const squareX = (x * squareSize) + (gridOffset.current.x % squareSize);
          const squareY = (y * squareSize) + (gridOffset.current.y % squareSize);

          if (
            hoveredSquare &&
            Math.floor((squareX) / squareSize) === hoveredSquare.x &&
            Math.floor((squareY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Move grid
      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - speed) % squareSize;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + speed) % squareSize;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + speed) % squareSize;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - speed) % squareSize;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - speed) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - speed) % squareSize;
          break;
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full border-none block z-0 opacity-20 pointer-events-none"
    />
  );
};