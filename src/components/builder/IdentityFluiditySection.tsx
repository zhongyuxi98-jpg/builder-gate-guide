import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Repeat, GraduationCap, Hammer, BookOpenCheck, HeartHandshake, Gavel, Shield } from "lucide-react";

interface FlowPath {
  fromIcon: React.ReactNode;
  toIcon: React.ReactNode;
  from: { zh: string; en: string };
  to: { zh: string; en: string };
  trigger: { zh: string; en: string };
  guarantee: { zh: string; en: string };
}

const paths: FlowPath[] = [
  { fromIcon: <GraduationCap size={18} />, toIcon: <Hammer size={18} />, from: { zh: "学生", en: "Student" }, to: { zh: "造门者", en: "Door Builder" }, trigger: { zh: "一位学生走深了, 想把自己的某一个发现做成一扇门", en: "A student goes deep and wants to turn one of their discoveries into a gate" }, guarantee: { zh: "通过 JoinForm 申请, 配对支持, 之前的探索经历自动成为造门基础", en: "Apply via JoinForm, get paired support; prior exploration becomes the gate's foundation" } },
  { fromIcon: <BookOpenCheck size={18} />, toIcon: <Gavel size={18} />, from: { zh: "教师", en: "Teacher" }, to: { zh: "平权层委员会", en: "Equity Layer Committee" }, trigger: { zh: "一位教师用了一年, 累积足够的贡献积分 + 真实场景经验", en: "After a year of use with enough contribution points + real-world experience" }, guarantee: { zh: "可申请委员会提名, 协议层裁决, 任期制", en: "Eligible for committee nomination, ratified by the Protocol Layer, fixed term" } },
  { fromIcon: <HeartHandshake size={18} />, toIcon: <Shield size={18} />, from: { zh: "家长 / 资助者", en: "Parent / Sponsor" }, to: { zh: "治理顾问", en: "Governance Advisor" }, trigger: { zh: "长期资助 + 表达过对协议的具体理解", en: "Long-term sponsorship + demonstrated concrete understanding of the protocol" }, guarantee: { zh: "可被邀请成为顾问席, 有发言权无执行权", en: "May be invited to the advisor seat — voice but no executive power" } },
  { fromIcon: <Hammer size={18} />, toIcon: <GraduationCap size={18} />, from: { zh: "造门者", en: "Door Builder" }, to: { zh: "纯使用者(降级)", en: "Returning to Pure User (Step Down)" }, trigger: { zh: "一位造门者累了 / 想退到只是体验", en: "A Builder is tired / wants to step back to just experiencing" }, guarantee: { zh: "贡献记录永久保留 · 署名不删 · 随时可再回来", en: "Contributions kept forever · credit never deleted · can return any time" } },
];

export const IdentityFluiditySection = () => {
  const { t } = useLang();
  return (
    <section>
      <SectionHeading
        id="identity-fluidity"
        number={t("七·五", "07.5")}
        title={t("身份是流动的", "Identity Is Fluid")}
        subtitle={t("协助者 ↔ 被支援者 之间没有不可跨越的墙", "Contributor ↔ Recipient — there is no uncrossable wall")}
      />
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
        <p className="font-serif-cn text-lg text-foreground italic leading-relaxed">
          {t("我们 vs 他们 在协议里是 流动的。 没有 固定的 帮助者 和 被帮助者。 这是协议的核心。", '"We vs. them" is fluid in this protocol. There is no fixed helper and helped. This is the protocol\'s core.')}
        </p>
      </div>
      <p className="text-foreground/80 leading-relaxed mb-8 font-serif-cn">
        {t("协议明确支持身份变化。 一位 学生 可以变成 造门者; 一位 教师 可以进入 委员会; 一位 家长 可以成为 顾问; 一位 造门者 累了可以 降级成使用者, 贡献记录依然保留。", "The protocol explicitly supports identity change. A student can become a Door Builder; a teacher can join the committee; a parent can become an advisor; a Builder who is tired can step down to user, with their contribution record preserved.")}
      </p>
      <div className="space-y-4">
        {paths.map((path, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elevated transition-shadow">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-foreground/80 text-sm">
                <span className="text-primary">{path.fromIcon}</span>
                <span className="font-medium">{t(path.from.zh, path.from.en)}</span>
              </div>
              <ArrowRight size={18} className="text-primary" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-foreground text-sm border border-primary/20">
                <span className="text-primary">{path.toIcon}</span>
                <span className="font-semibold">{t(path.to.zh, path.to.en)}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div><p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">{t("触发条件", "Trigger")}</p><p className="text-foreground/80 leading-relaxed">{t(path.trigger.zh, path.trigger.en)}</p></div>
              <div><p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">{t("协议保障", "Protocol Guarantee")}</p><p className="text-foreground/80 leading-relaxed">{t(path.guarantee.zh, path.guarantee.en)}</p></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
        <div className="flex items-center gap-2 mb-3">
          <Repeat size={18} className="text-primary" />
          <h4 className="font-serif-cn font-semibold text-foreground">{t("两条铁律", "Two Iron Rules")}</h4>
        </div>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">·</span><span>{t("升级 需协议程序(申请 / 提名 / 审议), 不能因 关系亲近 跳过", "Upgrading requires protocol procedures (apply / nominate / deliberate); proximity alone is not enough")}</span></li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">·</span><span>{t("降级 / 退出 永远 不被惩罚, 贡献记录永久保留, 任何时刻可回来", "Stepping down / leaving is never punished; contribution records are preserved forever; you may return at any time")}</span></li>
        </ul>
      </div>
      <p className="mt-6 text-xs text-muted-foreground/70 italic font-serif-cn text-center leading-relaxed">
        {t("这就是为什么 知识之门 既不是 教育机构, 也不是 公司, 也不是 NGO —— 它是一个 协议下的流动共同体。", "This is why the Knowledge Gate is neither a school, nor a company, nor an NGO — it is a fluid commons under a protocol.")}
      </p>
    </section>
  );
};
