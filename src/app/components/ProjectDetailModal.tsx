import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ExternalLink } from 'lucide-react';
import { Project } from './ProjectsSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence onExitComplete={() => setIsPlaying(false)}>
      {isOpen && (
        <>
          {/* Global Backdrop - High Z-Index to cover Sticky Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[150] cursor-pointer"
          />
          
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              layoutId={project.id.toString()}
              className="bg-[#121212]/95 backdrop-blur-2xl w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden border border-[#94002a]/40 shadow-2xl pointer-events-auto flex flex-col shadow-[#94002a]/30 relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-[#94002a] text-white rounded-full transition-colors z-[210] border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto custom-scrollbar flex flex-col">
                {/* 1. Header Section: Video Demo (Full Width) */}
                <div className="w-full bg-gradient-to-b from-[#94002a]/20 to-transparent p-6 pb-0">
                  <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-black/50 border border-white/10 relative group shadow-2xl">
                    {project.video ? (
                      !isPlaying ? (
                        <div 
                          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 cursor-pointer bg-black/40 group-hover:bg-black/20 transition-all"
                          onClick={() => setIsPlaying(true)}
                        >
                          <div className="w-16 h-16 bg-[#94002a] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white fill-current translate-x-0.5" />
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-white font-black tracking-[0.3em] uppercase text-xs">Play Project Reel</span>
                            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Experience the Workflow</span>
                          </div>
                        </div>
                      ) : (
                        <video 
                          src={project.video} 
                          controls 
                          autoPlay 
                          className="w-full h-full object-cover"
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[#0a0a0a]">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                          <Play className="w-8 h-8 text-white/10" />
                        </div>
                        <span className="text-white/20 font-black uppercase text-xs tracking-widest">Cinema Demo Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Body Section: Two-Column Layout */}
                <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8">
                  {/* Left Column: Focused Image */}
                  <div className="w-full md:w-5/12 shrink-0">
                    <motion.div 
                      layoutId={`image-${project.id}`}
                      className="w-full rounded-2xl overflow-hidden border border-[#94002a]/20 group shadow-lg aspect-square"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      />
                    </motion.div>
                  </div>

                  {/* Right Column: Information & Actions */}
                  <div className="w-full md:w-7/12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-px w-8 bg-[#94002a]" />
                          <h4 className="text-[#94002a] text-[10px] font-black uppercase tracking-[0.4em]">Project Deep Dive</h4>
                        </div>
                        <motion.h3 
                          layoutId={`title-${project.id}`}
                          className="text-3xl md:text-5xl text-white font-black mb-6 tracking-tighter leading-tight"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 text-[9px] text-white/70 bg-white/5 border border-white/10 rounded-lg font-bold uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.p 
                          layoutId={`desc-${project.id}`}
                          className="text-white/80 text-lg leading-relaxed font-light italic border-l-3 border-[#94002a] pl-6 py-1"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          "{project.detailedDescription}"
                        </motion.p>
                      </div>

                      <div className="pt-8 w-full">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-[#94002a] hover:bg-[#ad0031] text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-[#94002a]/40 group text-sm relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <span>Review Source Code</span>
                          <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Scrollbar Styles */}
              <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: rgba(0, 0, 0, 0.2);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: rgba(148, 0, 42, 0.4);
                  border-radius: 20px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: rgba(148, 0, 42, 0.7);
                }
              `}</style>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
