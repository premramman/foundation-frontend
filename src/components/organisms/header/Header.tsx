'use client';

import React from 'react';
import SidebarToggleButton from './SidebarToggleButton';
import BrandIcon from './BrandIcon';
import SearchBar from '../../molecules/SearchBar';
import IconButtons from './IconButtons';
import { AvatarMenu } from './AvatarMenu';
import { User } from '@/types/user';

  const user: User = {
    image: "",
    name: "P",
    email: "test@gmail.com"
  }

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-4 py-2 border-b bg-background sticky top-0 z-50">
    <div className="flex items-center gap-4">
      <SidebarToggleButton />
      <BrandIcon />
    </div>
    <div className="flex-1 flex justify-center">
      <SearchBar />
    </div>
    <div className="flex items-center gap-4">
      <IconButtons />
      <AvatarMenu user={user} />
    </div>
  </header>
);

export default Header;
