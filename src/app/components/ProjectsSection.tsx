import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import voiceRelayImg from '@/assets/voiceActivatedRelay.jpeg';
import devlifeImg from '@/assets/DevlifeClickerGame.png';
import memoryGameImg from '@/assets/MemoryGame.jpeg';
import heraImg from '@/assets/hera.png';

const projects = [
  {
    title: 'Voice Activated Relay',
    description: 'Personal IoT project that controls a relay module using sound/voice input. Built with microcontroller and audio sensor to switch devices on or off hands-free.',
    image: voiceRelayImg,
    tags: ['IoT', 'Arduino', 'Hardware', 'Personal Project'],
    link: '#',
  },
  {
    title: 'DevLife Clicker Game',
    description: 'A fun browser-based clicker game built as a group project. Play as a developer grinding through code, coffee, and bugs — built with React.js and Tailwind CSS.',
    image: devlifeImg,
    tags: ['React.js', 'Tailwind CSS', 'Game', 'Group Project'],
    link: '#',
  },
  {
    title: 'Memory Game',
    description: 'A hardware-based memory game using LEDs and buttons. The system generates a light pattern and the player must replicate it — patterns grow longer with each stage. Built for fun and reflex training.',
    image: memoryGameImg,
    tags: ['IoT', 'Arduino', 'LED', 'Hardware', 'Personal Project'],
    link: '#',
  },
  {
    title: 'H.E.R.A',
    description: 'Heuristic Electronics Resource Assistant — a local AI assistant running on my laptop that can control IoT devices and manage PC operations through natural language commands.',
    image: heraImg,
    tags: ['AI', 'IoT', 'Local LLM', 'Python', 'Personal Project'],
    link: '#',
  },
  {
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of a fashion e-commerce platform, improving conversion rates by 45%.',
    image: 'https://images.unsplash.com/photo-1539278383962-a7774385fa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvcHBpbmclMjBvbmxpbmV8ZW58MXx8fHwxNzczNTkwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['E-Commerce', 'Mobile', 'Web'],
    link: '#',
  },
  {
    title: 'Healthcare App',
    description: 'Patient-centered mobile app for managing appointments, medications, and health records.',
    image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGFwcHxlbnwxfHx8fDE3NzM1OTA1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'Healthcare', 'iOS/Android'],
    link: '#',
  },
  {
    title: 'SaaS Platform',
    description: 'Enterprise project management tool with collaborative features and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1680781632910-3afb25316c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM1OTA1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['SaaS', 'Enterprise', 'Collaboration'],
    link: '#',
  },
  {
    title: 'Brand Identity System',
    description: 'Complete design system and component library for a global tech startup.',
    image: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MzU1Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Design System', 'Branding', 'Components'],
    link: '#',
  },
  {
    title: 'Social Media Platform',
    description: 'Next-gen social networking app focusing on meaningful connections and mental wellness.',
    image: 'https://images.unsplash.com/photo-1675352161918-2dc701738691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzczNTkwNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Social', 'Mobile', 'Wellness'],
    link: '#',
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-6 font-bold tracking-tighter"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#4a0404] to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#4a0404]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#4a0404]/20"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0101] via-[#0a0101]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-6 py-3 bg-[#4a0404] hover:bg-[#6a0606] text-white rounded-lg transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium text-sm uppercase tracking-wide"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3
                  className="text-2xl text-white font-bold tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {project.description}
                </p>
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

              {/* 3D hover effect - subtle gradient shift */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#4a0404]/10 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}