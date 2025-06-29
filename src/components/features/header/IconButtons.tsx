import React from 'react';
import { FiShoppingCart, FiBell } from 'react-icons/fi';

const IconButtons: React.FC = () => (
  <>
    <button
      aria-label="Cart"
      className="p-2 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <FiShoppingCart size={22} />
    </button>
    <button
      aria-label="Notifications"
      className="p-2 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <FiBell size={22} />
    </button>
  </>
);

export default IconButtons;
