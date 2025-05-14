'use client';
import { motion } from 'framer-motion';

export default function SkillBadge({ name, level, color }: { 
  name: string; 
  level: number;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm"
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ color }}
      />
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          <div 
            className="absolute inset-0 blur-md opacity-30"
            style={{ backgroundColor: color }}
          />
          <div 
            className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: color + '20' }}
          >
            <span className="text-xl font-bold" style={{ color }}>
              {level}%
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          {name}
        </h3>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50">
        <div 
          className="h-2 rounded-full transition-all duration-1000"
          style={{ 
            width: `${level}%`,
            backgroundColor: color
          }}
        />
      </div>
    </motion.div>
  );
}