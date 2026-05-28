import { SectionHeading } from "./SectionHeading";
import { Shield, Star, LogOut, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const IncentiveSection = () => {
  const { t } = useLang();
  const tiers = [
    { icon: <Shield size={20} />, title: t("第一层：生存保障", "Layer 1 · Livelihood"), content: t(
      "做核心工作的人——协议维护、平权委员会、基础内容开发——从平台商业收入中获得固定薪酬。薪酬标准由协议规定上限，公开透明，不可随意上涨。",
      "Those doing core work — protocol maintenance, the equity committee, foundational content — receive fixed salaries from platform commercial revenue. Salary ceilings are set by the protocol, public and transparent, and cannot be raised at will."
    ) },
    { icon: <Star size={20} />, title: t("第二层：贡献积分", "Layer 2 · Contribution Points"), content: t(
      "所有贡献——上传内容、开发插件、参与裁决、维护协议——被系统永久记录，转化为贡献积分。积分可换取：平台分红的一部分、荣誉认证、委员会提名资格。",
      "Every contribution — uploading content, building plugins, taking part in rulings, maintaining the protocol — is permanently recorded and converted into points. Points are redeemable for: a share of platform dividends, honorary certification, and eligibility for committee nomination."
    ) },
    { icon: <LogOut size={20} />, title: t("第三层：退出保护", "Layer 3 · Exit Protection"), content: t(
      "任何贡献者离开平台，积分记录永久保留，署名不可被删除，平台外的收入不受影响。没有人可以因为离开而被惩罚。",
      "If any contributor leaves, the point record is preserved forever, credit cannot be removed, and outside income is untouched. No one is ever punished for leaving."
    ) },
  ];

  const builderRights = [
    { label: t("前期投入", "Upfront Input"), value: t("开发成本、时间成本、内容价值被量化记录在初始协议里，公开透明，任何建设者适用。", "Development cost, time, and content value are quantified in the initial protocol — public, transparent, and applicable to any builder.") },
    { label: t("偿还方式", "Repayment"), value: t("平台开始盈利后，这笔投入按协议规定优先偿还，偿还完毕后与所有贡献者同等规则。", "Once the platform turns profitable, that upfront input is repaid first per the protocol; afterward, the same rules apply as for any other contributor.") },
    { label: t("薪酬标准", "Compensation"), value: t("与其他核心贡献者相同，由协议规定，不可因建设者身份获得超额收益。", "Identical to other core contributors, set by the protocol; no extra returns simply for being a builder.") },
    { label: t("约束", "Constraints"), value: t("所有建设者同样受协议约束，同样可被弹劾，同样服从协议层裁决。", "All builders are bound by the protocol, equally subject to impeachment, equally subject to Protocol Layer rulings.") },
    { label: t("精神传承", "Spiritual Continuity"), value: t("协议作者的判断方式和价值观被编码进精神 agent，在作者不在时也能继续发挥作用。", "The author's way of judging and values are encoded into the Spirit Agent so they continue to function even after the author is gone.") },
  ];

  const comparison = [
    { solo: t("从零开始建用户基础", "Build a user base from zero"), join: t("进入已有真实用户的平台", "Step into a platform with real existing users") },
    { solo: t("自己搭建所有基础设施", "Build all the infrastructure yourself"), join: t("直接用现成的学科框架、AI 系统、关卡机制", "Use ready-made subject frames, AI systems, and level mechanics") },
    { solo: t("内容的曝光完全靠自己", "Your content's reach is entirely on you"), join: t("平台流量和认证体系帮你被更多人看见", "Platform traffic and certification help more people find you") },
    { solo: t("贡献无人记录，离开两手空空", "No one records contributions; you leave empty-handed"), join: t("贡献永久记录，署名不可删除，离开有保护", "Permanent record, undeletable credit, protected exit") },
    { solo: t("一个人扛所有", "Carrying everything alone"), join: t("有协议保护，有社区支持，有共同目标", "Protocol protection, community support, shared purpose") },
  ];

  return (
  <section>
    <SectionHeading
      id="incentives"
      number={t("三", "03")}
      title={t("贡献者激励机制", "Contributor Incentives")}
      subtitle={t("每个人应得的，一分不少。每个人不该得的，一分不多。", "Everyone gets exactly what they deserve — no less, no more.")}
    />

    {/* Three tiers */}
    <div className="grid md:grid-cols-3 gap-5 mb-10">
      {tiers.map((tier, i) => (
        <div key={i} className="rounded-xl bg-card border border-border p-5 shadow-card hover:shadow-elevated transition-shadow">
          <span className="text-primary mb-3 inline-block">{tier.icon}</span>
          <h3 className="font-serif-cn font-semibold text-foreground mb-2">{tier.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{tier.content}</p>
        </div>
      ))}
    </div>

    {/* Builder rights */}
    <div className="rounded-xl bg-muted border border-border p-6 mb-10">
      <div className="flex items-center gap-2 mb-4">
        <Users size={18} className="text-primary" />
        <h3 className="font-serif-cn text-lg font-semibold text-foreground">{t("建设者的权利与约束", "Builders' Rights & Constraints")}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        {t(
          "所有早期核心建设者，包括协议的起草者本人，在这个体系里没有特权，只有责任和应得的回报。",
          "All early core builders — including the protocol's own drafter — have no privileges in this system: only responsibilities, and what they have earned."
        )}
      </p>
      <div className="space-y-3">
        {builderRights.map((r, i) => (
          <div key={i} className="flex gap-3 text-sm">
            <span className="font-semibold text-foreground shrink-0 w-24">{r.label}</span>
            <span className="text-muted-foreground">{r.value}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Comparison table */}
    <div className="rounded-xl border border-border overflow-hidden shadow-card">
      <div className="grid grid-cols-2 text-center font-serif-cn font-semibold text-sm">
        <div className="bg-muted py-3 border-r border-border text-muted-foreground">{t("如果你另起炉灶", "If you go it alone")}</div>
        <div className="bg-primary/10 py-3 text-foreground">{t("如果你加入知识之门", "If you join the Knowledge Gate")}</div>
      </div>
      {comparison.map((row, i) => (
        <div key={i} className="grid grid-cols-2 text-sm border-t border-border">
          <div className="px-4 py-3 border-r border-border text-muted-foreground">{row.solo}</div>
          <div className="px-4 py-3 text-foreground/80">{row.join}</div>
        </div>
      ))}
    </div>
  </section>
);
};
