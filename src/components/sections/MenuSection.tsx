
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import MenuCard from '../MenuCard';
import RevealOnScroll from '../RevealOnScroll';
import { Coffee, Leaf, Plus, Cookie, Scan } from 'lucide-react';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('coffee');
  
  const menuData = {
    coffee: [
      { name: 'Drip Coffee (Plain)', price: 2000 },
      { name: 'Drip Coffee (With Milk)', price: 2500 },
      { name: 'Ice Latte', price: 4000 },
      { name: 'Ice Caramel Macchiato', price: 5000 },
      { name: 'Ice Mocha', price: 5000 },
      { name: 'Honey Cinnamon Latte', price: 5000 }
    ],
    teas: [
      { name: 'Green Tea', price: 2000 },
      { name: 'Black Tea', price: 2000 },
      { name: 'Strawberry/Raspberry Tea', price: 2000 },
      { name: 'Ice Teas', price: 2500 }
    ],
    extras: [
      { name: 'Shots', price: 2000 },
      { name: 'Milk', price: 500 }
    ],
    snacks: [
      { name: 'Donut', price: 900 },
      { name: 'Meat Pie', price: 1500 },
      { name: 'Chicken Pie', price: 1700 },
      { name: 'Banana Bread (Plain)', price: 1500 },
      { name: 'Banana Bread (Almond)', price: 1700 },
      { name: 'Banana Bread (Choco Chip)', price: 1700 }
    ]
  };
  
  const tabs = [
    { id: 'coffee', label: 'Coffee', icon: Coffee },
    { id: 'teas', label: 'Teas', icon: Leaf },
    { id: 'extras', label: 'Extras', icon: Plus },
    { id: 'snacks', label: 'Snacks', icon: Cookie }
  ];
  
  return (
    <section id="menu" className="section-container relative overflow-hidden bg-kastanos-beige/30">
      <SectionHeading 
        title="Our Menu" 
        subtitle="Quality ingredients, carefully crafted beverages, and freshly made snacks."
      />
      
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden relative z-10">
          <div className="flex flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-2 sm:px-4 flex items-center justify-center gap-2 transition-all ${
                    activeTab === tab.id 
                      ? 'bg-kastanos-brown text-white' 
                      : 'bg-kastanos-beige text-kastanos-brown hover:bg-kastanos-beige/70'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="p-6">
            {Object.keys(menuData).map((category) => (
              <div 
                key={category} 
                className={`transition-all duration-300 ${
                  activeTab === category ? 'block' : 'hidden'
                }`}
              >
                {menuData[category as keyof typeof menuData].map((item, index) => (
                  <MenuCard key={index} name={item.name} price={item.price} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      
      <div className="mt-8 text-center">
        <a href="#order" className="btn-primary inline-flex items-center gap-2">
          <Scan size={18} />
          <span>Order Now</span>
        </a>
      </div>
    </section>
  );
};

export default MenuSection;
