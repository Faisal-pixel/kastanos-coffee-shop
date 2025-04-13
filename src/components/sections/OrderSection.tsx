
import React from 'react';
import SectionHeading from '../SectionHeading';
import RevealOnScroll from '../RevealOnScroll';
import { QrCode } from 'lucide-react';

const OrderSection = () => {
  return (
    <section id="order" className="section-container bg-white">
      <SectionHeading 
        title="Scan & Order" 
        subtitle="Experience our quick and easy ordering system!"
      />
      
      <RevealOnScroll>
        <div className="max-w-lg mx-auto bg-kastanos-beige/20 p-8 rounded-lg text-center">
          <div className="bg-white p-4 rounded-lg inline-block mb-6">
            <QrCode size={180} className="text-kastanos-brown" />
          </div>
          
          <h3 className="text-xl font-serif font-semibold text-kastanos-brown mb-3">
            Ready to Order?
          </h3>
          <p className="text-muted-foreground mb-6">
            Scan this QR code with your phone's camera<br />
            to open our digital menu and place your order.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              Download QR Code
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              Demo Order
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default OrderSection;
