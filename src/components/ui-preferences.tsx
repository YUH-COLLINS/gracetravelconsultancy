"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { LANGUAGE_OPTIONS, copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function UiPreferences({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage, theme, toggleTheme, setTheme } = useUiStore();
  const t = copy[language].home;

  useEffect(() => {
    const savedTheme = localStorage.getItem("gtc_theme");
    const savedLang = localStorage.getItem("gtc_language");

    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedLang && LANGUAGE_OPTIONS.some((l) => l.code === savedLang)) {
      setLanguage(savedLang as (typeof LANGUAGE_OPTIONS)[number]["code"]);
    }
  }, [setLanguage, setTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("gtc_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("gtc_language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <div className="flex items-center gap-2">
      <div className={`${mobile ? "flex" : "hidden md:flex"} items-center gap-1 rounded-full border border-white/25 bg-white/10 px-2 py-1`}>
        <Languages size={14} className="text-white/90" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as (typeof LANGUAGE_OPTIONS)[number]["code"])}
          className="bg-transparent text-xs font-medium text-white outline-none"
          aria-label="Language"
        >
          {LANGUAGE_OPTIONS.map((option) => (
            <option key={option.code} value={option.code} className="text-slate-900">
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={toggleTheme}
        title={t.switchTheme}
        className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold text-white"
      >
        {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        <span className="hidden md:inline">{theme === "dark" ? t.light : t.dark}</span>
      </button>
    </div>
  );
}
