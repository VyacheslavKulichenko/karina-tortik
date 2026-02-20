"use client";

import { useLocale } from "next-intl";
import { usePathname as useNextPathname } from "next/navigation";
import { locales } from "@/i18n/index";
import Link from "next/link";

const languageNames = {
  uk: "УКР",
  ru: "РУС",
  en: "ENG",
  es: "ESP",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = useNextPathname();

  const getLocalizedPath = (newLocale: string) => {
    // Extract the path without locale prefix
    const segments = pathname.split('/').filter(Boolean);
    const pathWithoutLocale = segments.slice(1).join('/');
    return `/${newLocale}${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`;
  };

  return (
    <div className="language-switcher">
      <div className="language-switcher__wrapper">
        {locales.map((loc) => (
          <Link
            key={loc}
            href={getLocalizedPath(loc)}
            className={`language-switcher__btn ${
              locale === loc ? "active" : ""
            }`}
            aria-label={`Switch to ${languageNames[loc]}`}
            aria-current={locale === loc ? "page" : undefined}
            onClick={(e) => {
              if (locale === loc) {
                e.preventDefault();
              }
            }}
          >
            {languageNames[loc]}
          </Link>
        ))}
      </div>
    </div>
  );
}
