import { Link } from "react-router-dom";
import { ArrowLeft, Download, ArrowRight, Flame, PenLine, MessageSquareWarning, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * Digitized version of the user's handwritten 4-column "input → real test" diagram.
 * Source: user-uploads/image.png (May 28, 2026)
 */
const columns = [
  {
    icon: <Flame size={18} />,
    title: "输入",
    en: "Input",
    color: "bg-amber-50 border-amber-200 text-amber-900",
    items: ["视频", "讲解"],
    note: "点火 · 冷启动 · 建框架",
  },
  {
    icon: <PenLine size={18} />,
    title: "内化 / 测试",
    en: "Internalize",
    color: "bg-sky-50 border-sky-200 text-sky-900",
    items: ["运用", "回答", "(载体记录:笔记 / 卡片 / 思维导图)"],
    note: "知识不消失在脑内中转",
  },
  {
    icon: <MessageSquareWarning size={18} />,
    title: "输出",
    en: "Output",
    color: "bg-rose-50 border-rose-200 text-rose-900",
    items: ["复用", "写作", "讲解(费曼)"],
    note: "你输出什么,就会什么",
  },
  {
    icon: <FlaskConical size={18} />,
    title: "真实的测试",
    en: "Real Feedback (新的知识)",
    color: "bg-emerald-50 border-emerald-200 text-emerald-900",
    items: ["物理反馈", "项目", "对比 · 动手", "物理实体", "→ 实验 / 假设 / 论证 / 结论"],
    note: "让现实批改你 · 流畅性错觉无处可藏",
  },
];

const pillars = [
  ["识别 vs 生成", "整段思考的轴。识别 = 答案在眼前认出哪个对;生成 = 从空白里造出来。你输出什么,就会什么。"],
  ["流畅性错觉", "看懂 ≠ 会了。内容越流畅,错觉越强。市场系统性奖励『让人感觉学会』的产品。"],
  ["必要难度", "真正有效的学习,发生在费劲、别扭、记不太牢的时候。游戏消除摩擦;教学必须保留它。"],
  ["物理反馈", "最高级的输出是产生一个能反过来给你反馈的东西。灯不亮就是不亮,骗不了。"],
  ["毕业悖论", "真正的教育产品,目标是让用户不再需要它。这与商业留存逻辑直接冲突。"],
  ["质量 vs 规模", "教育两千年最硬的墙。AI 反驳者是第一次出现的凿墙工具,但替不了情感内核。"],
];

const loop = [
  { n: "01", t: "点火", d: "5 分钟视频,只负责冷启动 + 建框架 + 点燃动机。不承诺让你会。" },
  { n: "02", t: "白纸复原", d: "视频结束,给一张接近空白的框架,凭记忆生成。第一道必要难度的坎。" },
  { n: "03", t: "AI 反驳者", d: "产品心脏。AI 扮演笨学生或审稿人,逼你扛反驳、证明真懂。" },
  { n: "04", t: "真题校验", d: "去做真题(生物的现实)。AP/A Level 则是实验设计、数据分析。" },
  { n: "05", t: "螺旋", d: "漏洞回到环节 1 补输入,再走一遍。记录生成能力的增长,不是打卡次数。" },
];

const ThinkingEssence = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/builder" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> 返回建设者门户
        </Link>
        <span className="font-serif-cn text-lg font-bold">
          教育产品的本质 <span className="text-primary text-sm font-normal ml-1">Thinking · 2026.5.28</span>
        </span>
      </div>
    </nav>

    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <header>
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">FOUNDING DOCUMENT</p>
        <h1 className="font-serif-cn text-4xl md:text-5xl font-bold mb-4 leading-tight">
          造一扇真能让人穿过去的门
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          一个人有没有穿过这扇门,不看他在门口停留多久,
          看他有没有在白纸上,生成出一点真正属于他自己的东西。
        </p>
        <p className="text-sm text-muted-foreground/70 mt-3 italic">
          —— 知识之门 · 小喵老师 · 2026.5.28
        </p>
        <a
          href="/zhishimen-thinking-20260528.md"
          download
          className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          <Download size={16} /> 下载完整思考稿 (.md)
        </a>
      </header>

      {/* Digital diagram */}
      <section>
        <div className="mb-2 flex items-baseline gap-3">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">FRAMEWORK 01</span>
        </div>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mb-2">
          学习四阶 · 从输入到真实反馈
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          源自手稿草图(2026.5.28 13:41) — 数字化重制版
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          {columns.map((c, i) => (
            <div key={c.title} className="relative">
              <Card className={`p-4 border-2 ${c.color} h-full`}>
                <div className="flex items-center gap-2 mb-3">
                  {c.icon}
                  <div>
                    <div className="font-serif-cn font-bold text-base leading-none">{c.title}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-70 mt-0.5">{c.en}</div>
                  </div>
                </div>
                <ul className="space-y-1.5 text-sm">
                  {c.items.map((x) => (
                    <li key={x} className="flex gap-1.5"><span className="opacity-60">→</span>{x}</li>
                  ))}
                </ul>
                <p className="text-[11px] mt-3 pt-3 border-t border-current/20 opacity-75 leading-relaxed">{c.note}</p>
              </Card>
              {i < columns.length - 1 && (
                <ArrowRight
                  size={18}
                  className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-muted-foreground bg-background rounded-full"
                />
              )}
            </div>
          ))}
        </div>
        <Card className="mt-4 p-4 bg-muted text-sm leading-relaxed">
          <strong className="font-serif-cn">读图说明:</strong>
          越往右,越接近"生成"端;越往右,流畅性错觉越无处可藏。
          多数教育产品停在第 1 列(输入),少数走到第 2 列(内化),
          <span className="text-primary font-semibold">「知识之门」的奖励函数对准的是第 3、4 列。</span>
        </Card>
      </section>

      {/* Pillars */}
      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">FRAMEWORK 02</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mb-6 mt-1">六根支柱概念</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {pillars.map(([t, d], i) => (
            <Card key={t} className="p-4">
              <div className="flex gap-3">
                <span className="text-primary font-serif-cn font-bold text-lg leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="font-serif-cn font-bold mb-1">{t}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Loop */}
      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">FRAMEWORK 03</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mb-2 mt-1">产品闭环 · 点火 → 逼生成 → 被反驳 → 螺旋</h2>
        <p className="text-sm text-muted-foreground mb-6">
          奖励函数对准:<span className="text-foreground font-semibold">学生真的生成出属于自己的东西</span>。
        </p>
        <div className="border border-border rounded-lg overflow-hidden">
          {loop.map((s, i) => (
            <div key={s.n} className={`grid grid-cols-[60px_1fr] gap-4 p-4 ${i ? "border-t border-border" : ""}`}>
              <div className="text-primary font-mono text-sm pt-1">{s.n}</div>
              <div>
                <div className="font-serif-cn font-bold">{s.t}</div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pyramid */}
      <section className="bg-secondary text-secondary-foreground rounded-xl p-6">
        <p className="text-xs font-semibold tracking-widest uppercase opacity-70">FRAMEWORK 04</p>
        <h2 className="font-serif-cn text-2xl font-bold mb-4 mt-1">质量 vs 规模 · 一座金字塔</h2>
        <div className="space-y-2 text-sm">
          <div className="bg-primary text-primary-foreground rounded p-3 max-w-xs mx-auto text-center">
            <div className="font-bold">塔尖 · 真人在乎</div>
            <div className="text-xs opacity-90 mt-1">被在乎、被信任、因材施教 · 少数人 · 定价最高</div>
          </div>
          <div className="bg-background text-foreground rounded p-3 max-w-md mx-auto text-center">
            <div className="font-bold">中段 · 真本事闭环</div>
            <div className="text-xs text-muted-foreground mt-1">白纸复原 + AI 反驳 + 真题校验</div>
          </div>
          <div className="bg-background/60 text-foreground rounded p-3 max-w-2xl mx-auto text-center">
            <div className="font-bold">底层 · AI 可工具化的反馈</div>
            <div className="text-xs text-muted-foreground mt-1">逼生成、针对性反驳 · 服务很多人</div>
          </div>
        </div>
        <p className="text-xs opacity-80 mt-5 leading-relaxed italic text-center">
          建筑师不抱怨重力,他在重力下设计能站住的结构。金字塔,就是人类在重力下盖出来的、最稳的形状。
        </p>
      </section>

      {/* Mantra */}
      <section className="text-center py-8">
        <p className="font-serif-cn text-xl md:text-2xl font-bold leading-relaxed max-w-2xl mx-auto">
          别的产品问:<span className="text-muted-foreground">「用户想要什么。」</span><br />
          教育产品问:<span className="text-primary">「用户需要什么 — 哪怕那不是他想要的 — 我有没有勇气给他,并且让他愿意要。」</span>
        </p>
      </section>

      <div className="border-t border-border pt-6 flex justify-between text-sm">
        <Link to="/teaching-spec" className="text-muted-foreground hover:text-foreground">← 教学管理规范</Link>
        <Link to="/lesson-template" className="text-primary font-semibold hover:underline">教案模板 →</Link>
      </div>
    </div>
  </div>
);

export default ThinkingEssence;