'use client';
import { motion } from 'framer-motion';
import { experiences } from '@/config/achievements';

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 120
    }
  })
};

export default function ExperienceTimeline() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Cosmic Journey
        </h2>
        
        <div className="relative pl-8 border-l-2 border-purple-500/50">
            {experiences.map((exp: Experience, index: number) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
              className="relative mb-20 pl-8"
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-2 shadow-glow" />
              <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-cosmic">
              <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-purple-400 mb-4">{exp.company} • {exp.period}</p>
              <p className="text-gray-300 mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20"
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