import { Home, User, Briefcase, Building2, Mail } from 'lucide-react';

interface StickyHeaderProps {
  activeSection: string;
}

export function StickyHeader({ activeSection }: StickyHeaderProps) {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
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
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="shrink-0 text-white font-bold text-lg sm:text-xl tracking-tighter hover:text-[#ff006a] transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            PORTFOLIO.
          </button>

          {/* Navigation */}
          <nav className="min-w-0">
            <ul className="flex items-center gap-0 sm:gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative flex items-center gap-1.5 px-2.5 sm:px-4 py-2 text-xs uppercase tracking-wide font-medium transition-colors duration-300 cursor-pointer ${
                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      title={item.label}
                    >
                      <Icon size={14} className="shrink-0" />
                      <span className="hidden sm:inline">{item.label}</span>

                      {/* Underline animasi slide kiri → kanan */}
                      <span
                        className={`absolute bottom-0 left-2.5 sm:left-4 right-2.5 sm:right-4 h-px bg-[#94002a] origin-left transition-transform duration-300 ease-out ${
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
    </header>
  );
}
