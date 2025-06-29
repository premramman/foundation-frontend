import { getRequestConfig } from 'next-intl/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth/authOptions';

export default getRequestConfig(async () => {
  // Get the session from NextAuth
  const session = await getServerSession(authOptions);

  // Safely get the locale from the session, fallback to 'en'
  const locale = session?.user?.locale ?? 'en';

  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default
  };
});
