
import React from 'react';
import SectionHeading from '../SectionHeading';
import InfoCard from '../InfoCard';
import RevealOnScroll from '../RevealOnScroll';
import { Coffee, Utensils, Scan, Users } from 'lucide-react';

const WhatWeServeSection = () => {
  const services = [
    {
      icon: Coffee,
      title: 'Freshly Brewed Coffee',
      description: 'Aromatic brews crafted with premium beans, prepared fresh for each customer.'
    },
    {
      icon: Utensils,
      title: 'Delicious Snacks',
      description: 'Savory treats and our signature banana bread to complement your coffee experience.'
    },
    {
      icon: Scan,
      title: 'Seamless QR Ordering',
      description: 'Skip the line with our quick and easy digital ordering system.'
    },
    {
      icon: Users,
      title: 'Friendly Café Experience',
      description: 'A welcoming community space with a team that makes you feel at home.'
    }
  ];

  return (
    <section id="what-we-serve" className="section-container bg-kastanos-beige/30">
      <SectionHeading 
        title="What We Serve" 
        subtitle="Experience premium coffee and snacks designed for commuters on the go."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {services.map((service, index) => (
          <RevealOnScroll key={service.title} delay={index * 150}>
            <InfoCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default WhatWeServeSection;
