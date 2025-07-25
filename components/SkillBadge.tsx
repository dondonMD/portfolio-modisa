import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  verified: boolean;
}

export default function EnhancedSkills() {
  const [activeTab, setActiveTab] = useState('skills');
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Go (Golang)', level: 85, category: 'Programming', icon: '🔷', description: 'Concurrent programming, microservices, REST APIs' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Programming', icon: '⚡', description: 'Full-stack development, Node.js, React ecosystem' },
    { name: 'Python', level: 80, category: 'Programming', icon: '🐍', description: 'Data analysis, automation, backend development' },
    { name: 'Java', level: 75, category: 'Programming', icon: '☕', description: 'Object-oriented programming, Spring framework' },
    { name: 'C/C++', level: 70, category: 'Programming', icon: '⚙️', description: 'Systems programming, memory management' },
    
    // Frontend Technologies
    { name: 'React/Next.js', level: 90, category: 'Frontend', icon: '⚛️', description: 'Component-based architecture, SSR, performance optimization' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend', icon: '🎨', description: 'Utility-first styling, responsive design' },
    { name: 'HTML5/CSS3', level: 90, category: 'Frontend', icon: '🌐', description: 'Semantic markup, modern CSS features' },
    
    // Backend & Databases
    { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢', description: 'Server-side JavaScript, Express.js, API development' },
    { name: 'PostgreSQL', level: 80, category: 'Backend', icon: '🐘', description: 'Relational databases, query optimization' },
    { name: 'MongoDB', level: 75, category: 'Backend', icon: '🍃', description: 'NoSQL databases, document-based storage' },
    { name: 'Redis', level: 70, category: 'Backend', icon: '🔴', description: 'Caching, session management' },
    
    // DevOps & Tools
    { name: 'Docker', level: 80, category: 'DevOps', icon: '🐳', description: 'Containerization, microservices deployment' },
    { name: 'Git/GitHub', level: 90, category: 'DevOps', icon: '📚', description: 'Version control, collaborative development' },
    { name: 'Linux/Unix', level: 85, category: 'DevOps', icon: '🐧', description: 'System administration, shell scripting' },
    { name: 'AWS', level: 70, category: 'DevOps', icon: '☁️', description: 'Cloud services, EC2, S3, Lambda' },
    
    // Networking & Security
    { name: 'Network Administration', level: 85, category: 'Networking', icon: '🌐', description: 'TCP/IP, routing, switching, troubleshooting' },
    { name: 'Network Security', level: 80, category: 'Networking', icon: '🔒', description: 'Firewalls, VPNs, security protocols' },
    { name: 'CompTIA A+', level: 90, category: 'Networking', icon: '🏆', description: 'Hardware, software, troubleshooting' },
    { name: 'CompTIA Network+', level: 85, category: 'Networking', icon: '🏆', description: 'Network infrastructure, protocols' },
  ];

  const experiences: Experience[] = [
    {
      title: 'Software Engineer Intern',
      company: 'Mviyo Technologies',
      period: '2024 - 2025',
      description: 'Developed full-stack web applications using modern technologies, collaborated with senior developers on enterprise-level projects, and gained hands-on experience in agile development methodologies.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Django', 'Go', ],
      achievements: [
        'Built responsive web applications serving 1000+ users',
        'Improved application performance by 40% through optimization',
        'Implemented automated testing reducing bugs by 60%',
        'Collaborated with cross-functional teams on 5+ projects'
      ]
    },
  
  ];

  const certifications: Certification[] = [
    {
      name: 'CompTIA A+',
      issuer: 'CompTIA',
      date: '2025',
      credentialId: 'COMP001001',
      icon: '🏆',
      verified: true
    },
    {
      name: 'CompTIA Network+',
      issuer: 'CompTIA',
      date: '2025',
      credentialId: 'COMP001002',
      icon: '🌐',
      verified: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName && !visibleSkills.includes(skillName)) {
              setVisibleSkills(prev => [...prev, skillName]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('[data-skill]');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleSkills]);

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const tabs = [
    { id: 'skills', label: 'Technical Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ];

  return (
    <section id="about" className="section-padding bg-white/50 dark:bg-dark-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
            Get To Know More
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="glass-effect rounded-2xl p-2 border border-white/20 dark:border-dark-700/50">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-white bg-gradient-to-r from-primary-600 to-secondary-600 shadow-lg'
                      : 'text-dark-600 dark:text-dark-300 hover:bg-white/50 dark:hover:bg-dark-700/50'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="animate-fade-in-up" ref={skillsRef}>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white/50 dark:bg-dark-800/50 text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  data-skill={skill.name}
                  className="card p-6 card-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{skill.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                          {skill.name}
                        </h3>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                        {skill.description}
                      </p>
                      
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${
                            visibleSkills.includes(skill.name) ? 'w-full' : 'w-0'
                          }`}
                          style={{ 
                            width: visibleSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                            transitionDelay: '0.5s'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="animate-fade-in-up space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card p-8 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <h3 className="text-xl font-bold text-dark-800 dark:text-dark-100 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">
                      {exp.period}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-dark-600 dark:text-dark-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card p-6 card-hover group">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                          {cert.name}
                        </h3>
                        {cert.verified && (
                          <div className="flex items-center space-x-1 text-secondary-600 dark:text-secondary-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium">Verified</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">
                        Issued: {cert.date}
                      </p>
                      <p className="text-xs text-dark-400 dark:text-dark-500 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                Continuously expanding my knowledge and earning new certifications
              </p>
              <div className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400">
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="font-medium">Always Learning</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
