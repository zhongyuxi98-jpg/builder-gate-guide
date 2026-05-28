import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n";

export const ContentRulesSection = () => {
  const { t } = useLang();
  const rules = [
    { case: t("平台化之前的内容", "Content created before joining"), ownership: t("完全归创作者本人", "Belongs fully to the creator"), revenue: t("完全归创作者本人", "Belongs fully to the creator") },
    { case: t("在平台上产生的收入", "Revenue generated on the platform"), ownership: t("内容仍归创作者", "Content still belongs to the creator"), revenue: t("平台内收入按规则分配（创作者+平台抽成）", "On-platform revenue is split per the rules (creator + platform share)") },
    { case: t("创作者离开平台", "Creator leaves the platform"), ownership: t("内容可以带走", "Content can be taken with them"), revenue: t("带走后的收入完全归创作者，平台不再抽成", "All post-departure revenue goes to the creator; no further platform share") },
    { case: t("委员会开发的基础内容", "Foundational content built by the committee"), ownership: t("归平台公共所有", "Held in common by the platform"), revenue: t("用于支撑免费教育，不作商业分配", "Used to support free education; not commercially distributed") },
    { case: t("AI 替代老师功能后", "After AI replaces teacher functions"), ownership: t("AI 能力留在平台", "The AI capability stays with the platform"), revenue: t("老师内容贡献积分永久保留，后续收益按积分分配", "Teachers' content contribution points are preserved forever; future revenue follows the points") },
  ];
  return (
  <section>
    <SectionHeading id="content-rules" number={t("五", "05")} title={t("内容归属规则", "Content Ownership Rules")} />

    <div className="rounded-xl border border-border overflow-hidden shadow-card mb-6">
      <div className="grid grid-cols-3 text-xs font-semibold bg-muted border-b border-border">
        <div className="px-4 py-3 border-r border-border text-foreground">{t("情形", "Scenario")}</div>
        <div className="px-4 py-3 border-r border-border text-foreground">{t("内容归属", "Content Ownership")}</div>
        <div className="px-4 py-3 text-foreground">{t("收入归属", "Revenue Ownership")}</div>
      </div>
      {rules.map((r, i) => (
        <div key={i} className="grid grid-cols-3 text-sm border-t border-border first:border-t-0">
          <div className="px-4 py-3 border-r border-border font-medium text-foreground/90">{r.case}</div>
          <div className="px-4 py-3 border-r border-border text-muted-foreground">{r.ownership}</div>
          <div className="px-4 py-3 text-muted-foreground">{r.revenue}</div>
        </div>
      ))}
    </div>

    <p className="text-sm text-foreground/70 italic font-serif-cn leading-relaxed p-4 bg-muted rounded-lg border border-border">
      {t(
        "核心原则：平台的生命力依赖于系统、协议和结构，而不是依赖于任何具体的老师或创作者。任何人都可以离开，系统继续运转。",
        "Core principle: the platform's vitality rests on system, protocol, and structure — not on any single teacher or creator. Anyone may leave; the system keeps running."
      )}
    </p>
  </section>
);
};
