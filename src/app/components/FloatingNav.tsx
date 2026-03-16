import { Home, User, Briefcase, Building2, Mail } from 'lucide-react';

interface FloatingNavProps {
  activeSection: string;
}

export function FloatingNav({ activeSection }: FloatingNavProps) {
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#1a0505]/90 backdrop-blur-lg border border-[#4a0404]/30 rounded-full px-6 py-3 shadow-lg shadow-[#4a0404]/20">
      <ul className="flex items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                  ? 'bg-[#4a0404] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#4a0404]/50'
                  }`}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
                <span className={`text-sm overflow-hidden transition-all duration-300 ${isActive ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0'}`}>
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
