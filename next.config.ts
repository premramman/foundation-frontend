import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);