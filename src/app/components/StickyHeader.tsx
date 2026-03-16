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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0101]/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white font-bold text-xl tracking-tighter hover:text-[#4a0404] transition-colors duration-300"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            PORTFOLIO.
          </button>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 text-xs uppercase tracking-wide font-medium transition-all duration-300 rounded-lg ${isActive
                        ? 'text-white bg-[#4a0404]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.label}
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
