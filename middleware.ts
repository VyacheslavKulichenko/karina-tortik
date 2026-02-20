import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/index';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: false,
});

export const config = {
  matcher: ['/', '/(uk|ru|en|es)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
