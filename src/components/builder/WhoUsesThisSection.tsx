import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n";
import { GraduationCap, Hammer, BookOpenCheck, HeartHandshake } from "lucide-react";

interface UserRole {
  icon: React.ReactNode;
  accentColor: string;
  who: { zh: string; en: string };
  whyCome: { zh: string; en: string };
  howJoin: { zh: string; en: string };
  exchange: { zh: string; en: string };
  title: { zh: string; en: string };
  tag: { zh: string; en: string };
}

const roles: UserRole[] = [
  {
    icon: <GraduationCap size={22} />,
    accentColor: "border-primary/30 bg-primary/5",
    title: { zh: "学生", en: "Student" },
    tag: { zh: "主体群体", en: "Primary Group" },
    who: { zh: "14-25 岁年轻人,尤其休学生 / 国际学校 / 数字游民家庭 / 高考压抑期", en: "Ages 14–25, especially gap-year students, international school students, digital nomad families, and those under high-stakes exam pressure" },
    whyCome: { zh: "在温柔无焦虑世界里 先认识自己,再建构自己,再去探索世界", en: "Within a gentle, anxiety-free world: first know yourself, then build yourself, then explore the world" },
    howJoin: { zh: "直接进 cognitiondoor.com,无需申请", en: "Go directly to cognitiondoor.com — no application required" },
    exchange: { zh: "出: 自己的真实 · 得: 自我之门 + 身体之门 + 多扇门体验", en: "Give: your authentic self · Get: Self Gate + Body Gate + multi-gate experience" },
  },
  {
    icon: <Hammer size={22} />,
    accentColor: "border-amber-500/30 bg-amber-500/5",
    title: { zh: "造门者", en: "Door Builder" },
    tag: { zh: "内容贡献者", en: "Content Contributor" },
    who: { zh: "中医 / 武术 / 哲学 / 古典音乐 / 学者 / 任何 有真传统 的从业者", en: "TCM practitioners, martial artists, philosophers, classical musicians, scholars — anyone with a real tradition" },
    whyCome: { zh: "把 ta 这一脉 数字化但不商品化", en: "Digitize their lineage without commodifying it" },
    howJoin: { zh: "buildergate JoinForm 选 内容造门者, 配对支持共建 1 扇门", en: 'Apply via JoinForm, select "Door Builder", co-build one gate with paired support' },
    exchange: { zh: "出: 自己的知识锁 · 得: 永久署名 + 收益分成 + 治理参与", en: "Give: your epistemic lock · Get: permanent credit + revenue share + governance participation" },
  },
  {
    icon: <BookOpenCheck size={22} />,
    accentColor: "border-blue-500/30 bg-blue-500/5",
    title: { zh: "教师", en: "Teacher" },
    tag: { zh: "方法应用者", en: "Method Adopter" },
    who: { zh: "体制内 / 国际学校 / 私塾 / 微学校教师", en: "Teachers in public schools, international schools, private academies, or microschools" },
    whyCome: { zh: "用知识之门的方法教自己的学生", en: "Use the Knowledge Gate's method to teach your own students" },
    howJoin: { zh: "加入造门者, 或 fork 协议建自己的小实现", en: "Join as a Door Builder, or fork the protocol to build your own small implementation" },
    exchange: { zh: "出: 教学经验 · 得: 协议 toolkit + 治理参与", en: "Give: teaching experience · Get: protocol toolkit + governance participation" },
  },
  {
    icon: <HeartHandshake size={22} />,
    accentColor: "border-emerald-500/30 bg-emerald-500/5",
    title: { zh: "家长", en: "Parent" },
    tag: { zh: "给孩子选择者", en: "Choice-Giver to Child" },
    who: { zh: "鸡娃疲惫 / 国际化 / 数字游民家庭", en: "Families tired of overparenting, international families, digital nomad families" },
    whyCome: { zh: "给孩子另一个学习的可能", en: "Offer your child another way of learning" },
    howJoin: { zh: "直接让孩子用 cognitiondoor.com, 后期可订阅 / 资助", en: "Let your child use cognitiondoor.com first; subscribe or sponsor later" },
    exchange: { zh: "出: 信任 + 反馈 · 得: 孩子的探索过程", en: "Give: trust + feedback · Get: your child's exploration journey" },
  },
];

export const WhoUsesThisSection = () => {
  const { t } = useLang();
  return (
    <section>
      <SectionHeading
        id="who-uses-this"
        number={t("零·五", "00.5")}
        title={t("谁会用这个", "Who This Is For")}
        subtitle={t("4 种来访者 · 不同位置, 不同入口", "Four kinds of visitor — different positions, different entry points")}
      />
      <p className="text-foreground/80 leading-relaxed mb-8 font-serif-cn">
        {t("知识之门不只是为 建设者 而设。 它服务 4 种不同的来访者 —— 每一种有 不同的位置、不同的目的、不同的进入方式。", "The Knowledge Gate is not only for builders. It serves four kinds of visitors — each with a different position, purpose, and entry point.")}
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {roles.map((role, i) => (
          <div key={i} className={`rounded-xl border p-6 shadow-card hover:shadow-elevated transition-shadow ${role.accentColor}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary">{role.icon}</div>
              <div>
                <h3 className="font-serif-cn font-bold text-foreground text-lg">{t(role.title.zh, role.title.en)}</h3>
                <p className="text-xs text-muted-foreground">{t(role.tag.zh, role.tag.en)}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div><p className="text-xs font-semibold text-foreground mb-1">{t("谁", "Who")}</p><p className="text-muted-foreground leading-relaxed">{t(role.who.zh, role.who.en)}</p></div>
              <div><p className="text-xs font-semibold text-foreground mb-1">{t("来干什么", "Why")}</p><p className="text-muted-foreground leading-relaxed">{t(role.whyCome.zh, role.whyCome.en)}</p></div>
              <div><p className="text-xs font-semibold text-foreground mb-1">{t("怎么参与", "How")}</p><p className="text-muted-foreground leading-relaxed">{t(role.howJoin.zh, role.howJoin.en)}</p></div>
              <div className="pt-3 border-t border-border/50"><p className="text-xs font-semibold text-foreground mb-1">{t("出 / 得", "Give / Get")}</p><p className="text-muted-foreground leading-relaxed text-xs italic">{t(role.exchange.zh, role.exchange.en)}</p></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-5 rounded-xl bg-muted border border-border">
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-cn">
          {t("重要 —— 这 4 类不是 固定身份。 一位学生可以成为造门者,一位教师可以成为治理顾问,一位家长可以成为资助者。 详见下方 身份流动 一节。", "Important — these four are not fixed identities. A student can become a Door Builder; a teacher, a governance advisor; a parent, a sponsor. See the Identity Fluidity section below.")}
        </p>
      </div>
    </section>
  );
};
