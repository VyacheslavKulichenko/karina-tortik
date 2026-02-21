"use client";

import { useLocale } from "next-intl";
import { usePathname as useNextPathname, useRouter } from "next/navigation";
import { locales } from "@/i18n/index";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const languageData = {
  uk: { flag: "🇺🇦", name: "Українська" },
  ru: { name: "Русский" },
  en: { flag: "🇬🇧", name: "English" },
  es: { flag: "🇪🇸", name: "Español" },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = useNextPathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPositioned, setIsPositioned] = useState(false);
  const [displayLocale, setDisplayLocale] = useState(locale);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDisplayLocale(locale);
  }, [locale]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const positionSwitcher = () => {
      const logo = document.querySelector('.logo');
      const colorSwitcher = document.querySelector('.color');
      const switcher = dropdownRef.current;

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
        setIsPositioned(true);
      }
    };

    // Multiple attempts to ensure correct positioning
    let attempts = 0;
    const maxAttempts = 10;

    const tryPosition = () => {
      positionSwitcher();
      attempts++;

      if (attempts < maxAttempts) {
        requestAnimationFrame(tryPosition);
      }
    };

    // Start positioning attempts
    setTimeout(tryPosition, 50);

    // Also position on resize
    window.addEventListener('resize', positionSwitcher);

    return () => {
      window.removeEventListener('resize', positionSwitcher);
    };
  }, []);

  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const pathWithoutLocale = segments.slice(1).join('/');
    return `/${newLocale}${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`;
  };

  const currentLangData = languageData[displayLocale as keyof typeof languageData];

  return (
    <div
      className="language-switcher"
      ref={dropdownRef}
      style={{ opacity: isPositioned ? 1 : 0, transition: 'opacity 0.2s' }}
    >
      <button
        className="language-switcher__current"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        {currentLangData.flag && (
          <span className="language-switcher__flag">{currentLangData.flag}</span>
        )}
        <span className="language-switcher__name">{currentLangData.name}</span>
        <span className={`language-switcher__arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="language-switcher__dropdown">
          {locales.map((loc) => {
            if (loc === displayLocale) return null;
            const lang = languageData[loc as keyof typeof languageData];
            return (
              <Link
                key={loc}
                href={getLocalizedPath(loc)}
                className="language-switcher__option"
                onClick={(e) => {
                  e.preventDefault();
                  setDisplayLocale(loc);
                  setIsOpen(false);
                  router.push(getLocalizedPath(loc));
                }}
              >
                {lang.flag ? (
                  <span className="language-switcher__flag">{lang.flag}</span>
                ) : (
                  <span className="language-switcher__flag" style={{ visibility: 'hidden' }}></span>
                )}
                <span className="language-switcher__name">{lang.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
