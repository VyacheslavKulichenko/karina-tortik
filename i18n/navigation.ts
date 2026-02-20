import { createNavigation } from 'next-intl/navigation';
import { locales } from './index';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales,
  defaultLocale: 'uk',
  localePrefix: 'always',
  localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
