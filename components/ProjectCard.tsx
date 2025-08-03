import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  github: string;
  demo?: string;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  metrics?: {
    users?: string;
    performance?: string;
    coverage?: string;
  };
}

export default function ProjectCard() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
      longDescription: 'A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Implemented with microservices architecture for scalability.',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Docker', 'AWS'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Real-time notifications',
        'Responsive design for all devices'
      ],
      challenges: [
        'Handling concurrent user sessions and inventory updates',
        'Implementing secure payment processing',
        'Optimizing database queries for large product catalogs',
        'Managing state across multiple components'
      ],
      solutions: [
        'Implemented Redis for session management and caching',
        'Used Stripe webhooks for secure payment handling',
        'Optimized database with proper indexing and query optimization',
        'Implemented Redux for centralized state management'
      ],
      github: 'https://github.com/dondonMD/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      image: '/assets/projects/ecommerce.jpg',
      status: 'completed',
      featured: true,
      metrics: {
        users: '500+',
        performance: '95% Lighthouse Score',
        coverage: '85% Test Coverage'
      }
    },
    {
      id: 'network-monitor',
      title: 'Network Monitoring System',
      description: 'Go-based network monitoring tool with real-time alerts and performance analytics.',
      longDescription: 'A robust network monitoring system built in Go that tracks network performance, monitors device health, and provides real-time alerts. Features a web dashboard for visualization and historical data analysis.',
      category: 'Go/Networking',
      technologies: ['Go', 'PostgreSQL', 'WebSocket', 'Chart.js', 'Docker', 'Prometheus'],
      features: [
        'Real-time network device monitoring',
        'Performance metrics collection and analysis',
        'Automated alert system with email notifications',
        'Web dashboard with interactive charts',
        'Historical data storage and reporting',
        'Multi-protocol support (SNMP, ICMP, TCP)',
        'RESTful API for third-party integrations'
      ],
      challenges: [
        'Handling thousands of concurrent network checks',
        'Efficient data storage for time-series metrics',
        'Real-time data visualization without performance impact',
        'Implementing reliable alert mechanisms'
      ],
      solutions: [
        'Used Go goroutines for concurrent monitoring tasks',
        'Implemented time-series database with PostgreSQL',
        'WebSocket connections for real-time dashboard updates',
        'Queue-based alert system with retry mechanisms'
      ],
      github: 'https://github.com/dondonMD/network-monitor',
      image: '/assets/projects/network-monitor.jpg',
      status: 'completed',
      featured: true,
      metrics: {
        performance: '1000+ devices monitored',
        coverage: '99.9% uptime monitoring'
      }
    },
    {
      id: 'task-management',
      title: 'Collaborative Task Manager',
      description: 'Real-time collaborative task management application with team features and analytics.',
      longDescription: 'A modern task management application that enables teams to collaborate effectively with real-time updates, project tracking, and comprehensive analytics. Built with performance and user experience in mind.',
      category: 'Full Stack',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Tailwind CSS', 'Vercel'],
      features: [
        'Real-time collaborative editing',
        'Project and task organization',
        'Team member management',
        'Progress tracking and analytics',
        'File attachments and comments',
        'Deadline notifications',
        'Mobile-responsive design'
      ],
      challenges: [
        'Implementing real-time collaboration without conflicts',
        'Managing complex state with multiple users',
        'Optimizing performance for large datasets',
        'Creating intuitive user interface'
      ],
      solutions: [
        'Operational Transformation for conflict resolution',
        'Optimistic updates with rollback mechanisms',
        'Virtual scrolling for large task lists',
        'User-centered design with extensive testing'
      ],
      github: 'https://github.com/dondonMD/task-manager',
      demo: 'https://taskmanager-demo.vercel.app',
      image: '/assets/projects/task-manager.jpg',
      status: 'completed',
      featured: false,
      metrics: {
        users: '200+',
        performance: '92% Lighthouse Score'
      }
    },
    {
      id: 'api-gateway',
      title: 'Microservices API Gateway',
      description: 'High-performance API gateway built in Go with load balancing and authentication.',
      longDescription: 'A production-ready API gateway that handles routing, load balancing, authentication, and rate limiting for microservices architecture. Designed for high throughput and low latency.',
      category: 'Go/Backend',
      technologies: ['Go', 'Redis', 'JWT', 'Docker', 'Kubernetes', 'Prometheus'],
      features: [
        'Dynamic service discovery',
        'Load balancing with health checks',
        'JWT-based authentication',
        'Rate limiting and throttling',
        'Request/response transformation',
        'Metrics collection and monitoring',
        'Circuit breaker pattern implementation'
      ],
      challenges: [
        'Handling high concurrent requests',
        'Implementing efficient load balancing',
        'Managing service discovery dynamically',
        'Ensuring zero-downtime deployments'
      ],
      solutions: [
        'Go\'s goroutines for concurrent request handling',
        'Weighted round-robin load balancing algorithm',
        'Consul for service discovery and health checking',
        'Blue-green deployment strategy with Kubernetes'
      ],
      github: 'https://github.com/dondonMD/microservices-api-gateway',
      image: '/assets/projects/api-gateway.jpg',
      status: 'completed',
      featured: true,
      metrics: {
        performance: '10k+ RPS handled',
        coverage: '90% Test Coverage'
      }
    },
    {
      id: 'blockchain-voting',
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system using blockchain technology.',
      longDescription: 'A decentralized voting system that ensures transparency, security, and immutability using blockchain technology. Features voter authentication, ballot privacy, and real-time result tracking.',
      category: 'Blockchain',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
      features: [
        'Smart contract-based voting logic',
        'Voter identity verification',
        'Anonymous ballot casting',
        'Real-time vote counting',
        'Immutable vote records',
        'Decentralized result storage',
        'Web3 wallet integration'
      ],
      challenges: [
        'Ensuring voter privacy while maintaining transparency',
        'Handling gas costs for large-scale voting',
        'Creating user-friendly Web3 interface',
        'Implementing secure voter authentication'
      ],
      solutions: [
        'Zero-knowledge proofs for privacy preservation',
        'Layer 2 scaling solutions for cost reduction',
        'Progressive Web App with MetaMask integration',
        'Multi-factor authentication with blockchain verification'
      ],
      github: 'https://github.com/dondonMD/blockchain-voting',
      demo: 'https://voting-demo.netlify.app',
      image: '/assets/projects/blockchain-voting.jpg',
      status: 'in-progress',
      featured: false
    },
    {
      id: 'ml-recommendation',
      title: 'ML Recommendation Engine',
      description: 'Machine learning-powered recommendation system with real-time personalization.',
      longDescription: 'An intelligent recommendation engine that uses machine learning algorithms to provide personalized content suggestions. Implements collaborative filtering and content-based filtering techniques.',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Real-time model updates',
        'A/B testing framework',
        'Performance analytics',
        'Scalable API endpoints',
        'Data pipeline automation'
      ],
      challenges: [
        'Cold start problem for new users',
        'Scalability with growing user base',
        'Real-time recommendation generation',
        'Model accuracy optimization'
      ],
      solutions: [
        'Hybrid approach combining multiple algorithms',
        'Distributed computing with Apache Spark',
        'Caching layer with Redis for fast responses',
        'Continuous learning with online algorithms'
      ],
      github: 'https://github.com/dondonMD/ml-recommendations',
      image: '/assets/projects/ml-recommendation.jpg',
      status: 'completed',
      featured: false,
      metrics: {
        performance: '95% accuracy rate',
        users: '1000+ recommendations/day'
      }
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
            Browse My Recent
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-dark-800 dark:text-dark-100">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card card-hover group cursor-pointer overflow-hidden"
                onClick={() => openModal(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.category === 'Go/Networking' || project.category === 'Go/Backend' ? '🔷' :
                       project.category === 'Full Stack' ? '⚡' :
                       project.category === 'Blockchain' ? '⛓️' :
                       project.category === 'Machine Learning' ? '🧠' : '💻'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="badge text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                      {project.metrics.users && (
                        <div>
                          <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                            {project.metrics.users}
                          </div>
                          <div className="text-xs text-dark-500 dark:text-dark-400">Users</div>
                        </div>
                      )}
                      {project.metrics.performance && (
                        <div>
                          <div className="text-lg font-bold text-secondary-600 dark:text-secondary-400">
                            {project.metrics.performance.split(' ')[0]}
                          </div>
                          <div className="text-xs text-dark-500 dark:text-dark-400">Performance</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-ghost text-center text-sm py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center text-sm py-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card card-hover group cursor-pointer overflow-hidden"
              onClick={() => openModal(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 overflow-hidden">
                <div className="absolute top-3 right-3 z-20">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 flex items-center justify-center">
                  <div className="text-4xl opacity-20">
                    {project.category === 'Go/Networking' || project.category === 'Go/Backend' ? '🔷' :
                     project.category === 'Full Stack' ? '⚡' :
                     project.category === 'Blockchain' ? '⛓️' :
                     project.category === 'Machine Learning' ? '🧠' : '💻'}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 dark:text-dark-400 mb-3 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span key={techIndex} className="badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="badge text-xs">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-ghost text-center text-xs py-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-xs py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white dark:bg-dark-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-dark-800 border-b border-dark-200 dark:border-dark-700 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-100 mb-2">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status.replace('-', ' ')}
                  </span>
                  <span className="text-sm text-dark-500 dark:text-dark-400">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-3">
                  Project Overview
                </h3>
                <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-600 dark:text-dark-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-3">
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-dark-600 dark:text-dark-300 text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-3">
                    Solutions
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-dark-600 dark:text-dark-300 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Metrics */}
              {selectedProject.metrics && (
                <div>
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-3">
                    Project Metrics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.metrics.users && (
                      <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {selectedProject.metrics.users}
                        </div>
                        <div className="text-sm text-dark-600 dark:text-dark-400">Users</div>
                      </div>
                    )}
                    {selectedProject.metrics.performance && (
                      <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl">
                        <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                          {selectedProject.metrics.performance.split(' ')[0]}
                        </div>
                        <div className="text-sm text-dark-600 dark:text-dark-400">Performance</div>
                      </div>
                    )}
                    {selectedProject.metrics.coverage && (
                      <div className="text-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
                        <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                          {selectedProject.metrics.coverage}
                        </div>
                        <div className="text-sm text-dark-600 dark:text-dark-400">Test Coverage</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t border-dark-200 dark:border-dark-700">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
