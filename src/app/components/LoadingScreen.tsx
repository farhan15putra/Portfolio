import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import brandLogo from '@/assets/Emblem.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onComplete, 400); // Wait a bit after 100% before firing complete
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808]"
    >
      <div className="relative flex flex-col items-center z-10">
        {/* Logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10"
        >
          <img 
            src={brandLogo} 
            alt="Farhan Putra" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90" 
          />
        </motion.div>

        {/* Minimalist Loading Bar Container */}
        <div className="w-48 md:w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#94002a]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Progress Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 flex items-center justify-between w-48 md:w-64"
        >
          <span className="text-white/40 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Loading System
          </span>
          <span className="text-white/60 text-[10px] md:text-xs font-mono tracking-wider">
            {Math.round(progress)}%
          </span>
        </motion.div>
      </div>
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#94002a]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
    </motion.div>
  );
}
