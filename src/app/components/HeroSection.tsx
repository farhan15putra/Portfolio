import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import defaultPortrait from '@/assets/2.webp';
import revealPortrait from '@/assets/1.webp';
import { TextReveal } from './ui/TextReveal';
import { MagneticWrapper } from './ui/MagneticWrapper';

export function HeroSection() {
  const [brushPoints, setBrushPoints] = useState<Array<{ x: number; y: number; opacity: number }>>([]);

  function handlePortraitMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const point = {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    };

    setBrushPoints((points) => [
      ...points.slice(-24).map((item, index, items) => ({
        ...item,
        opacity: Math.max(0.12, ((index + 1) / items.length) * 0.82),
      })),
      point,
    ]);
  }

  const brushMask = brushPoints.length
    ? brushPoints.flatMap(({ x, y, opacity }) => [
      `radial-gradient(ellipse 18% 2.4% at ${x - 3}% ${y - 5}%, rgb(0 0 0 / ${opacity}) 0%, transparent 80%)`,
      `radial-gradient(ellipse 20% 2.8% at ${x + 1}% ${y}%, rgb(0 0 0 / ${opacity}) 0%, transparent 80%)`,
      `radial-gradient(ellipse 16% 2% at ${x + 4}% ${y + 5}%, rgb(0 0 0 / ${opacity}) 0%, transparent 80%)`,
    ]).join(', ')
    : 'radial-gradient(ellipse 0% 0% at 50% 50%, transparent 0%, transparent 100%)';

  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect for portrait
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-24 relative overflow-hidden">
      {/* Ambient lighting - bottom right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#94002a]/20 rounded-full blur-[140px]" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <TextReveal 
              text="Farhan Putra" 
              className="text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-tighter"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl text-[#94002a] font-medium tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              IoT Developer | Frontend Engineer | Building Connected Digital Experiences
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-white/70 text-lg max-w-xl leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            I design and build connected products that bring together reliable IoT systems and thoughtful frontend experiences. From sensor data to polished interfaces, I turn technical ideas into useful digital products.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <MagneticWrapper>
              <a
                href="mailto:farhan15putra@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-[#94002a] hover:bg-[#ad0031] text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm uppercase tracking-wide shadow-lg shadow-[#94002a]/20"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </MagneticWrapper>
            
            <MagneticWrapper>
              <a
                href="https://linkedin.com/in/farhandwianandaputra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm uppercase tracking-wide backdrop-blur-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </MagneticWrapper>

            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-all duration-300 font-medium text-sm uppercase tracking-wide opacity-50 cursor-default"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </a>
          </motion.div>
        </div>

        {/* Right - Portrait */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient lighting - Behind Portrait */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#94002a]/60 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] bg-white/70 rounded-full blur-[60px] pointer-events-none" />

          <div
            className="relative w-full max-w-md overflow-hidden"
            onMouseMove={handlePortraitMove}
            onMouseLeave={() => setBrushPoints([])}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
              src={defaultPortrait}
              alt="Farhan Putra - IT Student"
              className="block w-full h-auto object-contain relative z-10"
              style={{
                filter: 'brightness(0.98) contrast(1.05)',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            />
            <img
              src={revealPortrait}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 z-20 w-full h-full object-contain pointer-events-none"
              style={{
                filter: 'brightness(0.98) contrast(1.05)',
                maskImage: brushMask,
                WebkitMaskImage: brushMask,
                maskComposite: 'add',
                WebkitMaskComposite: 'source-over',
                transition: 'mask-image 120ms ease-out, -webkit-mask-image 120ms ease-out'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}