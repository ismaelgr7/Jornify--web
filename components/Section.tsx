import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "py-20", containerClass = "" }) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;