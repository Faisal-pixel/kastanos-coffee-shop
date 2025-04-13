
import React from 'react';

interface CoffeeBeanProps {
  style?: React.CSSProperties;
}

const CoffeeBean = ({ style }: CoffeeBeanProps) => {
  return (
    <svg 
      className="coffee-bean" 
      style={style} 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" 
        fill="#4B2E2B" 
      />
      <path 
        d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" 
        stroke="#4B2E2B" 
        strokeWidth="1.5" 
      />
      <path 
        d="M12 18C13.6569 18 15 15.3137 15 12C15 8.68629 13.6569 6 12 6C10.3431 6 9 8.68629 9 12C9 15.3137 10.3431 18 12 18Z" 
        stroke="#F5F3E7" 
        strokeWidth="0.5" 
      />
    </svg>
  );
};

export default CoffeeBean;
