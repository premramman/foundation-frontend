import React from 'react';
import BrandLogo from '../../atoms/BrandLogo';

const BrandIcon: React.FC = () => (
  <a
    href="/"
    aria-label="Home"
    className="flex items-center gap-1 font-bold text-xl text-primary"
  >
    <BrandLogo showAppName={true} />
  </a>
);

export default BrandIcon;