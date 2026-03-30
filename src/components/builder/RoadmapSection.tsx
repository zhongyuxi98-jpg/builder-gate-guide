import { SectionHeading } from "./SectionHeading";

const stages = [
  {
    phase: "启动阶段",
    time: "现在",
    task: "起草并签署第一版协议，公开发布",
    committee: "创始人 + 技术合伙人 + 法律顾问",
    active: true,
  },
  {
    phase: "种子阶段",
    time: "0-6 个月",
    task: "引入第一批贡献者，建立贡献记录系统",
    committee: "初始委员会 + 第一批认证贡献者",
    active: false,
  },
  {
    phase: "扩展阶段",
    time: "6-18 个月",
    task: "引入学生代表、第三世界国家代表，完善委员会结构",
    committee: "多元化委员会，任期制正式启动",
    active: false,
  },
  {
    phase: "成熟阶段",
    time: "18 个月+",
    task: "协议层、平权层、商业层完全独立运转",
    committee: "三权完全分立，初始委员会退出日常治理",
    active: false,
  },
];

export const RoadmapSection = () => (
  <section>
    <SectionHeading id="roadmap" number="六" title="从初始委员会到正式治理的路线图" />

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

      <div className="space-y-8">
        {stages.map((stage, i) => (
          <div key={i} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
            {/* Dot */}
            <div
              className={`absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 md:left-1/2 md:-translate-x-1.5 ${
                stage.active
                  ? "bg-primary border-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
                  : "bg-background border-border"
              }`}
            />

            {/* Left content (or top on mobile) */}
            <div className={`${i % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}`}>
              <div className="flex items-center gap-2 mb-1 md:justify-end">
                {i % 2 !== 0 && <div className="hidden md:block" />}
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  stage.active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {stage.time}
                </span>
              </div>
              <h3 className="font-serif-cn font-semibold text-foreground mb-1">{stage.phase}</h3>
              <p className="text-sm text-muted-foreground mb-1">{stage.task}</p>
              <p className="text-xs text-muted-foreground/70">{stage.committee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Closing quote */}
    <div className="mt-16 text-center">
      <blockquote className="font-serif-cn text-lg text-foreground/70 italic leading-relaxed max-w-2xl mx-auto">
        "让最无法被看到的孩子，即便没有办法被世界注视，也能在走投无路时，找到一个温柔的出口与托举——被自己的内心照见，被未来的自己找见，而不是无声的泯灭。"
      </blockquote>
      <p className="text-sm text-muted-foreground mt-4">
        知识之门治理白皮书 v0.1 · 初始委员会讨论草稿
      </p>
      <p className="text-xs text-primary mt-1">enter-the-door.lovable.app</p>
    </div>
  </section>
);
