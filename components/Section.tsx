import React from 'react';

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children,
  className = ''
}: { 
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <p className="text-lg text-primary font-medium mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold">
                {title}
              </h2>
            )}
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}