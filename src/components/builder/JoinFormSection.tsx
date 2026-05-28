import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { BuilderCardPreview } from "./CertificateSection";
import { BuilderCardDownload } from "./BuilderCardDownload";
import { useLang } from "@/lib/i18n";

interface FormData {
  name: string;
  email: string;
  phone: string;
  wechat: string;
  background: string;
  skills: string[];
  channel: string;
  message: string;
}

export const JoinFormSection = () => {
  const { t } = useLang();
  const skillOptions = [
    t("教学/学科内容", "Teaching / Subject content"),
    t("软件开发/编程", "Software dev / coding"),
    t("UI/UX 设计", "UI/UX design"),
    t("翻译/本地化", "Translation / localization"),
    t("运营/社区管理", "Operations / community"),
    t("视频制作", "Video production"),
    t("学术研究", "Academic research"),
    t("法律/合规", "Legal / compliance"),
    t("其他", "Other"),
  ];
  const channelOptions = [
    { value: "web", label: t("网页直接贡献（Lovable 平台）", "Web contribution (via Lovable)") },
    { value: "code", label: t("代码贡献并入（GitHub）", "Code contribution (GitHub)") },
    { value: "link", label: t("外部链接/资源推荐", "External link / resource recommendation") },
    { value: "meeting", label: t("视频会议贡献（腾讯会议）", "Video-call contribution (Tencent Meeting)") },
    { value: "other", label: t("其他方式", "Other") },
  ];
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    wechat: "",
    background: "",
    skills: [],
    channel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [applicantNumber] = useState(() => Math.floor(Math.random() * 200) + 1);

  const toggleSkill = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = t("请填写姓名", "Please enter your name");
    else if (form.name.trim().length > 100) e.name = t("姓名不超过100字", "Name must be 100 characters or fewer");

    const hasEmail = form.email.trim().length > 0;
    const hasPhone = form.phone.trim().length > 0;
    const hasWechat = form.wechat.trim().length > 0;
    if (!hasEmail && !hasPhone && !hasWechat) {
      e.email = t("邮箱 / 电话 / 微信 至少填一项", "Provide at least one of: email / phone / WeChat");
    } else {
      if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = t("邮箱格式不正确", "Invalid email format");
      if (hasPhone && !/^[+\d][\d\s\-()]{4,20}$/.test(form.phone.trim())) e.phone = t("电话格式不正确", "Invalid phone format");
      if (hasWechat && form.wechat.trim().length > 50) e.wechat = t("微信号过长", "WeChat ID is too long");
    }

    if (!form.background.trim()) e.background = t("请简要介绍自己", "Please introduce yourself briefly");
    else if (form.background.trim().length > 1000) e.background = t("不超过1000字", "1,000 characters max");

    if (form.skills.length === 0) e.skills = t("请至少选择一项技能", "Please select at least one skill");
    if (!form.channel) e.channel = t("请选择贡献渠道", "Please pick a contribution channel");

    if (form.message.length > 2000) e.message = t("不超过2000字", "2,000 characters max");

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section>
        <SectionHeading id="join" number={t("九", "09")} title={t("加入申请", "Application")} />
        <div className="rounded-xl bg-card border border-border p-8 md:p-12 shadow-elevated space-y-8">
          <div className="text-center">
            <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-serif-cn text-2xl font-bold text-foreground mb-2">{t("申请已提交！", "Application submitted!")}</h3>
            <p className="text-muted-foreground mb-1">{t("感谢你愿意成为知识之门的建设者。", "Thank you for choosing to become a builder of the Knowledge Gate.")}</p>
            <p className="text-sm text-muted-foreground">{t("我们将在 3-5 个工作日内通过邮箱与你联系。", "We will be in touch within 3–5 business days.")}</p>
          </div>

          {/* Builder Card Preview */}
          <div>
            <h4 className="font-serif-cn font-semibold text-foreground text-center mb-4">
              {t("你的专属建设者身份卡", "Your Builder ID Card")}
            </h4>
            <div className="max-w-md mx-auto">
              <BuilderCardPreview name={form.name || t("建设者", "Builder")} number={applicantNumber} />
            </div>
          </div>

          {/* Download */}
          <div className="max-w-md mx-auto">
            <BuilderCardDownload name={form.name || t("建设者", "Builder")} number={applicantNumber} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeading
        id="join"
        number={t("九", "09")}
        title={t("加入申请", "Application")}
        subtitle={t("成为知识之门的建设者，与我们一起做一件想做一辈子的事", "Become a builder of the Knowledge Gate — do something worth a lifetime with us")}
      />

      <form onSubmit={handleSubmit} className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-elevated space-y-6">
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t("姓名 *", "Name *")}</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder={t("你的姓名或昵称", "Your name or handle")}
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t("邮箱", "Email")}</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="your@email.com"
              maxLength={255}
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Phone & WeChat */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t("电话", "Phone")}</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder={t("可填手机号", "Mobile number (optional)")}
              maxLength={32}
            />
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t("微信号", "WeChat")}</label>
            <input
              type="text"
              value={form.wechat}
              onChange={(e) => setForm((f) => ({ ...f, wechat: e.target.value }))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="WeChat ID"
              maxLength={50}
            />
            {errors.wechat && <p className="text-destructive text-xs mt-1">{errors.wechat}</p>}
          </div>
        </div>
        <p className="text-xs text-muted-foreground -mt-2">
          {t("邮箱 / 电话 / 微信 至少填写一项，方便我们与你联系。", "Please provide at least one of email / phone / WeChat so we can reach you.")}
        </p>

        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">{t("个人简介与背景 *", "Personal intro & background *")}</label>
          <textarea
            value={form.background}
            onChange={(e) => setForm((f) => ({ ...f, background: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder={t("简要介绍你的背景、经历、以及为什么想加入知识之门…", "Briefly introduce your background, experience, and why you want to join the Knowledge Gate…")}
            maxLength={1000}
          />
          {errors.background && <p className="text-destructive text-xs mt-1">{errors.background}</p>}
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{t("可贡献技能 *（可多选）", "Skills you can contribute * (multi-select)")}</label>
          <div className="flex flex-wrap gap-2">
            {skillOptions.map((skill) => (
              <button
                type="button"
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  form.skills.includes(skill)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted text-muted-foreground border-border hover:border-primary/40"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {errors.skills && <p className="text-destructive text-xs mt-1">{errors.skills}</p>}
        </div>

        {/* Preferred Channel */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{t("首选贡献渠道 *", "Preferred contribution channel *")}</label>
          <div className="space-y-2">
            {channelOptions.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                  form.channel === opt.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <input
                  type="radio"
                  name="channel"
                  value={opt.value}
                  checked={form.channel === opt.value}
                  onChange={() => setForm((f) => ({ ...f, channel: opt.value }))}
                  className="accent-[hsl(var(--primary))]"
                />
                <span className="text-sm text-foreground">{opt.label}</span>
              </label>
            ))}
          </div>
          {errors.channel && <p className="text-destructive text-xs mt-1">{errors.channel}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">{t("补充说明（可选）", "Additional notes (optional)")}</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder={t("任何你想补充说明的内容…", "Anything else you would like us to know…")}
            maxLength={2000}
          />
          {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Commitment notice */}
        <div className="p-4 rounded-lg bg-muted border border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t(
              "提交此申请即表示你已阅读并认同知识之门的治理协议精神。加入后你将签署正式的双向承诺书。你的信息仅用于审核申请，不会泄露给第三方。",
              "By submitting, you acknowledge that you have read and agree with the spirit of the Knowledge Gate's governance protocol. Upon joining you will sign a formal mutual commitment. Your information is used only to review your application and will not be shared with third parties."
            )}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              {t("提交中…", "Submitting…")}
            </>
          ) : (
            <>
              <Send size={16} />
              {t("提交建设者申请", "Submit Builder Application")}
            </>
          )}
        </button>
      </form>
    </section>
  );
};
