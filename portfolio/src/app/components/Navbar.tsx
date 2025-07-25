'use client';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext';
import MobileMenu from './MobileMenu';
import { navLinks } from '@/config/links';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Modisa
          </motion.a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.hash}
                  href={link.hash}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'light' ? (
                  <MoonIcon className="h-6 w-6 text-slate-600" />
                ) : (
                  <SunIcon className="h-6 w-6 text-slate-300" />
                )}
              </button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}