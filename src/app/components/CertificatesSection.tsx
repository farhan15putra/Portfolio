import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, ExternalLink } from 'lucide-react';

// Import certificate assets
import sertifikatMC from '@/assets/sertifikat/sertifikat MC.jpg';
import sicImage from '@/assets/sertifikat/SIC.png';
import aiImage from '@/assets/sertifikat/AI fundamental.png';
import sicStage1 from '@/assets/sertifikat/Sertifikat SIC Stage 1_compressed.pdf';
import sicStage2 from '@/assets/sertifikat/Sertifikat Stage 2 SIC_compressed.pdf';
import sicStage3 from '@/assets/sertifikat/Sertifikat Stage 3 - Farhan Dwi Ananda Putra_compressed.pdf';
import sicStage4 from '@/assets/sertifikat/Sertifikat Stage 4 - Farhan Dwi Ananda Putra_compressed.pdf';
import aiFundamentals from '@/assets/sertifikat/COURSERA-AI Fundamentals.pdf';
import googleNetSec from '@/assets/sertifikat/COURSERA-Google Network Security.pdf';
import netArchitecture from '@/assets/sertifikat/COURSERA-Network Architecture.pdf';
import netMonitoring from '@/assets/sertifikat/COURSERA-Network Monitoring and Analysis.pdf';
import secHardening from '@/assets/sertifikat/COURSERA-Security Hardening.pdf';
import secureNet from '@/assets/sertifikat/COURSERA-Secure Against Network Intrusions.pdf';
import incidentResponse from '@/assets/sertifikat/COURSERA-Introduction to Detection and Incident Response.pdf';
import netOperations from '@/assets/sertifikat/COURSERA-Network Operations.pdf';

// Certificate data
export const certificates = [
  {
    id: "cert-sic",
    title: "Samsung Innovation Campus Batch 7",
    issuer: "Samsung",
    date: "2024",
    link: sicStage4,
    image: sicImage,
    pdfLinks: [
      { label: "Stage 1", url: sicStage1 },
      { label: "Stage 2", url: sicStage2 },
      { label: "Stage 3", url: sicStage3 },
      { label: "Stage 4", url: sicStage4 },
    ]
  },
  {
    id: "cert-ai",
    title: "AI Fundamentals",
    issuer: "Coursera",
    date: "2024",
    link: aiFundamentals,
    image: aiImage,
  },
  {
    id: "cert-gns",
    title: "Google Network Security",
    issuer: "Coursera",
    date: "2024",
    link: googleNetSec,
    image: aiImage,
  },
  {
    id: "cert-net-arch",
    title: "Network Architecture",
    issuer: "Coursera",
    date: "2024",
    link: netArchitecture,
    image: aiImage,
  },
  {
    id: "cert-net-mon",
    title: "Network Monitoring & Analysis",
    issuer: "Coursera",
    date: "2024",
    link: netMonitoring,
    image: aiImage,
  },
  {
    id: "cert-sec-hard",
    title: "Security Hardening",
    issuer: "Coursera",
    date: "2024",
    link: secHardening,
    image: aiImage,
  },
  {
    id: "cert-sec-net",
    title: "Secure Against Network Intrusions",
    issuer: "Coursera",
    date: "2024",
    link: secureNet,
    image: aiImage,
  },
  {
    id: "cert-incident",
    title: "Intro to Detection & Incident Response",
    issuer: "Coursera",
    date: "2024",
    link: incidentResponse,
    image: aiImage,
  },
  {
    id: "cert-net-ops",
    title: "Network Operations",
    issuer: "Coursera",
    date: "2024",
    link: netOperations,
    image: aiImage,
  },
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
                {/* Fallback: always shown, sits behind the image */}
                <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                   <Award size={48} className="text-white/10" />
                </div>
                {'image' in cert && cert.image && (
                  <img 
                    src={cert.image as string} 
                    alt={cert.title} 
                    className="w-full h-full object-cover absolute inset-0 z-10 group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                
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
                
                {'pdfLinks' in cert && cert.pdfLinks ? (
                  <div className="flex flex-wrap gap-2">
                    {(cert.pdfLinks as { label: string; url: string }[]).map((pl) => (
                      <a
                        key={pl.label}
                        href={pl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#94002a] font-semibold hover:text-[#ff006a] transition-colors border border-[#94002a]/30 hover:border-[#ff006a]/50 rounded-full px-3 py-1"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {pl.label}
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                ) : cert.link && cert.link !== "#" ? (
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
