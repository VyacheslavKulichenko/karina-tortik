"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTranslations } from "next-intl";

export default function TypedText() {
  const t = useTranslations("hero.typed");
  const el = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);
  const stringsRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (el.current && stringsRef.current) {
      typedInstance.current = new Typed(el.current, {
        stringsElement: stringsRef.current,
        loop: true,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2500,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [t]);

  return (
    <>
      <span ref={stringsRef} style={{ display: "none" }}>
        <b>{t("allCakes")}</b>
        <b>{t("tastyDesserts")}</b>
        <b>{t("cheesecakes")}</b>
      </span>
      <span id="typed" ref={el} />
    </>
  );
}
