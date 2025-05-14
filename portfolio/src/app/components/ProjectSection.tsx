'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/config/projects';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectGrid() {
  return (
    <section className="relative py-40 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Stellar Creations
        </h2>
        
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-3xl hover:shadow-glow transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 p-8 bg-black/80 w-full">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}