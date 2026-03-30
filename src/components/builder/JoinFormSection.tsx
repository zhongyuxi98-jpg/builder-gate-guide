import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  background: string;
  skills: string[];
  channel: string;
  message: string;
}

const skillOptions = [
  "教学/学科内容",
  "软件开发/编程",
  "UI/UX 设计",
  "翻译/本地化",
  "运营/社区管理",
  "视频制作",
  "学术研究",
  "法律/合规",
  "其他",
];

const channelOptions = [
  { value: "web", label: "网页直接贡献（Lovable 平台）" },
  { value: "code", label: "代码贡献并入（GitHub）" },
  { value: "link", label: "外部链接/资源推荐" },
  { value: "meeting", label: "视频会议贡献（腾讯会议）" },
  { value: "other", label: "其他方式" },
];

export const JoinFormSection = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    background: "",
    skills: [],
    channel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

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
    if (!form.name.trim()) e.name = "请填写姓名";
    else if (form.name.trim().length > 100) e.name = "姓名不超过100字";

    if (!form.email.trim()) e.email = "请填写邮箱";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "邮箱格式不正确";

    if (!form.background.trim()) e.background = "请简要介绍自己";
    else if (form.background.trim().length > 1000) e.background = "不超过1000字";

    if (form.skills.length === 0) e.skills = "请至少选择一项技能";
    if (!form.channel) e.channel = "请选择贡献渠道";

    if (form.message.length > 2000) e.message = "不超过2000字";

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
        <SectionHeading id="join" number="九" title="加入申请" />
        <div className="rounded-xl bg-card border border-border p-12 text-center shadow-elevated">
          <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-serif-cn text-2xl font-bold text-foreground mb-2">申请已提交！</h3>
          <p className="text-muted-foreground mb-2">感谢你愿意成为知识之门的建设者。</p>
          <p className="text-sm text-muted-foreground">我们将在 3-5 个工作日内通过邮箱与你联系。</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <SectionHeading
        id="join"
        number="九"
        title="加入申请"
        subtitle="成为知识之门的建设者，与我们一起做一件想做一辈子的事"
      />

      <form onSubmit={handleSubmit} className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-elevated space-y-6">
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">姓名 *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="你的姓名或昵称"
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">邮箱 *</label>
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

        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">个人简介与背景 *</label>
          <textarea
            value={form.background}
            onChange={(e) => setForm((f) => ({ ...f, background: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="简要介绍你的背景、经历、以及为什么想加入知识之门…"
            maxLength={1000}
          />
          {errors.background && <p className="text-destructive text-xs mt-1">{errors.background}</p>}
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">可贡献技能 *（可多选）</label>
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
          <label className="block text-sm font-medium text-foreground mb-2">首选贡献渠道 *</label>
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
          <label className="block text-sm font-medium text-foreground mb-1.5">补充说明（可选）</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="任何你想补充说明的内容…"
            maxLength={2000}
          />
          {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Commitment notice */}
        <div className="p-4 rounded-lg bg-muted border border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            提交此申请即表示你已阅读并认同知识之门的治理协议精神。加入后你将签署正式的双向承诺书。你的信息仅用于审核申请，不会泄露给第三方。
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
              提交中…
            </>
          ) : (
            <>
              <Send size={16} />
              提交建设者申请
            </>
          )}
        </button>
      </form>
    </section>
  );
};
