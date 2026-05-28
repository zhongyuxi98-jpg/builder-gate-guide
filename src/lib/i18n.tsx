import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "zh" | "en";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (zh: string, en: string) => string;
}

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "kg-lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "zh" || stored === "en") return stored;
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("zh") ? "zh" : "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    // Sync key meta tags for SEO / social previews
    const setMeta = (sel: string, val: string) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute("content", val);
    };
    if (lang === "zh") {
      document.title = "知识之门 · 建设者门户 | Knowledge Gate";
      setMeta('meta[name="description"]', "知识之门建设者门户：组织精神、三权结构、激励机制、贡献渠道与申请标准，一个开放、可持续的学习与教学协作系统。");
      setMeta('meta[property="og:title"]', "知识之门 · 建设者门户");
      setMeta('meta[property="og:locale"]', "zh_CN");
    } else {
      document.title = "Knowledge Gate · Builder Portal";
      setMeta('meta[name="description"]', "The Knowledge Gate Builder Portal: spirit, tripartite governance, incentives, contribution channels and application standards — an open, sustainable system for learning and teaching collaboration.");
      setMeta('meta[property="og:title"]', "Knowledge Gate · Builder Portal");
      setMeta('meta[property="og:locale"]', "en_US");
    }
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang: setLangState,
    t: (zh, en) => (lang === "zh" ? zh : en),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = (): Ctx => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};

/** Pick a value from a bilingual object based on current language. */
export const pick = <T,>(lang: Lang, zh: T, en: T): T => (lang === "zh" ? zh : en);