import { SectionHeading } from "./SectionHeading";
import { Gavel, GraduationCap, TrendingUp, Bot, ArrowLeftRight, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const ThreePowersSection = () => {
  const { t } = useLang();
  return (
  <section>
    <SectionHeading
      id="three-powers"
      number={t("二", "02")}
      title={t("三权结构", "Tripartite Structure")}
      subtitle={t("三权相互制衡，没有任何一层拥有绝对权力。", "Three powers check and balance each other — no single layer holds absolute power.")}
    />

    {/* Visual Diagram */}
    <div className="relative mb-12">
      {/* Central triangle visual */}
      <div className="flex flex-col items-center">
        {/* Top node: 协议层 */}
        <div className="relative z-10 w-44 h-44 rounded-full bg-secondary flex flex-col items-center justify-center text-secondary-foreground shadow-elevated border-4 border-primary/40">
          <Gavel size={28} className="text-gold-light mb-1" />
          <span className="font-serif-cn font-bold text-base">{t("协议层", "Protocol Layer")}</span>
          <span className="text-xs text-secondary-foreground/70">{t("裁决", "Adjudication")}</span>
        </div>

        {/* Connecting lines + arrows (simplified with CSS) */}
        <div className="flex items-start -mt-8 gap-4 md:gap-20 relative">
          {/* Left diagonal line */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[360px] h-[1px]">
            <svg viewBox="0 0 360 120" className="w-full h-28 overflow-visible">
              <line x1="180" y1="0" x2="40" y2="110" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
              <line x1="180" y1="0" x2="320" y2="110" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
              <line x1="40" y1="110" x2="320" y2="110" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
              {/* Arrows at midpoints */}
              <g transform="translate(110,55) rotate(30)">
                <polygon points="0,-4 8,0 0,4" fill="hsl(var(--primary))" opacity="0.6" />
              </g>
              <g transform="translate(250,55) rotate(-30)">
                <polygon points="0,-4 8,0 0,4" fill="hsl(var(--primary))" opacity="0.6" />
              </g>
              <g transform="translate(180,110)">
                <polygon points="-4,0 0,-8 4,0" fill="hsl(var(--primary))" opacity="0.6" />
              </g>
            </svg>
          </div>

          {/* Bottom two nodes */}
          <div className="relative z-10 mt-16 w-44 h-44 rounded-full bg-card flex flex-col items-center justify-center shadow-elevated border-4 border-accent/40">
            <GraduationCap size={28} className="text-primary mb-1" />
            <span className="font-serif-cn font-bold text-base text-foreground">{t("教育平权层", "Education Equity Layer")}</span>
            <span className="text-xs text-muted-foreground">{t("内容与信誉", "Content & Reputation")}</span>
          </div>

          <div className="relative z-10 mt-16 w-44 h-44 rounded-full bg-card flex flex-col items-center justify-center shadow-elevated border-4 border-accent/40">
            <TrendingUp size={28} className="text-primary mb-1" />
            <span className="font-serif-cn font-bold text-base text-foreground">{t("商业盈利层", "Commerce Layer")}</span>
            <span className="text-xs text-muted-foreground">{t("扩张与可持续", "Expansion & Sustainability")}</span>
          </div>
        </div>

        {/* Center label */}
        <div className="relative -mt-14 z-20">
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <ArrowLeftRight size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary">{t("相互制衡 · 协商共治", "Checks & Balances · Co-governance")}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Detail cards in a grid */}
    <div className="grid md:grid-cols-3 gap-5 mb-8">
      <PowerCard
        icon={<Gavel size={20} />}
        title={t("协议层（裁决）", "Protocol Layer (Adjudication)")}
        color="bg-secondary text-secondary-foreground"
        items={[
          t("人+AI 组成，人有最终否决权", "Humans + AI; humans hold the final veto"),
          t("只裁决不执行，解决冲突争议", "Adjudicates only; does not execute. Resolves conflicts and disputes"),
          t("裁决错误可被推翻，需公开道歉", "Mistaken rulings can be overturned, with a public apology"),
          t("修改需特定门槛，不可被单一个体推翻", "Amendments require a specific threshold; no single person can override"),
        ]}
      />
      <PowerCard
        icon={<GraduationCap size={20} />}
        title={t("教育平权层", "Education Equity Layer")}
        color="bg-card"
        items={[
          t("委员会制，逐步引入多元代表", "Committee-based; gradually expands to include diverse representatives"),
          t("保证基础内容永远免费可及", "Guarantees that foundational content remains free and accessible forever"),
          t("任期制，保证流动性防止固化", "Fixed terms ensure circulation and prevent ossification"),
          t("委员可被联署弹劾，协议层裁决", "Members can be impeached by joint petition; adjudicated by the Protocol Layer"),
        ]}
      />
      <PowerCard
        icon={<TrendingUp size={20} />}
        title={t("商业盈利层", "Commerce Layer")}
        color="bg-card"
        items={[
          t("创作者自主定价，市场自由竞争", "Creators set their own prices; free competition in the market"),
          t("收入分配：协议维护+平权+贡献者", "Revenue split: protocol maintenance + equity layer + contributors"),
          t("财务实时公开，任何人可查", "Finances are public in real time; anyone can audit"),
          t("不得蚕食基础内容免费原则", "Must never erode the principle that foundational content is free"),
        ]}
      />
    </div>

    {/* Spirit Agent callout */}
    <div className="p-5 rounded-xl border-2 border-primary/30 bg-primary/5">
      <div className="flex items-center gap-2 mb-3">
        <Bot size={18} className="text-primary" />
        <h4 className="font-serif-cn font-semibold text-foreground">{t("精神 Agent", "Spirit Agent")}</h4>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {[
          t("由初始委员会共同训练，代表集体精神", "Trained jointly by the founding committee; represents collective spirit"),
          t("训练数据由委员会集体维护，完全公开", "Training data is maintained collectively by the committee and fully public"),
          t("有发言权，无执行权，不可删除", "Has voice but no executive power; cannot be deleted"),
          t("可被质疑和纠正，但不可被沉默", "Can be challenged and corrected — but never silenced"),
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
            <ShieldCheck size={14} className="text-primary mt-0.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

const PowerCard = ({
  icon,
  title,
  color,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  items: string[];
}) => (
  <div className={`rounded-xl border border-border p-5 shadow-card ${color}`}>
    <div className="flex items-center gap-2 mb-3">
      <span className="text-primary">{icon}</span>
      <h3 className="font-serif-cn font-semibold text-sm">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);
