import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  { t: "下载与首启", d: "前往 obsidian.md 下载安装,创建第一个 Vault(本地知识库文件夹),整个 Vault 就是一组 .md 文件。" },
  { t: "认识三栏视图", d: "左侧文件树 / 中间编辑区 / 右侧大纲与反向链接。建议教学内容以「学科 / 单元 / 课时」分文件夹存放。" },
  { t: "学会双向链接 [[ ]]", d: "在任意位置输入 [[知识点名]] 即可创建跳转,这是 Obsidian 区别于 Word 的核心:把碎片串成网。" },
  { t: "使用模板插件", d: "Settings → Core plugins 启用 Templates,统一教案 / 学生版 / 习题册的页眉 YAML(见教学规范页)。" },
  { t: "图谱视图", d: "Cmd/Ctrl+G 打开 Graph View,直观看到知识点之间的关联,适合复盘单元结构。" },
  { t: "导出与同步", d: "教学产出最终以 .md 提交到 GitHub 仓库(Obsidian Git 插件可一键 push),网站自动更新。" },
];

const tips = [
  "教师电脑上 Obsidian 与 VSCode 各开一台:Obsidian 写正文、VSCode + AI 改格式与生成习题。",
  "所有文件名只用中英文与短横线,避免空格和特殊符号 —— 否则 URL 生成会出错。",
  "每篇笔记顶部必须含 YAML(title / subject / level / version / lang),网站靠它自动归类。",
];

const ObsidianGuide = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/tech-stack" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> 返回技术栈
        </Link>
        <span className="font-serif-cn text-lg font-bold">
          Obsidian 入门 <span className="text-primary text-sm font-normal ml-1">教师视角</span>
        </span>
      </div>
    </nav>

    <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      <header>
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">CONTENT TOOL · 01</p>
        <h1 className="font-serif-cn text-4xl md:text-5xl font-bold mb-4">用 Obsidian 写出可入仓的教学内容</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Obsidian 把每篇教案变成本地的纯文本 .md 文件,既能本地双向链接,也能直接 push 到 Git 仓库。
          它是「不会代码的老师」最舒适的内容生产入口。
        </p>
      </header>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">六步上手</h2>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <Card key={s.t} className="p-5 flex gap-4">
              <div className="font-serif-cn text-2xl text-primary w-8 shrink-0">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="font-semibold mb-1">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Card>
          ))}
        </ol>
      </section>

      <section className="bg-secondary text-secondary-foreground rounded-xl p-6">
        <h2 className="font-serif-cn text-xl font-bold mb-4">教学场景下的实操要点</h2>
        <ul className="space-y-2">
          {tips.map((t) => (
            <li key={t} className="flex gap-2 text-sm leading-relaxed">
              <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-primary" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">官方与学习资源</h2>
        <div className="space-y-2">
          {[
            { l: "Obsidian 官方帮助文档", u: "https://help.obsidian.md/" },
            { l: "Obsidian 中文社区", u: "https://forum-zh.obsidian.md/" },
            { l: "Obsidian Git 插件(自动同步到 GitHub)", u: "https://github.com/denolehov/obsidian-git" },
          ].map((r) => (
            <a
              key={r.u}
              href={r.u}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <BookOpen size={14} /> {r.l} <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </section>

      <div className="border-t border-border pt-6 flex justify-between text-sm">
        <Link to="/tech-stack" className="text-muted-foreground hover:text-foreground">← 技术栈</Link>
        <Link to="/learn/markdown" className="text-primary font-semibold hover:underline">下一篇:Markdown 语法 →</Link>
      </div>
    </div>
  </div>
);

export default ObsidianGuide;