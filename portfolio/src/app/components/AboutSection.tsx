"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutSection() {
  return (
    <motion.section
      className="relative bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white p-10 rounded-lg shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed">
        Welcome to my world! I am a passionate developer with a love for
        crafting immersive digital experiences. My journey is fueled by
        creativity, curiosity, and a relentless drive to push boundaries.
      </p>
    </motion.section>
  );
}
