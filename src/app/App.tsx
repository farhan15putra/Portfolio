import { useEffect, useState } from 'react';
import { CursorGlow } from './components/CursorGlow';
import { StickyHeader } from './components/StickyHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { OrganizationSection } from './components/OrganizationSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

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
    <div className="relative min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Sticky Header */}
      <StickyHeader activeSection={activeSection} />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OrganizationSection />
        <ContactSection />
      </main>

      {/* Global styles for fonts */}
      <style>{`
        body {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #3b3b3bff;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #4a0404;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #6a0606;
        }
      `}</style>
    </div>
  );
}