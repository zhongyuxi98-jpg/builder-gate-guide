import { BuilderNav } from "@/components/builder/BuilderNav";
import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  cn?: string;
  url: string;
  note?: string;
};

type Group = {
  title: string;
  subtitle: string;
  items: Project[];
};

const groups: Group[] = [
  {
    title: "知识之门 · 主门径",
    subtitle: "总入口与各学科门径",
    items: [
      { name: "Gateway to Understanding", cn: "知识之门 · 总门径", url: "https://enter-the-door.lovable.app" },
      { name: "History Gates", cn: "历史之门 · 沉浸版", url: "https://usprosperity.lovable.app" },
      { name: "Knowledge Canvas", cn: "历史之门 · Holocaust", url: "https://knowledge-canvas-16.lovable.app" },
      { name: "Economic Gateway Hub", cn: "经济之门", url: "https://econo-atlas.lovable.app" },
      { name: "Law Study Buddy", cn: "法律之门 · 商法", url: "https://legal-ace-trainer.lovable.app" },
      { name: "Buddhist Wisdom Path", cn: "佛学之门 · 题库", url: "https://buddha-truth-builder.lovable.app" },
      { name: "Inner Science Explorer", cn: "佛学之门 · 沉浸版", url: "https://mind-and-compass-path.lovable.app" },
      { name: "Expressive Flow", cn: "失败之门", url: "https://expressive-beats-log.lovable.app" },
    ],
  },
  {
    title: "高考 · 历史专项",
    subtitle: "中外历史纲要 · 学生与教师页面",
    items: [
      { name: "国内高考版 History Gateway", url: "https://history-doorway-guidecn.lovable.app" },
      { name: "History Gateway", cn: "原版历史之门", url: "https://history-doorway.lovable.app" },
      { name: "Remix · 国内高考版", url: "https://biology-gate-explorer.lovable.app" },
      { name: "1960-1970 Hub", cn: "时段专题", url: "https://echo-learn-fly.lovable.app" },
    ],
  },
  {
    title: "学习工具 · 插件",
    subtitle: "知识图谱、选校、统计、竞赛",
    items: [
      { name: "Knowledge Weaver", cn: "知识图谱学习页", url: "https://learn-node-link.lovable.app" },
      { name: "Stats Success Guide", cn: "线性代数 / 统计", url: "https://jamovi-ace-aid.lovable.app" },
      { name: "UniChoice Helper", cn: "选校辅助器", url: "https://my-uni-journey-ai.lovable.app" },
      { name: "John's Inquiry Path", cn: "John Locke 竞赛路径", url: "https://johns-wonder-path.lovable.app" },
    ],
  },
  {
    title: "教师 / 流程化教学",
    subtitle: "把人工教师用流程化替代",
    items: [
      { name: "EduFlow Companion", cn: "教学管理流程", url: "https://teach-nexus-flow.lovable.app" },
      { name: "Learn Flow", cn: "教学网站模版", url: "https://flowteach-bot.lovable.app" },
      { name: "Academic Compass", cn: "辅导规划", url: "https://stride-plan-guide.lovable.app" },
      { name: "Mind Spark", cn: "Workflow + Infra", url: "https://intel-bloom-quest.lovable.app" },
      { name: "Insight Flow", cn: "Skills Workflow", url: "https://sparkle-learn-journey.lovable.app" },
    ],
  },
  {
    title: "造门之路 · 开发方法论",
    subtitle: "vibe coding / Lovable / Agent 协作",
    items: [
      { name: "History Builder Kit", cn: "US History Doorway Kit", url: "https://create-ignite-build.lovable.app" },
      { name: "Your Blendder Guide", cn: "造门之路 · 起源故事", url: "https://gatekeeper-guide-ai.lovable.app" },
      { name: "Pixel Perfect Replica", cn: "像素级还原练习", url: "https://pixel-perfect-clone-30920.lovable.app" },
    ],
  },
  {
    title: "现实 / 探索",
    subtitle: "对话宇宙、城市、自我",
    items: [
      { name: "Cosmic Dialogues", cn: "宇宙对话地图", url: "https://cosmos-dialogue-map.lovable.app" },
      { name: "Shanghai Explorer", cn: "上海现实探索器", url: "https://shanghai-joy-map.lovable.app" },
    ],
  },
];

const ProjectsMatrix = () => {
  const total = groups.reduce((s, g) => s + g.items.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <BuilderNav />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12 pb-8 border-b border-border">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
            Projects Matrix · 项目矩阵
          </p>
          <h1 className="font-serif-cn text-4xl md:text-5xl font-bold text-foreground mb-4">
            知识之门 · 全项目地图
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            目前已发布 <span className="text-foreground font-semibold">{total}</span> 个公开项目,按主题分组。每一格都是一扇可以推开的门。
          </p>
        </header>

        <div className="space-y-16">
          {groups.map((g) => (
            <section key={g.title}>
              <div className="mb-6">
                <h2 className="font-serif-cn text-2xl font-bold text-foreground">{g.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{g.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.items.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 border border-border rounded-md bg-card hover:border-primary hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {p.cn ?? p.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1" />
                    </div>
                    {p.cn && (
                      <p className="text-xs text-muted-foreground mb-2">{p.name}</p>
                    )}
                    <p className="text-xs text-muted-foreground/70 truncate">
                      {p.url.replace("https://", "")}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>
            未列出的项目尚未发布公开链接。需要把某个加进来,告诉我项目名 + 公开 URL 即可。
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ProjectsMatrix;