import { useEffect, useState } from 'react';
import { CursorGlow } from './components/CursorGlow';
import { StickyHeader } from './components/StickyHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection, projects } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { OrganizationSection } from './components/OrganizationSection';
import { ContactSection } from './components/ContactSection';

import { InteractiveGrid } from './components/ui/InteractiveGrid';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'organization', 'contact'];
    const headerOffset = 120;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      let current = 'hero';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + scrollY - headerOffset;
        if (scrollY >= top) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-x-hidden">
      {/* Interactive Background Grid */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        <InteractiveGrid />
      </div>
      
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Sticky Header */}
      <StickyHeader activeSection={activeSection} />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection 
          onProjectSelect={(id) => setSelectedProjectId(id)} 
          selectedId={selectedProjectId}
        />
        <OrganizationSection />
        <ContactSection />
      </main>

      {/* Global Project Detail Modal */}
      <ProjectDetailModal 
        project={projects.find(p => p.id === selectedProjectId) || null}
        isOpen={selectedProjectId !== null}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Global styles for fonts */}
      <style>{`
        body {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          background-color: #080808;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}