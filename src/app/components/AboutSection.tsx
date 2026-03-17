import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-6 font-bold tracking-tighter"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            About Me
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#94002a] to-transparent rounded-full" />

          <div className="space-y-6 text-white/70 text-lg leading-relaxed font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I am an Information Technology student at Telkom University Jakarta driven by the synergy of IoT, AI, and Data Analysis. I believe in learning by doing—transforming complex ideas into functional prototypes through constant experimentation and refinement.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              My current focus lies in bridging hardware and software, from building ESP32-based automation to developing local AI assistants that streamline development workflows. I am passionate about leveraging data-driven insights to create intelligent systems that solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Beyond my technical projects, I am active in academic organizations, fostering a culture of project-based learning among my peers. I thrive at the intersection of embedded technology and smart innovation, always looking for new ways to turn information into action.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {[
              { label: 'Academic Year', value: '3rd' },
              { label: 'Projects Built', value: '15+' },
              { label: 'Organizations', value: '2' },
              { label: 'Tech Stacks', value: '10+' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#94002a]/50 transition-all duration-300">
                <div className="text-4xl text-[#94002a] mb-2 font-bold tracking-tighter" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium uppercase tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}