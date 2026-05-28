import { SectionHeading } from "./SectionHeading";
import { CheckCircle2, XCircle, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const ApplicationStandardsSection = () => {
  const { t } = useLang();
  const requirements = [
    { text: t("认同知识之门的协议精神与组织价值观", "Accept the Knowledge Gate's protocol spirit and organizational values") },
    { text: t("拥有至少一项可贡献的技能（教学、开发、设计、翻译、运营等）", "Have at least one contributable skill (teaching, development, design, translation, ops, etc.)") },
    { text: t("愿意在协议框架内工作，接受透明与公开的规则", "Willing to work within the protocol's frame; accept transparent, public rules") },
    { text: t("签署双向承诺书（平台与你的相互承诺）", "Sign the mutual commitment (platform ↔ you)") },
    { text: t("提供个人简介与贡献意向说明", "Provide a personal intro and a statement of contribution intent") },
  ];

  const notRequired = [
    t("不要求特定学历或专业背景", "No specific degree or professional background required"),
    t("不要求全职投入，兼职贡献同样被永久记录", "Full-time commitment not required; part-time contributions are recorded permanently too"),
    t("不要求预先缴纳任何费用", "No upfront fees of any kind"),
    t("不限国籍、年龄、身份", "No restriction on nationality, age, or identity"),
  ];

  const benefits = [
    { icon: "📝", title: t("永久署名", "Permanent Credit"), desc: t("你的每一份贡献被系统永久记录，署名不可被删除", "Every contribution is permanently recorded by the system; credit cannot be deleted") },
    { icon: "💰", title: t("收益分配", "Revenue Share"), desc: t("按贡献积分参与平台分红，规则公开透明", "Share in platform revenue by contribution points; rules are public and transparent") },
    { icon: "🏅", title: t("荣誉认证", "Honorary Certification"), desc: t("获得平台官方认证标识，提升个人专业影响力", "Official platform certification that strengthens your professional reputation") },
    { icon: "🗳️", title: t("治理参与权", "Governance Rights"), desc: t("积分达标可获委员会提名资格，参与平台决策", "Reach the points threshold to be eligible for committee nomination and platform decisions") },
    { icon: "🛡️", title: t("退出保护", "Exit Protection"), desc: t("离开时积分保留、署名不删、平台外收入不受影响", "On leaving, points are preserved, credit is kept, and outside income is untouched") },
    { icon: "🌐", title: t("开源生态", "Open Ecosystem"), desc: t("你的内容可被更多人看到，平台流量和认证体系助力曝光", "Your content reaches more people; platform traffic and certification amplify its reach") },
  ];

  return (
  <section>
    <SectionHeading
      id="standards"
      number={t("七", "07")}
      title={t("建设者申请标准", "Builder Application Standards")}
      subtitle={t("我们欢迎每一个愿意贡献的人", "We welcome anyone willing to contribute")}
    />

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {/* Requirements */}
      <div className="rounded-xl bg-card border border-border p-6 shadow-card">
        <h3 className="font-serif-cn font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 size={18} className="text-primary" />
          {t("申请条件", "Requirements")}
        </h3>
        <ul className="space-y-3">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
              <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
              {req.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Not required */}
      <div className="rounded-xl bg-muted border border-border p-6 shadow-card">
        <h3 className="font-serif-cn font-semibold text-foreground mb-4 flex items-center gap-2">
          <XCircle size={18} className="text-muted-foreground" />
          {t("不做要求", "Not Required")}
        </h3>
        <ul className="space-y-3">
          {notRequired.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-muted-foreground/50 mt-0.5 shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Benefits */}
    <h3 className="font-serif-cn text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
      <Star size={18} className="text-primary" />
      {t("注册加入开源建设的好处", "Benefits of Joining the Open-Source Build")}
    </h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {benefits.map((b, i) => (
        <div
          key={i}
          className="group rounded-xl bg-card border border-border p-5 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all"
        >
          <span className="text-2xl mb-3 block">{b.icon}</span>
          <h4 className="font-serif-cn font-semibold text-foreground text-sm mb-1">{b.title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
};
