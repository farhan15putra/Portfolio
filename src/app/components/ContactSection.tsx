import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Linkedin, Github, Phone, Instagram } from 'lucide-react';

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:farhan15putra@gmail.com', handle: 'farhan15putra@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/farhandwianandaputra', handle: '/in/farhandwianandaputra' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/farhan15putra', handle: '@farhan15putra' },
    { icon: Phone, label: 'Phone', href: 'tel:+6281117766177', handle: '+62 8111776617' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/Frhnnn.ap', handle: '@Frhnnn.ap' },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 relative">
      {/* Bottom ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#94002a]/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-8 mb-16"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-bold tracking-tighter"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let's Work Together
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#94002a] to-transparent rounded-full mx-auto" />
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid gap-4 md:gap-6 mb-16"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.label !== 'Email' && link.label !== 'Phone' ? '_blank' : undefined}
                rel={link.label !== 'Email' && link.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#94002a]/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#94002a]/20 rounded-full group-hover:bg-[#94002a] transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#94002a] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-white font-medium mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{link.label}</div>
                  <div className="text-white/60 text-sm font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{link.handle}</div>
                </div>
                <div className="text-gray-600 group-hover:text-[#94002a] transition-colors duration-300">
                  →
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center pt-12 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            © 2026 Farhan Putra. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2 font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Designed & Developed with passion
          </p>
        </motion.div>
      </div>
    </section>
  );
}