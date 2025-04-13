
import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  alignment?: 'center' | 'left' | 'right';
  className?: string;
}

const SectionHeading = ({ title, subtitle, alignment = 'center', className = '' }: SectionHeadingProps) => {
  return (
    <div className={`mb-8 md:mb-12 text-${alignment} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <div className="text-muted-foreground font-light text-lg md:text-xl max-w-3xl mx-auto">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
