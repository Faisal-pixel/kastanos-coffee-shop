
import React from 'react';
import SectionHeading from '../SectionHeading';
import RevealOnScroll from '../RevealOnScroll';
import { Star } from 'lucide-react';

const ReviewSection = () => {
  // Animated stars
  const renderStars = () => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative">
            <Star 
              className="text-yellow-400 w-8 h-8" 
              fill="#FACC15"
            />
            <div 
              className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 pointer-events-none"
              style={{
                animation: `ripple 1.5s cubic-bezier(0, 0.5, 0.5, 1) infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section id="reviews" className="section-container bg-white">
      <SectionHeading 
        title="Reviews & Feedback" 
        subtitle="We value your opinion and strive to make every cup perfect."
      />
      
      <RevealOnScroll>
        <div className="max-w-lg mx-auto text-center bg-kastanos-beige/20 p-8 rounded-lg">
          {renderStars()}
          
          <h3 className="text-xl font-serif font-semibold text-kastanos-brown mb-3">
            Loved Your Cup?
          </h3>
          <p className="text-muted-foreground mb-6">
            Share your experience and help us serve you better!
          </p>
          
          <a 
            href="https://g.page/r/kastanoscafe/review" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Star size={18} />
            <span>Drop a Review</span>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ReviewSection;
