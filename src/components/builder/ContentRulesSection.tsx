import { SectionHeading } from "./SectionHeading";

const rules = [
  { case: "平台化之前的内容", ownership: "完全归创作者本人", revenue: "完全归创作者本人" },
  { case: "在平台上产生的收入", ownership: "内容仍归创作者", revenue: "平台内收入按规则分配（创作者+平台抽成）" },
  { case: "创作者离开平台", ownership: "内容可以带走", revenue: "带走后的收入完全归创作者，平台不再抽成" },
  { case: "委员会开发的基础内容", ownership: "归平台公共所有", revenue: "用于支撑免费教育，不作商业分配" },
  { case: "AI 替代老师功能后", ownership: "AI 能力留在平台", revenue: "老师内容贡献积分永久保留，后续收益按积分分配" },
];

export const ContentRulesSection = () => (
  <section>
    <SectionHeading id="content-rules" number="五" title="内容归属规则" />

    <div className="rounded-xl border border-border overflow-hidden shadow-card mb-6">
      <div className="grid grid-cols-3 text-xs font-semibold bg-muted border-b border-border">
        <div className="px-4 py-3 border-r border-border text-foreground">情形</div>
        <div className="px-4 py-3 border-r border-border text-foreground">内容归属</div>
        <div className="px-4 py-3 text-foreground">收入归属</div>
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
      核心原则：平台的生命力依赖于系统、协议和结构，而不是依赖于任何具体的老师或创作者。任何人都可以离开，系统继续运转。
    </p>
  </section>
);
