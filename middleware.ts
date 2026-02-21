import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/navigation';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(uk|ru|en|es)/:path*', '/((?!_next|_vercel|api|view-pdf|.*\\..*).*)'],
};
