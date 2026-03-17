import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import portraitImage from '@/assets/profil.png';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-24 relative overflow-hidden">
      {/* Ambient lighting - bottom right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#94002a]/20 rounded-full blur-[140px]" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-tighter"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Farhan Putra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-[#94002a] font-medium tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              IT Student | IoT & AI Enthusiast | Building Real-World Tech Project
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/70 text-lg max-w-xl leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Bridging hardware and software through purposeful innovation. Focused on the synergy of IoT, AI, and Data for real-world problem solving.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="mailto:farhan15putra@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#94002a] hover:bg-[#ad0031] text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm uppercase tracking-wide"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/farhandwianandaputra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm uppercase tracking-wide"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-all duration-300 font-medium text-sm uppercase tracking-wide"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Ambient lighting - Behind Portrait */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#94002a]/60 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative w-full max-w-md">
            {/* Portrait Image */}
            <img
              src={portraitImage}
              alt="Farhan Putra - IT Student"
              className="w-full h-auto object-contain"
              style={{
                filter: 'brightness(0.98) contrast(1.05)',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}