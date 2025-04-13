
import React from 'react';

interface MenuItemProps {
  name: string;
  price: string | number;
}

const MenuCard = ({ name, price }: MenuItemProps) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-kastanos-beige/50 last:border-b-0">
      <span className="font-medium">{name}</span>
      <span className="text-kastanos-bronze font-semibold">₦{price}</span>
    </div>
  );
};

export default MenuCard;
