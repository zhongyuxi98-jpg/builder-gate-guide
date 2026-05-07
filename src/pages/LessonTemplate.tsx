import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, Bot, User, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const sections = [
  ["00", "课程元数据", "Metadata", "学科 / 课程 / 单元 / 标题 / 时长 / 版本 / 语言 / 学段 / 作者 / 更新 / 标签"],
  ["01", "学习目标", "Learning Objectives", "学生上完这节课能做到什么 — 用动词开头"],
  ["02", "前置知识", "Prerequisites", "需要哪些前提 没有就写「无」"],
  ["03", "课程导入", "Hook / Opening", "故事 / 图片 / 反直觉问题 5 分钟以内"],
  ["04", "核心内容", "Core Content", "本节主体 双语并列(中文 ZH / English EN)"],
  ["05", "苏格拉底式追问", "Socratic Questions", "3–5 个关键提问 推动思考而非记忆"],
  ["06", "易错点与误区", "Common Mistakes", "学生最容易在哪里出错 提前指出"],
  ["07", "课后任务", "Assignments", "练习 / 阅读 / 思考题 注明难度与预计时长"],
  ["08", "参考资料", "References", "参考文献必须给链接 — 教学硬规则"],
] as const;

const audiences = [
  { icon: <User size={18} />, who: "人类老师", desc: "下载 .docx,按习惯像写 Word 一样填空。不需要学 Markdown 或 YAML。" },
  { icon: <Bot size={18} />, who: "AI Agent 老师", desc: "读取附录 C 的转换提示词,把 Word 自动转成站点 Markdown 标准。" },
  { icon: <Users size={18} />, who: "协作者 / 未来的你", desc: "通过统一模板对齐预期,新成员上手成本接近零。" },
];

const aiPrompt = `你是「知识之门」内容流水线。
输入:一份按 v2 模板填写的 .docx 教案。
任务:产出一份 .md 文件:
  • Section 0 元数据 → YAML front matter
    (subject, course, unit, title_cn, title_en, duration, version, language, level, author, updated, tags)
  • Section 01–08 → H2 标题,保留双语并列结构
  • version = student → 移除 05、06
  • version = exercise → 仅保留 04 + 07,题目编号,答案折叠
  • 参考文献保留为 Markdown 链接
输出:纯 Markdown,不要任何额外说明。`;

const LessonTemplate = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/tech-stack" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> 返回技术栈
        </Link>
        <span className="font-serif-cn text-lg font-bold">
          教案模板 <span className="text-primary text-sm font-normal ml-1">Lesson Template v2</span>
        </span>
      </div>
    </nav>

    <div className="max-w-3xl mx-auto px-6 py-12 space-y-14">
      <header>
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">CONTENT PIPELINE · 入口</p>
        <h1 className="font-serif-cn text-4xl md:text-5xl font-bold mb-4">
          一份 Word 模板,三类读者共用
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          老师只用 Word。AI 自动转 Markdown。系统秒级发布。
          这份模板是知识之门所有内容的起点,也是人类与 AI 之间的共同语言。
        </p>
        <a
          href="/zhishimen-lesson-template-v2.docx"
          download
          className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          <Download size={16} /> 下载教案模板 v2 (.docx)
        </a>
      </header>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">这份模板给谁看?</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {audiences.map((a) => (
            <Card key={a.who} className="p-4">
              <div className="flex items-center gap-2 text-primary mb-2">{a.icon}<span className="font-bold text-foreground">{a.who}</span></div>
              <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">模板结构(8 章节 + 元数据)</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          {sections.map(([num, zh, en, hint], i) => (
            <div key={num} className={`grid grid-cols-[60px_1fr] gap-4 p-4 ${i ? "border-t border-border" : ""}`}>
              <div className="text-xs text-muted-foreground font-mono pt-1">{num}</div>
              <div>
                <div className="font-serif-cn font-bold">{zh} <span className="text-muted-foreground text-xs font-normal ml-2">{en}</span></div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{hint}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-2">三种版本,一份源文件</h2>
        <p className="text-sm text-muted-foreground mb-4">写一份完整的教师版,系统自动派生学生版与习题版。</p>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { v: "学生版", c: "student", in: "学习目标 / 核心内容 / 课后任务", out: "教学策略 / 易错点解析" },
            { v: "教师版", c: "teacher", in: "全部 8 章节 / 完整教学指引", out: "无 — 最完整版" },
            { v: "习题版", c: "exercise", in: "题目 / 变式 / 详细解析", out: "讲授内容 / 教学策略" },
          ].map((x) => (
            <Card key={x.c} className="p-4">
              <div className="font-serif-cn font-bold">{x.v}</div>
              <code className="text-xs text-primary">{x.c}</code>
              <p className="text-xs mt-2"><span className="text-muted-foreground">含:</span>{x.in}</p>
              <p className="text-xs mt-1"><span className="text-muted-foreground">去:</span>{x.out}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-2 flex items-center gap-2">
          <Bot size={20} className="text-primary" /> 给 AI Agent 的转换提示词
        </h2>
        <p className="text-sm text-muted-foreground mb-3">
          把这段提示词连同 Word 文件一起丢给 Claude / GPT。它会输出符合站点标准的 Markdown,可直接入仓库。
        </p>
        <Card className="p-4 bg-muted">
          <pre className="text-xs leading-relaxed font-mono whitespace-pre-wrap">{aiPrompt}</pre>
        </Card>
      </section>

      <section className="bg-secondary text-secondary-foreground rounded-xl p-6">
        <h2 className="font-serif-cn text-xl font-bold mb-3 flex items-center gap-2"><FileText size={18} /> 工作流</h2>
        <ol className="text-sm space-y-1.5 list-decimal list-inside opacity-90">
          <li>下载 .docx 模板</li>
          <li>用 Word / Pages / WPS / 飞书文档 任意一种填写</li>
          <li>把完成的 .docx 丢给 AI(配上方提示词)</li>
          <li>AI 输出 Markdown → 入 GitHub 内容仓库</li>
          <li>网站秒级构建发布 + 学生 PDF 自动生成</li>
        </ol>
        <p className="text-xs opacity-70 mt-4">整个过程你只做一件事:写 Word。</p>
      </section>

      <div className="border-t border-border pt-6 flex justify-between text-sm">
        <Link to="/learn/markdown" className="text-muted-foreground hover:text-foreground">← Markdown 语法(可选了解)</Link>
        <Link to="/teaching-spec" className="text-primary font-semibold hover:underline">教学管理规范 →</Link>
      </div>
    </div>
  </div>
);

export default LessonTemplate;