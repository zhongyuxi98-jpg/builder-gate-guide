import { BuilderNav } from "@/components/builder/BuilderNav";
import { ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";

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
    subtitle: "教师无法被替代;流程化是教育质量底线的确定性保障",
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
  const [hover, setHover] = useState<string | null>(null);

  // ---- Graph layout ----
  const W = 1400;
  const H = 1100;
  const CX = W / 2;
  const CY = H / 2;
  const R_CAT = 340;
  const R_PROJ = 150;

  // Palette of category colors (HSL via CSS vars + a few accents)
  const catColors = [
    "hsl(var(--primary))",
    "hsl(var(--accent))",
    "hsl(38 70% 55%)",
    "hsl(200 65% 55%)",
    "hsl(160 50% 50%)",
    "hsl(290 45% 60%)",
  ];

  type Node = {
    id: string;
    x: number;
    y: number;
    label: string;
    sub?: string;
    color: string;
    r: number;
    url?: string;
    kind: "hub" | "cat" | "proj";
    parentId?: string;
  };
  type Edge = { from: { x: number; y: number }; to: { x: number; y: number }; color: string; key: string };

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    const hub = { id: "__hub", x: CX, y: CY, label: "知识之门", sub: "Gateway", color: "hsl(var(--foreground))", r: 46, kind: "hub" as const };
    nodes.push(hub);

    groups.forEach((g, gi) => {
      // start at top, distribute evenly
      const theta = (gi / groups.length) * Math.PI * 2 - Math.PI / 2;
      const cx = CX + R_CAT * Math.cos(theta);
      const cy = CY + R_CAT * Math.sin(theta);
      const color = catColors[gi % catColors.length];
      const catId = `cat-${gi}`;
      nodes.push({ id: catId, x: cx, y: cy, label: g.title, sub: g.subtitle, color, r: 28, kind: "cat", parentId: hub.id });
      edges.push({ from: { x: hub.x, y: hub.y }, to: { x: cx, y: cy }, color, key: `e-${catId}` });

      const n = g.items.length;
      // Fan arc outward from center direction; widen with item count
      const arcSpan = Math.min(Math.max(n * 14, 60), 160) * (Math.PI / 180);
      const start = theta - arcSpan / 2;
      const step = n > 1 ? arcSpan / (n - 1) : 0;
      g.items.forEach((p, pi) => {
        const a = n > 1 ? start + pi * step : theta;
        const px = cx + R_PROJ * Math.cos(a);
        const py = cy + R_PROJ * Math.sin(a);
        const pid = `p-${gi}-${pi}`;
        nodes.push({
          id: pid,
          x: px,
          y: py,
          label: p.cn ?? p.name,
          sub: p.cn ? p.name : undefined,
          color,
          r: 9,
          url: p.url,
          kind: "proj",
          parentId: catId,
        });
        edges.push({ from: { x: cx, y: cy }, to: { x: px, y: py }, color, key: `e-${pid}` });
      });
    });

    return { nodes, edges };
  }, []);

  const activeId = hover;
  const activeNode = activeId ? nodes.find((n) => n.id === activeId) : null;

  return (
    <div className="min-h-screen bg-background">
      <BuilderNav />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 pb-8 border-b border-border">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
            Projects Network · 项目网络图谱
          </p>
          <h1 className="font-serif-cn text-4xl md:text-5xl font-bold text-foreground mb-4">
            知识之门 · 全项目网络
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            目前已发布 <span className="text-foreground font-semibold">{total}</span> 个公开项目,以网络图谱方式呈现。中心是「知识之门」,六条分支延伸至各主题,每一颗节点都是一扇可以推开的门。
          </p>
        </header>

        {/* ===== Network graph ===== */}
        <div className="relative w-full rounded-lg border border-border bg-card/40 overflow-hidden">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block">
            {/* edges */}
            <g>
              {edges.map((e) => {
                const active =
                  activeNode &&
                  (e.key === `e-${activeNode.id}` ||
                    (activeNode.parentId && e.key === `e-${activeNode.parentId}`) ||
                    // sibling edges of hovered category
                    (activeNode.kind === "cat" && e.key.startsWith(`e-p-${activeNode.id.split("-")[1]}-`)));
                return (
                  <line
                    key={e.key}
                    x1={e.from.x}
                    y1={e.from.y}
                    x2={e.to.x}
                    y2={e.to.y}
                    stroke={e.color}
                    strokeOpacity={active ? 0.9 : activeNode ? 0.12 : 0.35}
                    strokeWidth={active ? 1.6 : 1}
                  />
                );
              })}
            </g>
            {/* nodes */}
            <g>
              {nodes.map((n) => {
                const dim = activeNode && activeNode.id !== n.id && activeNode.parentId !== n.id && n.parentId !== activeNode.id && !(activeNode.kind === "cat" && n.parentId === activeNode.id);
                const isHover = activeNode?.id === n.id;
                const showLabel = n.kind !== "proj" || isHover;
                return (
                  <g
                    key={n.id}
                    transform={`translate(${n.x} ${n.y})`}
                    className={n.url ? "cursor-pointer" : "cursor-default"}
                    opacity={dim ? 0.3 : 1}
                    onMouseEnter={() => setHover(n.id)}
                    onMouseLeave={() => setHover((h) => (h === n.id ? null : h))}
                    onClick={() => n.url && window.open(n.url, "_blank", "noopener,noreferrer")}
                  >
                    <circle
                      r={n.r + (isHover ? 4 : 0)}
                      fill={n.kind === "hub" ? "hsl(var(--background))" : n.color}
                      stroke={n.color}
                      strokeWidth={n.kind === "hub" ? 3 : isHover ? 3 : 1.5}
                    />
                    {n.kind === "hub" && (
                      <>
                        <text textAnchor="middle" dy="-2" className="font-serif-cn" fontSize="20" fontWeight="700" fill="hsl(var(--foreground))">
                          {n.label}
                        </text>
                        <text textAnchor="middle" dy="18" fontSize="10" letterSpacing="3" fill="hsl(var(--muted-foreground))">
                          {n.sub}
                        </text>
                      </>
                    )}
                    {n.kind === "cat" && (
                      <text
                        textAnchor="middle"
                        dy={n.y < CY ? -n.r - 10 : n.r + 22}
                        className="font-serif-cn"
                        fontSize="16"
                        fontWeight="700"
                        fill="hsl(var(--foreground))"
                      >
                        {n.label}
                      </text>
                    )}
                    {showLabel && n.kind === "proj" && (
                      <g pointerEvents="none">
                        <text
                          textAnchor="middle"
                          dy={-n.r - 8}
                          fontSize="12"
                          fontWeight="600"
                          fill="hsl(var(--foreground))"
                          stroke="hsl(var(--background))"
                          strokeWidth="4"
                          paintOrder="stroke"
                        >
                          {n.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Hover info card */}
          {activeNode && activeNode.kind === "proj" && (
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm p-4 rounded-md border border-border bg-card shadow-lg backdrop-blur">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-foreground leading-snug">{activeNode.label}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
              </div>
              {activeNode.sub && <p className="text-xs text-muted-foreground mb-1">{activeNode.sub}</p>}
              {activeNode.url && (
                <p className="text-xs text-muted-foreground/70 truncate">{activeNode.url.replace("https://", "")}</p>
              )}
            </div>
          )}
        </div>

        {/* ===== Legend ===== */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {groups.map((g, gi) => (
            <div key={g.title} className="flex items-start gap-3 p-3 rounded-md border border-border bg-card/40">
              <span
                className="mt-1 w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: catColors[gi % catColors.length] }}
              />
              <div className="min-w-0">
                <p className="font-serif-cn font-semibold text-foreground text-sm leading-snug">{g.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{g.subtitle}</p>
                <p className="text-[11px] text-muted-foreground/60 mt-1">{g.items.length} 个项目</p>
              </div>
            </div>
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