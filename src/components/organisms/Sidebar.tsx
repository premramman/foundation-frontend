import React from 'react';
import { Drawer } from '@/components/atoms/Drawer'; // shadcn/ui drawer

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} aria-label="Sidebar navigation">
    {/* Sidebar content here */}
  </Drawer>
);

export default Sidebar;
