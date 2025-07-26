import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Software Engineer',
    'Full Stack Developer', 
    'Go Developer',
    'Network Engineer',
    'Computer Science Student'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRoleText = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  return (
    <section id="profile" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-secondary-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-primary-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display">
                <span className="gradient-text">Modisa Donald</span>
                <br />
                <span className="text-dark-800 dark:text-dark-100">Mukwena</span>
              </h1>
            </div>

            {/* Animated Role */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <div className="text-2xl md:text-3xl font-semibold text-dark-600 dark:text-dark-300">
                <span>{displayText}</span>
                <span className="animate-pulse text-primary-500">|</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Final year Computer Science student with expertise in full-stack development, 
              Go programming, and network engineering. A+ and Network+ certified with 
              1 year of professional software engineering experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div className="text-sm text-dark-500 dark:text-dark-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-dark-500 dark:text-dark-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-dark-500 dark:text-dark-400">Projects</div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/assets/Modisa Donald Mukwena Resume.pdf" 
                download 
                className="btn-primary group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <Link href="#contact" className="btn-secondary group">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Talk
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://www.linkedin.com/in/modisa-donald-mokoena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <svg className="w-6 h-6 text-dark-600 dark:text-dark-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="absolute inset-0 bg-primary-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              </a>
              
              <a 
                href="https://www.github.com/dondonMD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 flex items-center justify-center hover:bg-dark-800 dark:hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <svg className="w-6 h-6 text-dark-600 dark:text-dark-300 group-hover:text-white dark:group-hover:text-dark-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <div className="absolute inset-0 bg-dark-800 dark:bg-white rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              </a>

              <a 
                href="mailto:modisamokoena@gmail.com"
                className="group relative w-12 h-12 rounded-xl bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 flex items-center justify-center hover:bg-secondary-500 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <svg className="w-6 h-6 text-dark-600 dark:text-dark-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute inset-0 bg-secondary-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 dark:border-dark-700/50 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Modisa Donald Mukwena - Software Engineer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 animate-bounce-gentle">
                <div className="bg-white dark:bg-dark-800 rounded-full p-3 shadow-lg border border-white/20 dark:border-dark-700/50">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CS</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                <div className="bg-white dark:bg-dark-800 rounded-full p-3 shadow-lg border border-white/20 dark:border-dark-700/50">
                  <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Go</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="bg-white dark:bg-dark-800 rounded-full p-2 shadow-lg border border-white/20 dark:border-dark-700/50">
                  <div className="w-6 h-6 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-dark-500 dark:text-dark-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-dark-300 dark:border-dark-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-500 rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
