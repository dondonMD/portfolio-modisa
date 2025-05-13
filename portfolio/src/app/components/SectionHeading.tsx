'use client';
import { motion } from 'framer-motion';

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative inline-block mb-16"
    >
      <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/30 to-secondary-light/30 dark:from-primary-dark/30 dark:to-secondary-dark/30 blur-2xl -z-10" />
    </motion.div>
  );
}