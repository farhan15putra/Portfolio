import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'HMIT - Telkom University Jakarta',
    role: 'Head of Academic Department',
    period: 'Nov 2025 - Present',
    description: 'Leading the Academic Department by coordinating a team of 5 members to design and execute academic development programs for Information Technology students.',
    achievements: [
      'Initiated and developed Grow with HMIT, a 6-month IoT study group and bootcamp program focused on hands-on learning through personal projects and a final project competition',
      'Created digital knowledge initiatives such as InfoByte and NewsTech, educational content that shares technology insights, fun facts, and recent industry developments',
      'Serve as Team Lead for the PPK Ormawa competition, coordinating 14 members in a community development program involving proposal development, budgeting, and field implementation',
      'Manage program timelines, coordinate staff activities, and encourage students to actively explore technology, participate in competitions, and strengthen academic curiosity',
    ],
  },
  {
    company: 'Marketing Crew - Telkom University Jakarta',
    role: 'Content Planner - Campus Life Division',
    period: 'Nov 2024 - Present',
    description: 'Planning and developing short-form educational content for the Campus Life Division YouTube channel, focusing on student productivity, study tips, financial awareness, and academic challenges.',
    achievements: [
      'Manage content planning and production schedules, including determining shooting timelines, upload schedules, and monthly content targets',
      'Coordinate batch content production, organizing recording sessions that produce up to 10 videos in a single production cycle to maintain consistent monthly uploads',
      'Maintain and update internal content tracking data to monitor production progress and ensure consistency in content delivery',
      'Previously contributed as a Script Writer in the Vlogcast Division, preparing scripts for long-form podcast-style episodes (20+ minutes)',
    ],
  },
];

export function OrganizationSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="organization" ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto">
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
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#94002a] to-transparent rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#94002a] via-[#94002a]/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-[24px] top-2 w-4 h-4 bg-[#94002a] rounded-full border-4 border-[#121212] shadow-lg shadow-[#94002a]/50" />

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#94002a]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#94002a]/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <h3
                      className="text-2xl text-white font-bold tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[#94002a] text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-white/80 font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-lg">{exp.company}</span>
                  </div>

                  <p className="text-white/60 mb-6 leading-relaxed font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm text-white/70 uppercase tracking-wider mb-3 font-medium">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-white/60 text-sm font-normal">
                          <span className="text-[#94002a] mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}