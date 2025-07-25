import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Update theme
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Smooth scroll implementation
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  // Loading screen
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-2xl mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">M</span>
          </div>
          <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Modisa Donald Mukwena - Software Engineer & Computer Science Student</title>
        <meta name="description" content="Final year Computer Science student and Software Engineer with expertise in full-stack development, Go programming, and network engineering. A+ and Network+ certified with professional experience." />
        <meta name="keywords" content="Software Engineer, Computer Science, Full Stack Developer, Go Developer, Network Engineer, React, Next.js, TypeScript, A+ Certified, Network+ Certified" />
        <meta name="author" content="Modisa Donald Mukwena" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://modisa-portfolio.vercel.app/" />
        <meta property="og:title" content="Modisa Donald Mukwena - Software Engineer & Computer Science Student" />
        <meta property="og:description" content="Final year Computer Science student and Software Engineer with expertise in full-stack development, Go programming, and network engineering." />
        <meta property="og:image" content="/assets/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://modisa-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Modisa Donald Mukwena - Software Engineer & Computer Science Student" />
        <meta property="twitter:description" content="Final year Computer Science student and Software Engineer with expertise in full-stack development, Go programming, and network engineering." />
        <meta property="twitter:image" content="/assets/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical resources */}
        <link rel="preload" href="/assets/profile-pic.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Modisa Donald Mukwena",
              "jobTitle": "Software Engineer",
              "description": "Final year Computer Science student and Software Engineer with expertise in full-stack development, Go programming, and network engineering.",
              "url": "https://modisa-portfolio.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/modisa-donald-mokoena",
                "https://www.github.com/dondonMD"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "National University of Science and Technology, Zimbabwe"
              },
              "knowsAbout": [
                "Software Engineering",
                "Full Stack Development",
                "Go Programming",
                "Network Engineering",
                "React",
                "Next.js",
                "TypeScript",
                "Computer Science"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-slate-900 transition-colors duration-500">
        {/* Navigation */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* About/Skills Section */}
          <SkillBadge />

          {/* Projects Section */}
          <ProjectCard />

          {/* Contact Section */}
          <ContactForm />
        </main>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
}

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus-ring ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
