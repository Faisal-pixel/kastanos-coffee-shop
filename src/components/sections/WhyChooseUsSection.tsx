
import React from 'react';
import SectionHeading from '../SectionHeading';
import InfoCard from '../InfoCard';
import RevealOnScroll from '../RevealOnScroll';
import { Clock, Utensils, MapPin, Users, QrCode } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'No Wait Times',
      description: 'Quick service designed for busy commuters who are on the go.'
    },
    {
      icon: Utensils,
      title: 'Delicious Snacks',
      description: 'Fresh pastries and our famous banana bread made daily.'
    },
    {
      icon: MapPin,
      title: 'Cozy Train-Station Café',
      description: 'Conveniently located inside the Mobolaji Johnson Train Station.'
    },
    {
      icon: Users,
      title: 'Friendly Staff',
      description: 'Our baristas are passionate about creating a welcoming experience.'
    },
    {
      icon: QrCode,
      title: 'Easy QR Ordering',
      description: 'Seamless digital system that gets you your coffee faster.'
    }
  ];

  return (
    <section id="why-choose-us" className="section-container">
      <SectionHeading 
        title="Why Choose Kastanos?" 
        subtitle="We've designed our café experience with commuters in mind."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {benefits.map((benefit, index) => (
          <RevealOnScroll key={benefit.title} delay={index * 100}>
            <InfoCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              className={index === benefits.length - 1 ? "lg:col-start-2" : ""}
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
