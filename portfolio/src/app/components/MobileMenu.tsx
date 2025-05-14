"use client";
import { motion } from "framer-motion";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { navLinks } from "@/config/socials.ts";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-dark"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-16 bg-surface-light dark:bg-surface-dark md:hidden"
        >
          <div className="flex flex-col items-center pt-8 gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.hash}
                href={link.hash}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-dark"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
