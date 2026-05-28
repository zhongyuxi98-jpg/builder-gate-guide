import { Link } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const subjects = [
  { s: "化学", stars: 5, why: "知识结构最像生物;选择题占比高;历史故事多(门捷列夫/青霉素)", color: "bg-emerald-50 border-emerald-200" },
  { s: "物理", stars: 3, why: "故事多但选择题占比低;5 分钟讲透机制难。需重「物理直觉」轻「应试」", color: "bg-amber-50 border-amber-200" },
  { s: "数学", stars: 2, why: "工具学科,「体系」概念不同;难用比喻入口;需重新设计形态", color: "bg-orange-50 border-orange-200" },
  { s: "历史/政治", stars: 0, why: "本行,差异化难。建议先占领理科,再回过头做文科精品", color: "bg-stone-50 border-stone-200" },
];

const arc = [
  ["01", "总览", "漏斗入口(比喻多,工具型)"],
  ["02", "体系 A", "物质与能量"],
  ["03", "体系 B", "信息流 / 反应原理"],
  ["04", "体系 C ★", "真题占比最大的体系(最大价值节)"],
  ["05", "体系 D", "调节 / 平衡 / 应用"],
  ["06", "阅卷揭秘", "应试工具(跨学科可复用)"],
  ["07", "选择题陷阱", "应试工具收官(跨学科可复用)"],
];

const timeline = [
  ["0:00 – 0:30", "钩子", "问题钩子 ≠ 数据钩子", "bg-rose-100 text-rose-900"],
  ["0:30 – 1:30", "比喻入口", "90% 比喻 + 10% 术语", "bg-amber-100 text-amber-900"],
  ["1:30 – 3:00", "桥梁化", "50% 比喻 + 50% 术语", "bg-yellow-100 text-yellow-900"],
  ["3:00 – 4:30", "术语主导", "10% 比喻 + 90% 术语", "bg-sky-100 text-sky-900"],
  ["4:30 – 5:00", "全术语总结", "100% 术语 · 比喻完全退场", "bg-emerald-100 text-emerald-900"],
];

const principles = [
  ["比喻是脚手架,不是语言系统", "只在前 30s–1min 用,之后必须逐步退场"],
  ["单节内部去比喻化路径", "5 分钟严格按比喻 → 桥梁 → 术语三段进发"],
  ["比喻不跨节继承", "每节独立破冰比喻,用完即弃;跨节连接靠术语"],
  ["按学科固有体系切分", "不机械对应卡片 1/2/3/4,每节对应一个完整知识体系"],
  ["学生「直接思考学科」", "看到术语直接想到机制,而不是比喻里的角色"],
];

const containers = [
  ["悬念解谜", "抛出具体问题 → 所有概念为解谜服务 → 结尾揭谜", "色盲为什么只传给儿子?"],
  ["发现过程", "讲科学家的发现故事,把知识塞进故事里", "1921 班廷救糖尿病男孩"],
  ["理论冲突", "新旧理论对抗,有立场有冲突", "燃素说 vs 氧化说 · 拉瓦锡"],
  ["常识颠覆", "你以为 X,但其实 Y", "你以为糖能直接供能?错。"],
  ["角色代入", "让学生扮演侦探 / 阅卷员 / 原子", "假如你是阅卷员"],
];

const checklist = [
  "钩子是问题钩子,不是数据钩子",
  "5 分钟严格按去比喻化路径",
  "4:30 后比喻完全退场,纯术语",
  "4 大块,不是 5 大块",
  "每个抽象概念配了具体例子",
  "每段后有金句锚点 + 段间停顿",
  "比喻不跨节继承",
  "选了 1 个剧情容器",
  "中英对照术语表完备",
  "学生看完能用术语复述",
  "下节钩子用术语,不用比喻",
  "逐字稿在 1100±100 字",
  "结尾不卖课",
];

const Star = ({ on }: { on: boolean }) => (
  <span className={on ? "text-primary" : "text-muted-foreground/30"}>★</span>
);

const FiveMinSOP = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/builder" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> 返回建设者门户
        </Link>
        <span className="font-serif-cn text-lg font-bold">
          5 分钟速通 SOP <span className="text-primary text-sm font-normal ml-1">v1 · 2026.5.26</span>
        </span>
      </div>
    </nav>

    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <header>
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">PRODUCT METHODOLOGY · SOP</p>
        <h1 className="font-serif-cn text-4xl md:text-5xl font-bold mb-4 leading-tight">
          5 分钟速通系列 · 跨学科复用打法
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          把生物 7 节摸索出来的整套打法,沉淀成可迁移的产品 SOP。
          下一科:化学(★★★★★)。
        </p>
        <a
          href="/zhishimen-5min-sop-v1.md"
          download
          className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          <Download size={16} /> 下载完整 SOP (.md)
        </a>
      </header>

      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">PART 00</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mt-1 mb-6">下一个学科选哪个?</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {subjects.map((x) => (
            <Card key={x.s} className={`p-4 border-2 ${x.color}`}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-serif-cn font-bold text-lg">{x.s}</span>
                <span className="text-lg tracking-widest">
                  {[1, 2, 3, 4, 5].map((n) => <Star key={n} on={n <= x.stars} />)}
                </span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">{x.why}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">PART 01</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mt-1 mb-6">7 节产品架构</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          {arc.map(([n, t, d], i) => (
            <div key={n} className={`grid grid-cols-[60px_140px_1fr] gap-4 p-4 items-center ${i ? "border-t border-border" : ""}`}>
              <div className="font-mono text-primary text-sm">{n}</div>
              <div className="font-serif-cn font-bold">{t}</div>
              <div className="text-xs text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">PART 02</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mt-1 mb-2">5 分钟时间轴 · 去比喻化路径</h2>
        <p className="text-sm text-muted-foreground mb-6">每节内部比喻浓度逐段递减,术语浓度逐段递增。</p>
        <div className="space-y-2">
          {timeline.map(([time, t, d, color]) => (
            <div key={time} className={`grid grid-cols-[110px_120px_1fr] gap-3 p-3 rounded-lg items-center ${color}`}>
              <div className="font-mono text-xs font-semibold">{time}</div>
              <div className="font-serif-cn font-bold text-sm">{t}</div>
              <div className="text-xs">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">PART 03</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mt-1 mb-6">5 条设计原则</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {principles.map(([t, d], i) => (
            <Card key={t} className="p-4">
              <div className="flex gap-3">
                <span className="text-primary font-serif-cn font-bold text-lg leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="font-serif-cn font-bold mb-1 text-sm">{t}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">PART 04</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mt-1 mb-2">剧情容器 · 每节必选一种</h2>
        <p className="text-sm text-muted-foreground mb-6">知识本身没有剧情张力,必须人为塞进容器。</p>
        <div className="space-y-2">
          {containers.map(([t, d, ex], i) => (
            <Card key={t} className="p-4 grid grid-cols-[40px_1fr_1fr] gap-4 items-center">
              <div className="font-mono text-primary text-sm">0{i + 1}</div>
              <div>
                <div className="font-serif-cn font-bold text-sm">{t}</div>
                <p className="text-xs text-muted-foreground mt-1">{d}</p>
              </div>
              <div className="text-xs italic text-foreground/70 border-l-2 border-primary/40 pl-3">
                示例:{ex}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">PART 10</p>
        <h2 className="font-serif-cn text-2xl md:text-3xl font-bold mt-1 mb-6">制作 Checklist · 每节做之前对照</h2>
        <Card className="p-5">
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            {checklist.map((c) => (
              <li key={c} className="flex gap-2 items-start">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="bg-secondary text-secondary-foreground rounded-xl p-6">
        <p className="text-xs font-semibold tracking-widest uppercase opacity-70">PART 11</p>
        <h2 className="font-serif-cn text-2xl font-bold mt-1 mb-4">化学版 7 节预设(直接套用)</h2>
        <div className="space-y-2 text-sm">
          {[
            ["01 总览", "3 招(绝对词陷阱 / 守恒法 / 大题关键词模板)+ 4 卡片"],
            ["02 物质结构与化学键", "原子结构 / 离子键 vs 共价键 / 分子结构 / 晶体类型"],
            ["03 化学反应与能量", "反应类型 / 反应速率 / 化学平衡 / 勒夏特列原理"],
            ["04 有机化学 ★ 35-40%", "烷烯炔 / 醇酚醚 / 羧酸酯 / 糖蛋白 · 容器:青霉素发明史"],
            ["05 水溶液与电化学", "电离平衡 / 水解 / 缓冲溶液 / 原电池+电解池"],
            ["06 大题阅卷揭秘(化学版)", "复用框架,换化学例题"],
            ["07 选择题陷阱大全(化学版)", "5 种语言指纹 + 数字陷阱(化合价 / 配平 / 摩尔比)"],
          ].map(([t, d]) => (
            <div key={t} className="grid grid-cols-[220px_1fr] gap-3 bg-background/40 rounded p-3">
              <div className="font-serif-cn font-bold text-foreground">{t}</div>
              <div className="text-foreground/80 text-xs">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border pt-6 flex justify-between text-sm">
        <Link to="/thinking/essence" className="text-muted-foreground hover:text-foreground">← 教育产品的本质</Link>
        <Link to="/lesson-template" className="text-primary font-semibold hover:underline">教案模板 →</Link>
      </div>
    </div>
  </div>
);

export default FiveMinSOP;