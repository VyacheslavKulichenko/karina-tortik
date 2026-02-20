import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/index';
import type { Locale } from '@/i18n/index';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PortfolioPopup from "@/components/modals/PortfolioPopup";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LanguageSwitcher />
      {children}
      {/* Global popup rendered after body content so it's not nested inside specific sections */}
      <PortfolioPopup />
    </NextIntlClientProvider>
  );
}
