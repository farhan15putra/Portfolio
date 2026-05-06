import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, ExternalLink } from 'lucide-react';

// YOU CAN EASILY EDIT YOUR CERTIFICATES HERE
export const certificates = [
  {
    id: "cert-1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#", // Put the credential URL here, e.g., "https://credly.com/..."
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: "cert-2",
    title: "Google Data Analytics Professional",
    issuer: "Coursera",
    date: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cert-3",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2022",
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  }
];

export function CertificatesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="certificates" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#94002a] to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-[#94002a]/30 transition-all duration-300 shadow-lg hover:shadow-[#94002a]/10"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-white/5 relative">
                {/* Fallback pattern in case image fails to load or while loading */}
                <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center opacity-50">
                   <Award size={48} className="text-white/10" />
                </div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    // Hide the broken image to show the fallback pattern underneath
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80 z-20" />
              </div>
              
              <div className="p-6 relative z-30 -mt-12">
                <div className="flex justify-between items-end mb-4">
                  <div className="p-3 bg-[#121212] rounded-xl border border-white/10 shadow-lg inline-block text-[#94002a] group-hover:bg-[#94002a]/10 group-hover:border-[#94002a]/30 transition-colors">
                    <Award size={24} />
                  </div>
                  <span className="text-xs text-white/70 font-medium px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-xl text-white font-semibold mb-2 leading-tight group-hover:text-[#ff006a] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {cert.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {cert.issuer}
                </p>
                
                {cert.link && cert.link !== "#" ? (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#94002a] font-semibold hover:text-[#ff006a] transition-colors group/link"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    View Credential
                    <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                   <span 
                    className="inline-flex items-center gap-2 text-sm text-white/30 font-medium"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Credential Unlinked
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
