export const BuilderHero = () => {
  return (
    <section className="bg-hero-gradient text-secondary-foreground py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 font-sans">
          Builder Portal · 建设者入口
        </p>
        <h1 className="font-serif-cn text-4xl md:text-6xl font-bold mb-6 text-secondary-foreground leading-tight">
          知识之门<span className="text-gradient-gold">治理协议</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8 font-serif-cn">
          以协议为先，商业在协议的框架里扩张，协议本身不能被商业吞噬。
        </p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-foreground/10 border border-secondary-foreground/20 text-sm text-secondary-foreground/80">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          治理白皮书 v0.1 · 初始委员会讨论草稿
        </div>
      </div>
    </section>
  );
};
