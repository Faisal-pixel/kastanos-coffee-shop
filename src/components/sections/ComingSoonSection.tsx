
import React from 'react';
import SectionHeading from '../SectionHeading';
import RevealOnScroll from '../RevealOnScroll';
import { User, Train, Coffee } from 'lucide-react';

const ComingSoonSection = () => {
  const options = [
    {
      icon: User,
      title: 'Regular Customer',
      description: 'Basic orders via QR',
      status: 'Available Now',
      statusColor: 'bg-green-500'
    },
    {
      icon: Train,
      title: 'Commuter',
      description: 'Reserve your order while in transit',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-500'
    },
    {
      icon: Coffee,
      title: 'Subscriber',
      description: 'Account perks and exclusive discounts',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-500'
    }
  ];
  
  return (
    <section id="coming-soon" className="section-container bg-kastanos-beige/30">
      <SectionHeading 
        title="Coming Soon" 
        subtitle="We're constantly improving our services to make your coffee experience even better."
      />
      
      <div className="flex flex-col md:flex-row gap-6 mt-8 max-w-4xl mx-auto">
        {options.map((option, index) => {
          const Icon = option.icon;
          return (
            <RevealOnScroll key={index} delay={index * 150} className="flex-1">
              <div className={`bg-white rounded-lg overflow-hidden shadow-md h-full ${index === 0 ? '' : 'opacity-80'}`}>
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-kastanos-beige flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-kastanos-brown" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-kastanos-brown mb-1">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <span className={`${option.statusColor} text-white text-xs py-1 px-3 rounded-full`}>
                    {option.status}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
};

export default ComingSoonSection;
