
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import WhatWeServeSection from '../components/sections/WhatWeServeSection';
import GallerySection from '../components/sections/GallerySection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import MenuSection from '../components/sections/MenuSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ReviewSection from '../components/sections/ReviewSection';
import ComingSoonSection from '../components/sections/ComingSoonSection';
import LocationSection from '../components/sections/LocationSection';
import OrderSection from '../components/sections/OrderSection';
import FooterSection from '../components/sections/FooterSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { initScrollAnimation } from '../utils/animationUtils';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimation();
    
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to Kastanos!",
        description: "Order your coffee and snacks for a quick pickup during your commute.",
        duration: 3000,
      });
    }, 2000);
  }, [toast]);

  return (
    <div className="min-h-screen bg-white text-kastanos-text">
      <Header />
      <main>
        <HeroSection />
        <WhatWeServeSection />
        <GallerySection />
        <HowItWorksSection />
        <MenuSection />
        <WhyChooseUsSection />
        <OrderSection />
        <ReviewSection />
        <ComingSoonSection />
        <LocationSection />
      </main>
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
