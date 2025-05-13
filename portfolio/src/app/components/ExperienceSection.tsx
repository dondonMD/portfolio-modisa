'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: 'Lead Quantum Developer',
    company: 'Stellar Innovations',
    period: '2022 - Present',
    description: 'Pioneering quantum computing solutions for interstellar communication networks',
    tech: ['Q#', 'Python', 'TensorFlow Quantum'],
    color: '#6366f1'
  },
  {
    title: 'AI Architect',
    company: 'Neural Nexus',
    period: '2020 - 2022',
    description: 'Designed neural interfaces for human-AI symbiosis systems',
    tech: ['PyTorch', 'React', 'Three.js'],
    color: '#10b981'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Journey" />
        
        <div className="relative space-y-12 pl-8 border-l-2 border-slate-200/50 dark:border-slate-800/50">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="absolute w-6 h-6 rounded-full -left-[29px] top-4 border-4 border-surface-light dark:border-surface-dark"
                style={{ backgroundColor: exp.color }}
              />
              <div className="p-8 rounded-3xl bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-lg border border-slate-200/30 dark:border-slate-800/30 shadow-2xl">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                  @ {exp.company}
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300">
                  {exp.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded-full text-sm border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}