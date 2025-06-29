import React from 'react';
import { FiMenu } from 'react-icons/fi';

interface Props {
  onClick?: () => void;
}

const SidebarToggleButton: React.FC<Props> = ({ onClick }) => (
  <button
    aria-label="Open sidebar"
    className="p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
    onClick={onClick}
    type="button"
  >
    <FiMenu size={24} />
  </button>
);

export default SidebarToggleButton;
