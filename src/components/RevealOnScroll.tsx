
import React, { useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          setTimeout(() => {
            ref.current?.classList.add('active');
          }, delay);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={ref} className={`reveal-animation ${className}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
