import { useLang } from "@/lib/i18n";
import { Languages } from "lucide-react";

export const LanguageSwitcher = ({ compact = false }: { compact?: boolean }) => {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-background/60 backdrop-blur px-1 py-0.5 text-xs ${compact ? "" : "shadow-sm"}`}
      role="group"
      aria-label="Language switcher"
    >
      <Languages size={12} className="text-muted-foreground ml-1" aria-hidden />
      <button
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          lang === "zh"
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        中
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};