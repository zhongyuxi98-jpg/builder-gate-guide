import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

interface DecisionRow {
  where: { zh: string; en: string };
  should: { zh: string; en: string };
  get: { zh: string; en: string };
  highlight?: boolean;
}

const rows: DecisionRow[] = [
  {
    where: { zh: "16-25 岁年轻人,想找深度学习的地方", en: "Age 16-25, looking for deep learning" },
    should: { zh: "直接去 cognitiondoor.com", en: "Go directly to cognitiondoor.com" },
    get: { zh: "自我之门 + 身体之门体验,无需申请", en: "Self Gate + Body Gate experience, no application" },
    highlight: true,
  },
  {
    where: { zh: "我有领域深度(中医/武术/哲学等),想造门", en: "I have deep expertise in a field; I want to build a gate" },
    should: { zh: '填下方 JoinForm 选 "内容造门者"', en: 'Fill the JoinForm below, choose "Door Builder"' },
    get: { zh: "配对支持 + 永久署名 + 收益分成", en: "Paired support + permanent credit + revenue share" },
  },
  {
    where: { zh: "我能写代码,想做技术核心", en: "I can code, I want to be tech core" },
    should: { zh: '填 JoinForm, 标注 "技术合伙人"', en: 'Fill JoinForm, mark "Tech Co-founder"' },
    get: { zh: "协议层成员 + 全职薪酬 + 决策权", en: "Protocol layer member + salary + decision rights" },
    highlight: true,
  },
  {
    where: { zh: "我擅长写字 / 视频 / 传播", en: "Good at writing / video / outreach" },
    should: { zh: '填 JoinForm 选 "运营 / 传播"', en: 'Fill JoinForm, choose "Ops / Outreach"' },
    get: { zh: "商业层 + 按贡献积分分润", en: "Commerce layer + contribution-based revenue" },
  },
  {
    where: { zh: "我是法律 / 治理顾问", en: "I'm a legal / governance advisor" },
    should: { zh: "直接联系创始人(邮箱在底部)", en: "Contact founder directly (email at bottom)" },
    get: { zh: "协议层 / 顾问席", en: "Protocol layer / advisor seat" },
  },
  {
    where: { zh: "我是教师,想用这个方法", en: "I'm a teacher, I want to use this method" },
    should: { zh: "加入造门者,或联系创始人", en: "Join as Door Builder, or contact founder" },
    get: { zh: "协议 toolkit(待发布)", en: "Protocol toolkit (forthcoming)" },
  },
  {
    where: { zh: "我是家长,想给孩子选择", en: "I'm a parent, I want to offer my child another option" },
    should: { zh: "让孩子先用 cognitiondoor.com", en: "Let your child try cognitiondoor.com first" },
    get: { zh: "未来订阅 / 资助通道", en: "Future subscription / sponsor channel" },
  },
];

export const DecisionAidSection = () => {
  const { t } = useLang();

  return (
    <section>
      <SectionHeading
        id="decision-aid"
        number={t("十一", "11")}
        title={t("你应该点哪里", "Where Should You Click")}
        subtitle={t("30 秒定位自己", "30 seconds to locate yourself")}
      />

      <div className="rounded-xl border border-border overflow-hidden shadow-card">
        <div className="grid grid-cols-[2fr_1.5fr_1.5fr] bg-muted text-xs font-semibold border-b border-border">
          <div className="px-4 py-3 border-r border-border text-foreground">
            {t("我现在的位置", "Where I am")}
          </div>
          <div className="px-4 py-3 border-r border-border text-foreground">
            {t("我应该", "I should")}
          </div>
          <div className="px-4 py-3 text-foreground">
            {t("我会得到", "I will get")}
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[2fr_1.5fr_1.5fr] text-sm border-t border-border first:border-t-0 ${
              row.highlight ? "bg-primary/5" : ""
            }`}
          >
            <div className="px-4 py-3 border-r border-border text-foreground/90">
              {t(row.where.zh, row.where.en)}
            </div>
            <div className="px-4 py-3 border-r border-border text-muted-foreground flex items-start gap-1.5">
              <ArrowRight size={14} className="text-primary mt-0.5 shrink-0" />
              <span>{t(row.should.zh, row.should.en)}</span>
            </div>
            <div className="px-4 py-3 text-muted-foreground">
              {t(row.get.zh, row.get.en)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">{t("还在犹豫?", "Still hesitating?")}</span>
        <a
          href="#join"
          className="inline-flex items-center gap-1.5 text-primary font-semibold hover:opacity-80 transition"
        >
          {t("直接填表, 我们看到再回你", "Just fill the form — we'll reply when we see it")}
          <ArrowRight size={14} />
        </a>
      </div>

      <p className="mt-4 text-xs text-muted-foreground/70 text-center italic font-serif-cn">
        {t(
          '你不需要 "足够好" 才能进来。协议保护你的探索,不评估你的资历。',
          'You don\'t have to be "good enough" to enter. The protocol protects your exploration; it does not assess your credentials.'
        )}
      </p>
    </section>
  );
};