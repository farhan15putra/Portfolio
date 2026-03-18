import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Assets
import voiceRelayImg from '@/assets/voiceActivatedRelay.jpeg';
import devlifeImg from '@/assets/DevlifeClickerGame.png';
import memoryGameImg from '@/assets/MemoryGame.jpeg';
import heraImg from '@/assets/hera.png';
import DemoVideoRelay from '@/assets/DemoVideoRelay.mp4';

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  video?: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'voice-activated-relay',
    title: 'Voice Activated Relay',
    description: 'A cutting-edge IoT solution bridging traditional hardware and modern voice interaction.',
    detailedDescription: 'The Voice Activated Relay is an innovative IoT project designed to modernize household systems by replacing manual switches with an intelligent, voice-driven 1-channel relay. Powered by an ESP32 microcontroller and a robust Python processing layer, the system captures natural language commands via a laptop microphone to control electrical appliances instantly and hands-free. This implementation showcases advanced hardware-software integration, real-time audio processing, and a scalable architecture for the future of smart home ecosystems.',
    image: voiceRelayImg,
    video: DemoVideoRelay,
    tags: ['IoT', 'ESP32', 'Python', 'Automation', 'Smart Home'],
    link: '#',
  },
  {
    id: 'devlife-clicker',
    title: 'DevLife Clicker Game',
    description: 'A professional-grade simulation game where players experience the grind of creative development.',
    detailedDescription: 'DevLife Clicker is an engaging corporate simulation game that puts players in the shoes of a rising developer. Built with React.js and Tailwind CSS, it features high-performance state management and a polished UI to simulate the complexities of professional coding — from workstation upgrades to managing "coffee-fueled" productivity cycles.',
    image: devlifeImg,
    tags: ['React.js', 'Tailwind CSS', 'Simulation', 'Web App'],
    link: '#',
  },
  {
    id: 'memory-game',
    title: 'Precision Memory Hub',
    description: 'Hardware-based reflex trainer utilizing microcontroller logic and responsive input systems.',
    detailedDescription: 'This high-intensity hardware project utilizes Arduino logic to create a sophisticated reflex training system. By combining high-luminance LEDs with responsive button arrays, the hub generates complex, accelerating patterns designed to test and improve human cognitive processing and muscle memory.',
    image: memoryGameImg,
    tags: ['IoT', 'Arduino', 'Hardware', 'Product Design'],
    link: '#',
  },
  {
    id: 'hera-assistant',
    title: 'H.E.R.A - AI Core',
    description: 'Heuristic Electronics Resource Assistant — a privacy-first local LLM for system automation.',
    detailedDescription: 'H.E.R.A (Heuristic Electronics Resource Assistant) represents the next step in local AI edge computing. Running a Large Language Model (LLM) entirely on local hardware, it provides secure, offline control of IoT clusters and PC infrastructure. It’s a testament to private-by-design automation, executing complex system commands through natural speech.',
    image: heraImg,
    tags: ['AI', 'Local LLM', 'Privacy', 'Python', 'Next-Gen'],
    link: '#',
  },
];

function ProjectTiltCard({ children, disabled = false }: { children: React.ReactNode; disabled?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-10, 10]), { stiffness: 100, damping: 20 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={!disabled ? {
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      } : {}}
      className={!disabled ? "perspective-1000 h-full" : "h-full"}
    >
      <div style={!disabled ? { transform: 'translateZ(30px)', height: '100%' } : { height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
}

interface ProjectsSectionProps {
  onProjectSelect: (id: string) => void;
  selectedId: string | null;
}

export function ProjectsSection({ onProjectSelect, selectedId }: ProjectsSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-transparent">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#94002a]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-6 font-bold tracking-tighter"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#94002a] to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="h-full cursor-none"
              onClick={() => onProjectSelect(project.id)}
            >
              <ProjectTiltCard disabled={selectedId !== null}>
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#94002a]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#94002a]/20 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <motion.div layoutId={`image-${project.id}`} className="w-full h-full">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="px-6 py-3 bg-[#94002a] text-white rounded-lg font-medium text-sm uppercase tracking-wide shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Explore Project
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    <motion.h3
                      layoutId={`title-${project.id}`}
                      className="text-2xl text-white font-bold tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      layoutId={`desc-${project.id}`}
                      className="text-white/60 text-sm leading-relaxed font-normal flex-grow" 
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs text-white/70 bg-white/5 rounded-full border border-white/10 font-medium uppercase tracking-wide"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ProjectTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}