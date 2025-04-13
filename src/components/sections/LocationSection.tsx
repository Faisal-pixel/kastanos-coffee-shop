
import React from 'react';
import SectionHeading from '../SectionHeading';
import RevealOnScroll from '../RevealOnScroll';
import { MapPin, Instagram, MessageSquare, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="section-container">
      <SectionHeading 
        title="Location & Contact" 
        subtitle="Find us at the Mobolaji Johnson Train Station. We're here to serve you!"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
        <RevealOnScroll className="md:col-span-3 h-[400px]">
          {/* Embed Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7854633498716!2d3.3606448148943383!3d6.5431535953828215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c144653cd55%3A0x8757c567ba3806f4!2sMobolaji%20Johnson%20Station!5e0!3m2!1sen!2sng!4v1681855861489!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '0.5rem' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kastanos Cafe Location"
          ></iframe>
        </RevealOnScroll>
        
        <RevealOnScroll className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-serif font-semibold text-kastanos-brown flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5" />
                <span>Our Location</span>
              </h3>
              <p className="text-muted-foreground">
                Kastanos Coffee & Community<br />
                Inside Mobolaji Johnson Train Station<br />
                Ebute-Metta, Lagos
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-serif font-semibold text-kastanos-brown flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5" />
                <span>Opening Hours</span>
              </h3>
              <p className="text-muted-foreground">
                Monday - Friday: 6:00 AM - 9:00 PM<br />
                Saturday: 7:00 AM - 8:00 PM<br />
                Sunday: 8:00 AM - 6:00 PM
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-serif font-semibold text-kastanos-brown flex items-center gap-2 mb-3">
                <Instagram className="h-5 w-5" />
                <span>Social Media</span>
              </h3>
              <p className="text-muted-foreground">
                Follow us: <a 
                  href="https://instagram.com/kastanoscafe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-kastanos-bronze hover:underline"
                >
                  @kastanoscafe
                </a>
              </p>
            </div>
            
            <div className="mt-auto">
              <a 
                href="https://wa.me/2348000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                <span>Message Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default LocationSection;
