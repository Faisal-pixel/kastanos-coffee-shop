
import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const InfoCard = ({ icon: Icon, title, description, className = '' }: InfoCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-5 shadow-sm flex flex-col items-center text-center ${className} card-hover`}>
      <div className="w-12 h-12 rounded-full bg-kastanos-beige flex items-center justify-center mb-3">
        <Icon className="text-kastanos-brown h-6 w-6" />
      </div>
      <h3 className="text-lg font-serif font-medium text-kastanos-brown mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default InfoCard;
