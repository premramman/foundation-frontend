import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['picsum.photos'],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);