"use client";
import React, { useEffect, useState } from "react";
import HoverCursorEffect from "../animation/HoverCursorEffect";

export default function ThemeSwitcherButton({
  parentClass = "color",
  hasBuyBtn = false,
}) {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    // Initialize from localStorage or default to dark
    const savedScheme = (localStorage.getItem("color-scheme") as "light" | "dark") || "dark";
    setColorScheme(savedScheme);
    document.documentElement.setAttribute("color-scheme", savedScheme);
    setShowSwitcher(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", colorScheme);
    localStorage.setItem("color-scheme", colorScheme);
  }, [colorScheme]);

  const handleColorSwitch = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className={parentClass}>
      {showSwitcher ? (
        <button
          id="color-switcher"
          className={
            "color-switcher d-flex align-items-center justify-content-center"
          }
          type="button"
          role="switch"
          aria-label="light/dark mode"
          aria-checked={colorScheme === "dark"}
          onClick={handleColorSwitch}
        >
          <em />
          <i
            className={
              colorScheme === "dark"
                ? "ph-bold ph-sun"
                : "ph-bold ph-moon-stars text-white"
            }
          />
        </button>
      ) : (
        ""
      )}
      {hasBuyBtn ? (
        <HoverCursorEffect
          as="a"
          className="btn btn-default-small hover-default-small"
          href="https://themeforest.net/item/blayden-personal-portfolio-resume-nextjs-template/59673134"
          target="_blank"
          emZIndex="0"
        >
          <span className="btn-caption" style={{ zIndex: 1 }}>
            Buy now
          </span>
          <i className="ph ph-shopping-bag" style={{ zIndex: 1 }} />
        </HoverCursorEffect>
      ) : (
        ""
      )}
    </div>
  );
}
