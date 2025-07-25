'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/config/links';

const floatingVariants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="absolute -top-32 left-1/2 -translate-x-1/2 opacity-10 dark:opacity-5"
          >
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark blur-3xl" />
          </motion.div>

          <h4 className="text-lg text-primary-light dark:text-primary-dark mb-4">
            Hello, I'm
          </h4>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
            Modisa Mukwena
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-8">
            Computer Science Student & Full Stack Developer
          </p>

          {/* Social Links and Buttons... */}
        </motion.div>
      </div>
    </section>
  );
}