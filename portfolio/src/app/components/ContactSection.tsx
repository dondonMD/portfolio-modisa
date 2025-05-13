'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useForm } from 'react-hook-form';

export default function ContactSection() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = async (data: any) => {
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Transmission" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-lg border border-slate-200/30 dark:border-slate-800/30 rounded-3xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  {...register('name', { required: true })}
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-slate-300/50 dark:border-slate-700/50 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-0 -top-4 text-sm text-slate-500 dark:text-slate-400 pointer-events-none transition-all">
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  {...register('email', { required: true })}
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-slate-300/50 dark:border-slate-700/50 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-0 -top-4 text-sm text-slate-500 dark:text-slate-400 pointer-events-none transition-all">
                  Email
                </label>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                {...register('message', { required: true })}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-slate-300/50 dark:border-slate-700/50 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors"
                rows={4}
                placeholder=" "
              />
              <label className="absolute left-0 -top-4 text-sm text-slate-500 dark:text-slate-400 pointer-events-none transition-all">
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {formState.isSubmitting ? 'Transmitting...' : 'Send Quantum Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}