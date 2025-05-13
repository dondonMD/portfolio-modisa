'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({ 
  title, 
  description,
  image,
  tech,
  demo,
  github 
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5 backdrop-blur-sm" />
      
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-light dark:from-surface-dark via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
          {title}
        </h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-sm rounded-md bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}