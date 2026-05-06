import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Layout, Cpu, Database, BrainCircuit } from 'lucide-react';

// YOU CAN EASILY EDIT YOUR SKILLS HERE
export const coreSkills = [
  {
    category: "Front End",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    category: "IoT",
    icon: Cpu,
    skills: ["ESP32 / ESP8266", "Arduino", "MQTT", "Raspberry Pi", "C/C++"]
  },
  {
    category: "Data",
    icon: Database,
    skills: ["Python", "Pandas & NumPy", "SQL", "Data Visualization", "Jupyter"]
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    skills: ["TensorFlow / PyTorch", "Scikit-Learn", "Computer Vision", "NLP", "OpenAI API"]
  }
];

export function CoreSkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Core Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#94002a] to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreSkills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#94002a]/50 transition-colors duration-300 group relative overflow-hidden"
              >
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#94002a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#94002a]/10 rounded-lg group-hover:bg-[#94002a]/20 transition-colors duration-300 border border-white/5 group-hover:border-[#94002a]/30">
                    <Icon className="text-[#94002a]" size={24} />
                  </div>
                  <h3 className="text-xl text-white font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {skillGroup.category}
                  </h3>
                </div>
                
                <ul className="relative z-10 space-y-3">
                  {skillGroup.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/70 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-[#94002a] transition-colors duration-300" />
                      <span className="group-hover/item:text-white transition-colors duration-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
