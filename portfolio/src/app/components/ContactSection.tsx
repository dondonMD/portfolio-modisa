"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
    },
  },
};

export default function ContactInterface() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {
    // Handle quantum message transmission
  };

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          className="bg-black/5 backdrop-blur-2xl rounded-3xl p-12 shadow-cosmic"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Quantum Transmission
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  {...register("name")}
                  className="w-full px-6 py-4 bg-black/20 rounded-xl border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400"
                  placeholder="Stellar Designation"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-6 py-4 bg-black/20 rounded-xl border border-cyan-500/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-gray-400"
                  placeholder="Quantum Frequency"
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                {...register("message")}
                rows={5}
                className="w-full px-6 py-4 bg-black/20 rounded-xl border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400"
                placeholder="Entangled Message"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-xl font-bold text-white hover:shadow-glow transition-all"
            >
              {formState.isSubmitting ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
              ) : (
                "Transmit Message"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
