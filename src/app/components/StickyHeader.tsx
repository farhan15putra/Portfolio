import { useState } from 'react';
import { Home, User, Briefcase, Building2, Mail, Menu, X, Award, Wrench } from 'lucide-react';
import logoHorizontal from '../../assets/Logo Horizontal.png';

interface StickyHeaderProps {
  activeSection: string;
}

export function StickyHeader({ activeSection }: StickyHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'organization', label: 'Experience', icon: Building2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="shrink-0 transition-opacity duration-300 hover:opacity-80 cursor-pointer z-50 relative flex items-center"
            aria-label="Home"
          >
            <img 
              src={logoHorizontal} 
              alt="Farhan Putra Logo" 
              className="h-12 sm:h-18 w-auto object-contain" 
            />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-white hover:text-[#ff006a] transition-colors z-50 relative p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block min-w-0">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wide font-medium transition-colors duration-300 cursor-pointer ${
                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      title={item.label}
                    >
                      <Icon size={14} className="shrink-0" />
                      <span>{item.label}</span>

                      {/* Underline animasi slide kiri → kanan */}
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-px bg-[#94002a] origin-left transition-transform duration-300 ease-out ${
                          isActive
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        style={{
                          boxShadow: '0 0 6px 1px rgba(148, 0, 42, 0.8), 0 0 12px 2px rgba(148, 0, 42, 0.4)',
                        }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-[#121212]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] py-20 opacity-100 shadow-2xl' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#94002a]/20 text-white border border-[#94002a]/50 shadow-[0_0_15px_rgba(148,0,42,0.3)]' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Icon size={18} className={isActive ? "text-[#ff006a]" : ""} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
