import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n";
import { FileText, Scale, Code2, Hammer, Palette, Megaphone } from "lucide-react";

interface BuilderRole {
  icon: React.ReactNode;
  title: { zh: string; en: string };
  layer: "protocol" | "equity" | "commerce";
  duty: { zh: string; en: string };
  mode: { zh: string; en: string };
  need: { zh: string; en: string };
  notWanted?: { zh: string; en: string };
  priority?: "high" | "medium";
}

const LAYER_STYLE = {
  protocol: { label: { zh: "协议层", en: "Protocol Layer" }, tag: { zh: "裁决", en: "Adjudication" }, color: "bg-secondary/10 border-secondary/30 text-secondary-foreground", badge: "bg-secondary text-secondary-foreground" },
  equity: { label: { zh: "平权层", en: "Equity Layer" }, tag: { zh: "内容&信誉", en: "Content & Reputation" }, color: "bg-primary/5 border-primary/30 text-foreground", badge: "bg-primary text-primary-foreground" },
  commerce: { label: { zh: "商业层", en: "Commerce Layer" }, tag: { zh: "扩张&可持续", en: "Expansion & Sustainability" }, color: "bg-amber-500/5 border-amber-500/30 text-foreground", badge: "bg-amber-500 text-white" },
};

const roles: BuilderRole[] = [
  { icon: <FileText size={20} />, layer: "protocol", title: { zh: "协议起草人", en: "Protocol Drafter" }, duty: { zh: "共同写协议条款 + 维护版本", en: "Co-draft protocol clauses and maintain versions" }, mode: { zh: "文档协作, 公开 review", en: "Doc collaboration, public review" }, need: { zh: "哲学 / 法律 / 治理思考力", en: "Philosophical / legal / governance thinking" } },
  { icon: <Scale size={20} />, layer: "protocol", title: { zh: "法律顾问", en: "Legal Advisor" }, duty: { zh: "法律层面把关协议合规性", en: "Ensure protocol compliance at the legal level" }, mode: { zh: "季度 review", en: "Quarterly review" }, need: { zh: "教育法 + 公益组织法 经验", en: "Education law + nonprofit/public-interest law" } },
  { icon: <Code2 size={20} />, layer: "equity", priority: "high", title: { zh: "技术合伙人", en: "Tech Co-founder" }, duty: { zh: "从 Lovable 迁出 cognitiondoor.com · 设计 multi-agent + RAG + character pipeline", en: "Migrate cognitiondoor.com off Lovable · design multi-agent + RAG + character pipeline" }, mode: { zh: "全职 / 50%+", en: "Full-time / 50%+" }, need: { zh: "full-stack + AI 工程", en: "Full-stack + AI engineering" }, notWanted: { zh: "想做 AI tutor 优化 retention 的人", en: "Anyone wanting to build an AI tutor that optimizes retention" } },
  { icon: <Hammer size={20} />, layer: "equity", priority: "high", title: { zh: "内容造门者", en: "Content Door Builder" }, duty: { zh: "认领 1 扇门(音乐/哲学/数学/中医/武术/古典音乐/书法等), 按造门指南 5 件事设计", en: "Claim one gate (music/philosophy/math/TCM/martial arts/classical music/calligraphy/etc.) and design it per the 5-step Builder Guide" }, mode: { zh: "1-3 个月/门, 兼职可", en: "1–3 months per gate, part-time OK" }, need: { zh: "在自己领域有 真传统 的从业者", en: "A practitioner with a real lineage in their field" } },
  { icon: <Palette size={20} />, layer: "equity", title: { zh: "设计合伙人", en: "Design Partner" }, duty: { zh: "守护水墨+宫崎骏视觉风格 · 反 engagement UI · 视觉规范精细化", en: "Steward the ink-wash + Ghibli visual style · anti-engagement UI · refine visual spec" }, mode: { zh: "兼职可", en: "Part-time OK" }, need: { zh: "艺术 + UI", en: "Art + UI" }, notWanted: { zh: "工业 UX 直觉强的", en: "Strong industrial-UX instincts" } },
  { icon: <Megaphone size={20} />, layer: "commerce", title: { zh: "运营 / 传播者", en: "Ops / Outreach" }, duty: { zh: "公众号 / 视频 / 同路人 outreach / 协议社区", en: "WeChat / video / outreach to kindred spirits / protocol community" }, mode: { zh: "兼职可", en: "Part-time OK" }, need: { zh: "理解开放协议传播逻辑(蒙台梭利 / W3C / SeeDAO 这一脉)", en: "Understands the open-protocol diffusion logic (Montessori / W3C / SeeDAO lineage)" } },
];

export const BuilderRolesSection = () => {
  const { t } = useLang();
  const byLayer = {
    protocol: roles.filter((r) => r.layer === "protocol"),
    equity: roles.filter((r) => r.layer === "equity"),
    commerce: roles.filter((r) => r.layer === "commerce"),
  };

  return (
    <section>
      <SectionHeading
        id="builder-roles"
        number={t("七", "07")}
        title={t("我们在找什么样的人", "Who We're Looking For")}
        subtitle={t("6 类具体角色 · 按 协议/平权/商业 三层分布", "Six specific roles, distributed across the three layers")}
      />
      <p className="text-foreground/80 leading-relaxed mb-8 font-serif-cn">
        {t("不是 员工, 是 同路人。 每一类角色对应一个明确的位置, 一个明确的工作, 一个明确的 需要 / 不要。", "Not employees, but kindred travelers. Each role has a clear position, a clear job, and a clear list of needed / not-wanted qualities.")}
      </p>
      {(["protocol", "equity", "commerce"] as const).map((layer) => (
        <div key={layer} className="mb-10 last:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${LAYER_STYLE[layer].badge}`}>{t(LAYER_STYLE[layer].label.zh, LAYER_STYLE[layer].label.en)}</span>
            <span className="text-xs text-muted-foreground">{t(LAYER_STYLE[layer].tag.zh, LAYER_STYLE[layer].tag.en)}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {byLayer[layer].map((role, i) => (
              <div key={i} className={`rounded-xl border p-5 shadow-card hover:shadow-elevated transition-shadow relative ${LAYER_STYLE[layer].color}`}>
                {role.priority === "high" && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-destructive/15 text-destructive border border-destructive/30">{t("急需", "Urgent")}</span>
                )}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0">{role.icon}</div>
                  <h3 className="font-serif-cn font-bold text-foreground text-base">{t(role.title.zh, role.title.en)}</h3>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div><p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{t("干什么", "Duty")}</p><p className="text-foreground/80 leading-snug">{t(role.duty.zh, role.duty.en)}</p></div>
                  <div><p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{t("方式", "Mode")}</p><p className="text-foreground/80 leading-snug">{t(role.mode.zh, role.mode.en)}</p></div>
                  <div><p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{t("需要", "Need")}</p><p className="text-foreground/80 leading-snug">{t(role.need.zh, role.need.en)}</p></div>
                  {role.notWanted && (
                    <div><p className="text-[10px] font-semibold text-destructive uppercase tracking-wide mb-0.5">{t("不要", "Not wanted")}</p><p className="text-destructive/80 leading-snug italic">{t(role.notWanted.zh, role.notWanted.en)}</p></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-8 p-5 rounded-xl bg-muted border border-border">
        <p className="text-sm text-foreground/80 leading-relaxed">
          {t("找不到完全匹配自己的位置? 没关系 —— 在 JoinForm 末尾的 留言 里写一段, 说 你想做什么 / 能做什么。 协议是 开放的, 角色清单也是 活的。", "Can't find a perfect match? It's OK — in the JoinForm's message field, write a paragraph describing what you want to do / can do. The protocol is open; the role list is alive.")}
        </p>
      </div>
    </section>
  );
};
