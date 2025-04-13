
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import RevealOnScroll from '../RevealOnScroll';

const GallerySection = () => {
  // Sample gallery images - would be replaced with actual images
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978&auto=format&fit=crop',
      alt: 'Kastanos interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=2070&auto=format&fit=crop',
      alt: 'Barista prepping a drink'
    },
    {
      url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop',
      alt: 'Latte art'
    },
    {
      url: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=1974&auto=format&fit=crop',
      alt: 'Commuters relaxing'
    }
  ];
  
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
  return (
    <section id="gallery" className="section-container">
      <SectionHeading 
        title="Our Vibes" 
        subtitle="Step into our cozy train-station café and experience the Kastanos atmosphere."
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-8">
        {galleryImages.map((image, index) => (
          <RevealOnScroll key={index} delay={index * 100}>
            <div 
              className="overflow-hidden rounded-lg cursor-pointer aspect-square card-hover" 
              onClick={() => setActiveImage(index)}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>
      
      {activeImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img 
              src={galleryImages[activeImage].url} 
              alt={galleryImages[activeImage].alt}
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(null);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
