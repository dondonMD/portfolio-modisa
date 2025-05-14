"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { socialLinks } from "@/config/socials.ts";

const floatingVariants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="absolute -top-32 left-1/2 -translate-x-1/2 opacity-10 dark:opacity-5"
          >
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl" />
          </motion.div>

          <h4 className="text-lg text-purple-500 mb-4">Hello, I'm</h4>
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Modisa Mukwena
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Computer Science Student & Full Stack Developer
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90"
              whileHover={{ scale: 1.05 }}
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="/Modisa-CV.pdf"
              download
              className="px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500/10"
              whileHover={{ scale: 1.05 }}
            >
              Download CV
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <link.icon className="w-6 h-6 text-purple-500" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
