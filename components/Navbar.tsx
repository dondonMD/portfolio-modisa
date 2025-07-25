import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['profile', 'about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md py-3 shadow-lg border-b border-white/20 dark:border-dark-700/50' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group relative">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold gradient-text">Modisa</h1>
                <p className="text-xs text-dark-500 dark:text-dark-400">Software Engineer</p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.href} 
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  activeSection === link.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg transition-all duration-300 ${
                  activeSection === link.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-50 group-hover:scale-100'
                }`}></div>
                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-12 h-6 bg-dark-200 dark:bg-dark-700 rounded-full p-1 transition-all duration-300 focus-ring"
              aria-label="Toggle dark mode"
            >
              <div className={`w-4 h-4 bg-white dark:bg-dark-300 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}>
                {darkMode ? (
                  <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-dark-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </div>
            </button>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Link href="#contact" className="btn-primary text-sm">
                Let's Connect
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center focus-ring rounded-lg"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>
        <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-dark-800 shadow-2xl transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={link.href} 
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-700">
              <Link 
                href="#contact" 
                className="btn-primary w-full justify-center"
                onClick={closeMenu}
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
