import { motion } from 'framer-motion';
import  HeroSection  from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ContactSection from '@/app/components/ContactSection';

export default function Home() {
  return (
    <main className="pt-20">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}