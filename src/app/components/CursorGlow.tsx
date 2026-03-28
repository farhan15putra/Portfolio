import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Smooth following effect
    const smoothing = 0.15;

    const updateSmoothPosition = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * smoothing,
        y: prev.y + (mousePosition.y - prev.y) * smoothing,
      }));
    };

    let animationFrameId: number;
    const animate = () => {
      updateSmoothPosition();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-300"
      style={{
        background: `radial-gradient(300px circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(200, 80, 80, 0.6), rgba(150, 50, 50, 0.4) 25%, rgba(100, 30, 30, 0.2) 50%, rgba(74, 4, 4, 0.05) 75%, transparent)`,
        filter: 'blur(60px)',
      }}
    />
  );
}