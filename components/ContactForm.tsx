import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      title: 'Email',
      value: 'modisamokoena@gmail.com',
      link: 'mailto:modisamokoena@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+263 77 123 4567',
      link: 'tel:+263771234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Bulawayo, Zimbabwe'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'modisa-donald-mokoena',
      link: 'https://www.linkedin.com/in/modisa-donald-mokoena'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/modisa-donald-mokoena',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://www.github.com/dondonMD',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-800'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/modisa_dev',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'hover:bg-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:modisamokoena@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'hover:bg-red-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white/50 dark:bg-dark-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mt-6">
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-100 mb-4">
                Let's Connect
              </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I'm always interested in new opportunities, challenging projects, and 
                meaningful collaborations. Whether you have a project in mind, want to 
                discuss technology, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="card p-4 card-hover group">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-dark-800 dark:text-dark-100">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary-600 dark:text-primary-400 hover:underline"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-dark-600 dark:text-dark-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 flex items-center justify-center text-dark-600 dark:text-dark-300 transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={`Follow me on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl border border-secondary-200 dark:border-secondary-800">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-secondary-800 dark:text-secondary-300">
                    Available for Opportunities
                  </p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Open to full-time positions and freelance projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-100 mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-dark-100 focus-ring transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-dark-100 focus-ring transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-dark-100 focus-ring transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-dark-100 focus-ring transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-200 dark:border-secondary-800 rounded-lg">
                    <div className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center space-x-2 text-red-700 dark:text-red-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Something went wrong. Please try again or email me directly.</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-dark-200 dark:border-dark-700">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Modisa Donald Mukwena</h3>
                <p className="text-sm text-dark-500 dark:text-dark-400">Software Engineer & Computer Science Student</p>
              </div>
            </div>
            
            <p className="text-dark-600 dark:text-dark-300 mb-6 max-w-2xl mx-auto">
              Building innovative solutions with modern technologies. 
              Passionate about creating efficient, scalable, and user-friendly applications.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={`Follow me on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-dark-200 dark:border-dark-700">
              <p className="text-sm text-dark-500 dark:text-dark-400">
                © {new Date().getFullYear()} Modisa Donald Mukwena. All rights reserved.
              </p>
              <p className="text-xs text-dark-400 dark:text-dark-500 mt-2">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
