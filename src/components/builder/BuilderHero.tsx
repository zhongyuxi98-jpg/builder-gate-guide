import { useLang } from "@/lib/i18n";

export const BuilderHero = () => {
  const { t } = useLang();
  return (
    <section className="bg-hero-gradient text-secondary-foreground py-16 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold-light text-xs md:text-sm tracking-[0.3em] uppercase mb-3 md:mb-4 font-sans">
          {t("Builder Portal · 建设者入口", "Builder Portal · Entry")}
        </p>
        <h1 className="font-serif-cn text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-secondary-foreground leading-tight">
          {t("知识之门", "The Knowledge Gate")}
          <span className="text-gradient-gold">{t("治理协议", " Protocol")}</span>
        </h1>
        <p className="text-base md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8 font-serif-cn">
          {t(
            "以协议为先，商业在协议的框架里扩张，协议本身不能被商业吞噬。",
            "Protocol first. Commerce expands within the protocol's frame. The protocol itself can never be devoured by commerce."
          )}
        </p>
        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-secondary-foreground/10 border border-secondary-foreground/20 text-xs md:text-sm text-secondary-foreground/80">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          {t("治理白皮书 v0.1 · 初始委员会讨论草稿", "Governance White Paper v0.1 · Founding Committee Draft")}
        </div>
      </div>
    </section>
  );
};