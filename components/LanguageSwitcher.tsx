"use client";

import { useLocale } from "next-intl";
import { usePathname as useNextPathname } from "next/navigation";
import { locales } from "@/i18n/index";
import Link from "next/link";
import { useEffect, useRef } from "react";

const languageNames = {
  uk: "УКР",
  ru: "РУС",
  en: "ENG",
  es: "ESP",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = useNextPathname();
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const positionSwitcher = () => {
      const logo = document.querySelector('.logo');
      const colorSwitcher = document.querySelector('.color');
      const switcher = switcherRef.current;

      if (logo && colorSwitcher && switcher) {
        const logoRect = logo.getBoundingClientRect();
        const colorRect = colorSwitcher.getBoundingClientRect();

        // Calculate the center point between end of logo and start of color switcher
        const logoEnd = logoRect.right;
        const colorStart = colorRect.left;
        const centerPoint = (logoEnd + colorStart) / 2;

        // Position the switcher at the center point
        switcher.style.left = `${centerPoint}px`;
        switcher.style.transform = 'translateX(-50%)';
      }
    };

    // Position on mount and on resize
    positionSwitcher();
    window.addEventListener('resize', positionSwitcher);

    return () => {
      window.removeEventListener('resize', positionSwitcher);
    };
  }, []);

  const getLocalizedPath = (newLocale: string) => {
    // Extract the path without locale prefix
    const segments = pathname.split('/').filter(Boolean);
    const pathWithoutLocale = segments.slice(1).join('/');
    return `/${newLocale}${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`;
  };

  return (
    <div className="language-switcher" ref={switcherRef}>
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
