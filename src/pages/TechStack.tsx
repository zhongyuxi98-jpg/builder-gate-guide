import { Link } from "react-router-dom";
import { ArrowLeft, Pencil, Database, Code, CloudUpload, Image as ImageIcon, EditIcon, ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface StackItem {
  icon: React.ReactNode;
  title: string;
  tag: string;
  tagVariant?: "default" | "success" | "info";
  tool: string;
  desc: string;
  learn?: { label: string; url: string }[];
}

const currentStack: StackItem[] = [
  {
    icon: <Pencil size={18} />,
    title: "内容生产",
    tag: "老师视角",
    tool: "Obsidian / VSCode + Markdown",
    desc: "不会代码的老师用 Obsidian 写,你用 VSCode + AI 辅助写",
    learn: [
      { label: "📄 教案模板 v2(主推 · 站内)", url: "/lesson-template" },
      { label: "Obsidian 入门(站内)", url: "/learn/obsidian" },
      { label: "Markdown 语法(站内)", url: "/learn/markdown" },
      { label: "教学管理规范", url: "/teaching-spec" },
    ],
  },
  {
    icon: <Database size={18} />,
    title: "内容存储",
    tag: "系统核心",
    tagVariant: "info",
    tool: "GitHub 私有仓库 (Markdown + YAML)",
    desc: "所有内容存在这里,版本可回溯,多人可协作,永远可迁移",
    learn: [
      { label: "GitHub 文档", url: "https://docs.github.com/zh" },
      { label: "Git 教程", url: "https://www.liaoxuefeng.com/wiki/896043488029600" },
    ],
  },
  {
    icon: <Code size={18} />,
    title: "前端框架",
    tag: "替代 Lovable",
    tool: "Next.js + Tailwind CSS",
    desc: "从 Git 仓库读 Markdown,自动生成所有学科页面",
    learn: [
      { label: "Next.js 官方", url: "https://nextjs.org/learn" },
      { label: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
    ],
  },
  {
    icon: <CloudUpload size={18} />,
    title: "部署托管",
    tag: "免费",
    tagVariant: "success",
    tool: "Vercel 或 Cloudflare Pages",
    desc: "推 Git 自动部署,全球 CDN 加速,每月 0 元起",
    learn: [
      { label: "Vercel 文档", url: "https://vercel.com/docs" },
      { label: "Cloudflare Pages", url: "https://developers.cloudflare.com/pages/" },
    ],
  },
  {
    icon: <ImageIcon size={18} />,
    title: "大文件存储",
    tag: "PDF / 视频",
    tool: "Cloudflare R2 或 Backblaze B2",
    desc: "Git 不存大文件,PDF 视频走对象存储,月费 ¥0-30",
    learn: [
      { label: "Cloudflare R2", url: "https://developers.cloudflare.com/r2/" },
      { label: "Backblaze B2", url: "https://www.backblaze.com/cloud-storage" },
    ],
  },
  {
    icon: <EditIcon size={18} />,
    title: "老师协作界面",
    tag: "第二阶段",
    tool: "Decap CMS 或 Tina CMS (开源免费)",
    desc: "老师在网页上编辑,自动提交到 Git,不需要会代码",
    learn: [
      { label: "Decap CMS", url: "https://decapcms.org/docs/" },
      { label: "Tina CMS", url: "https://tina.io/docs/" },
    ],
  },
];

interface VersionEntry {
  version: string;
  date: string;
  phase: string;
  stack: string[];
  notes: string;
  active?: boolean;
}

const versions: VersionEntry[] = [
  {
    version: "v0.1",
    date: "2026-05",
    phase: "原型期 · 当前版本",
    stack: ["Lovable", "React 18", "Vite 5", "Tailwind CSS v3", "TypeScript 5", "shadcn/ui", "React Router"],
    notes: "用 Lovable 快速验证「知识之门」与「建设者门户」的产品形态,所有页面前端渲染,暂无后端。",
    active: true,
  },
  {
    version: "v0.2",
    date: "计划中",
    phase: "数据期",
    stack: ["Lovable Cloud (Supabase)", "PostgreSQL", "Edge Functions"],
    notes: "接入 Lovable Cloud,持久化建设者申请、唯一编号、贡献记录。",
  },
  {
    version: "v1.0",
    date: "迁移期",
    phase: "内容驱动",
    stack: ["Next.js", "GitHub 私有仓库", "Markdown + YAML", "Vercel / Cloudflare Pages"],
    notes: "从 Lovable 迁移至 Next.js,Markdown 内容由 Git 仓库托管,实现版本可回溯、多人协作。",
  },
  {
    version: "v1.5",
    date: "扩展期",
    phase: "媒体与协作",
    stack: ["Cloudflare R2 / Backblaze B2", "Decap CMS / Tina CMS"],
    notes: "PDF、视频走对象存储;老师通过可视化 CMS 编辑内容,无需了解代码。",
  },
];

const tagBg = (v?: string) =>
  v === "success"
    ? "bg-emerald-100 text-emerald-800"
    : v === "info"
    ? "bg-blue-100 text-blue-800"
    : "bg-muted text-muted-foreground";

const TechStack = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <Link to="/builder" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> 返回建设者门户
          </Link>
          <span className="font-serif-cn text-lg font-bold">
            技术栈 <span className="text-primary text-sm font-normal ml-1">Tech Stack</span>
          </span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        {/* Hero */}
        <header>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            RECOMMENDED STACK
          </p>
          <h1 className="font-serif-cn text-4xl md:text-5xl font-bold mb-4">
            知识之门 · 技术栈与学习路径
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            为知识之门量身定制的最小可行架构。每一项工具都有官方学习入口,你可以按图索骥,从零自学到能独立搭建。
          </p>
          <div className="mt-6 inline-block bg-secondary text-secondary-foreground px-4 py-3 rounded-lg">
            <div className="text-xs opacity-70">月度成本估算</div>
            <div className="text-2xl font-bold">¥0 — ¥30</div>
            <div className="text-xs opacity-70 mt-1">域名 ¥80/年(一次性)+ 大文件存储 ¥0-30/月,其他全免</div>
          </div>
        </header>

        {/* Current stack cards */}
        <section>
          <h2 className="font-serif-cn text-2xl font-bold mb-2">推荐技术栈(目标架构)</h2>
          <p className="text-sm text-muted-foreground mb-6">点击右下角链接进入官方学习资源。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {currentStack.map((s) => (
              <Card key={s.title} className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">{s.icon}</span>
                    <span className="font-semibold">{s.title}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-md ${tagBg(s.tagVariant)}`}>
                    {s.tag}
                  </span>
                </div>
                <p className="font-medium text-sm mb-1">{s.tool}</p>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                {s.learn && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                    {s.learn.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <BookOpen size={12} /> {l.label}
                        <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Version timeline */}
        <section>
          <h2 className="font-serif-cn text-2xl font-bold mb-2">版本迭代时间线</h2>
          <p className="text-sm text-muted-foreground mb-8">
            每一次迭代我们使用了哪些技术、属于哪个时期、解决了什么问题。
          </p>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {versions.map((v) => (
                <div key={v.version} className="relative pl-12">
                  <div
                    className={`absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 ${
                      v.active
                        ? "bg-primary border-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                        : "bg-background border-border"
                    }`}
                  />
                  <div className="flex items-baseline gap-3 flex-wrap mb-2">
                    <span className="font-serif-cn text-xl font-bold">{v.version}</span>
                    <Badge variant={v.active ? "default" : "secondary"}>{v.date}</Badge>
                    <span className="text-sm text-muted-foreground">{v.phase}</span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{v.notes}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {v.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning path */}
        <section className="bg-secondary text-secondary-foreground rounded-xl p-8">
          <h2 className="font-serif-cn text-2xl font-bold mb-4">从零到能独立搭建的学习路径</h2>
          <ol className="space-y-3 text-sm leading-relaxed list-decimal list-inside opacity-90">
            <li>先学会 Markdown 与 Git 基本操作 —— 这是所有内容的载体。</li>
            <li>用 VSCode + GitHub 体验一次「写文章 → 推送 → 自动部署」全流程。</li>
            <li>跟着 Next.js 官方 Learn 课程,完成第一个静态博客。</li>
            <li>把样式换成 Tailwind CSS,理解 utility-first 的写法。</li>
            <li>把内容仓库与前端项目分离,用 GitHub API 或 contentlayer 读取 Markdown。</li>
            <li>部署到 Vercel,绑定域名,接入 Cloudflare R2 存大文件。</li>
            <li>最后引入 Decap CMS,让不会代码的协作者也能编辑。</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default TechStack;