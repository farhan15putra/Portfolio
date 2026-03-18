import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from './hooks/useInView';

function StatTiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 150, damping: 20 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
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
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="perspective-1000"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
}

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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {[
              { label: 'Academic Year', value: '3rd' },
              { label: 'Projects Built', value: '4' },
              { label: 'Organizations', value: '2' },
              { label: 'Core Skills', value: '10+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <StatTiltCard>
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#94002a]/50 transition-all duration-300 shadow-lg hover:shadow-[#94002a]/10">
                    <div className="text-4xl text-[#94002a] mb-2 font-bold tracking-tighter" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 font-medium uppercase tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.label}</div>
                  </div>
                </StatTiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}