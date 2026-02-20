"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/i18n/index";
import { useTransition } from "react";

const languageNames = {
  uk: "УКР",
  ru: "РУС",
  en: "ENG",
  es: "ESP",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Use next-intl's router which properly handles locale switching
      router.replace(pathname, { locale: newLocale as any });
    });
  };

  return (
    <div className="language-switcher">
      <div className="language-switcher__wrapper">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            className={`language-switcher__btn ${
              locale === loc ? "active" : ""
            } ${isPending ? "loading" : ""}`}
            aria-label={`Switch to ${languageNames[loc]}`}
            disabled={isPending || locale === loc}
          >
            {languageNames[loc]}
          </button>
        ))}
      </div>
    </div>
  );
}
