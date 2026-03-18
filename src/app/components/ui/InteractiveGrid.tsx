import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export function InteractiveGrid() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const cellSize = 50;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const calculateGrid = () => {
      setColumns(Math.ceil(window.innerWidth / cellSize));
      setRows(Math.ceil(window.innerHeight / cellSize));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', calculateGrid);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      }}
    >
      {Array.from({ length: columns * rows }).map((_, i) => (
        <GridCell 
          key={i} 
          index={i} 
          columns={columns} 
          cellSize={cellSize} 
          mouseX={mouseX} 
          mouseY={mouseY} 
        />
      ))}
    </div>
  );
}

function GridCell({ index, columns, cellSize, mouseX, mouseY }: { 
  index: number; 
  columns: number; 
  cellSize: number; 
  mouseX: any; 
  mouseY: any; 
}) {
  const x = (index % columns) * cellSize + cellSize / 2;
  const y = Math.floor(index / columns) * cellSize + cellSize / 2;

  // Calculate distance from cell center to mouse
  const distanceX = useTransform(mouseX, (val: number) => val - x);
  const distanceY = useTransform(mouseY, (val: number) => val - y);
  
  // Custom transform for lift effect
  const scale = useTransform([distanceX, distanceY], ([dx, dy]: any) => {
    const distance = Math.sqrt(dx * dx + dy * dy);
    return Math.max(1, 1.4 - distance / 200);
  });

  const opacity = useTransform([distanceX, distanceY], ([dx, dy]: any) => {
    const distance = Math.sqrt(dx * dx + dy * dy);
    return Math.max(0.1, 0.6 - distance / 300);
  });

  const springScale = useSpring(scale, { stiffness: 150, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 150, damping: 20 });

  return (
    <motion.div
      className="w-full h-full border-[0.5px] border-white/10"
      style={{ 
        scale: springScale,
        opacity: springOpacity,
        backgroundColor: useTransform(springScale, [1, 1.4], ["rgba(148, 0, 42, 0)", "rgba(148, 0, 42, 0.3)"])
      }}
    />
  );
}

