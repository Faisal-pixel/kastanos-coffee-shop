
import React, { useEffect, useState } from 'react';
import SectionHeading from '../SectionHeading';
import RevealOnScroll from '../RevealOnScroll';
import { Scan, ShoppingCart, Clock } from 'lucide-react';

const HowItWorksSection = () => {
  const [countdown, setCountdown] = useState(120);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  
  useEffect(() => {
    if (isCountdownActive && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsCountdownActive(false);
      setCountdown(120);
    }
  }, [countdown, isCountdownActive]);
  
  const startCountdown = () => {
    setIsCountdownActive(true);
  };
  
  const steps = [
    {
      icon: Scan,
      title: 'Scan the QR Code',
      description: 'Use your phone camera to scan the Kastanos QR code at any of our locations.'
    },
    {
      icon: ShoppingCart,
      title: 'Choose & Pay',
      description: 'Select your favorite items from our menu and complete payment online.'
    },
    {
      icon: Clock,
      title: 'Wait for Pickup',
      description: 'Receive a countdown notification with your estimated pickup time.'
    }
  ];
  
  return (
    <section id="how-it-works" className="section-container bg-white">
      <SectionHeading 
        title="How It Works" 
        subtitle="Our streamlined ordering process gets you back on your commute in no time."
      />
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-kastanos-beige flex items-center justify-center mb-4 relative">
                  <Icon className="h-8 w-8 text-kastanos-brown" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-kastanos-brown text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-kastanos-brown mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index === 2 && (
                  <div className="mt-4">
                    {!isCountdownActive ? (
                      <button 
                        onClick={startCountdown}
                        className="btn-primary mt-2"
                      >
                        Simulate Countdown
                      </button>
                    ) : (
                      <div className="bg-kastanos-beige p-3 rounded-lg">
                        <div className="text-sm mb-1">Your order will be ready in:</div>
                        <div className="text-2xl font-semibold text-kastanos-brown">
                          {Math.floor(countdown / 60)}:{countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
