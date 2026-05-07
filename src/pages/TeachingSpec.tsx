import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Layers, Cpu, Users, BookOpen, Palette, Globe2, Sparkles, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Section = ({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-20">
    <div className="mb-6">
      <span className="text-primary font-sans text-xs font-semibold tracking-widest uppercase">{num}</span>
      <h2 className="font-serif-cn text-3xl font-bold mt-1">{title}</h2>
      <div className="w-12 h-1 bg-primary rounded-full mt-3" />
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

const Rule = ({ n, children }: { n: string | number; children: React.ReactNode }) => (
  <Card className="p-4 flex gap-3">
    <div className="font-serif-cn text-primary font-bold w-6 shrink-0">{n}</div>
    <div className="text-sm leading-relaxed">{children}</div>
  </Card>
);

const toc = [
  { id: "workflow", label: "Skills Workflow 总流程" },
  { id: "infra", label: "Infra 硬件设施层" },
  { id: "ai-stack", label: "AI 工具流程" },
  { id: "files", label: "三类文件规范" },
  { id: "prompt", label: "教学思想 Prompt(理工)" },
  { id: "knowledge", label: "知识点理解层" },
  { id: "expansion", label: "思维拓展层" },
  { id: "feedback", label: "反馈层" },
  { id: "tools", label: "白板与速查工具" },
  { id: "humanities", label: "文科课程" },
  { id: "subjects", label: "学科特性(史 / 地)" },
  { id: "lovable", label: "Lovable 开发风格规范" },
];

const TeachingSpec = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/builder" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> 返回建设者门户
        </Link>
        <span className="font-serif-cn text-lg font-bold">
          教学管理规范 <span className="text-primary text-sm font-normal ml-1">teaching.md</span>
        </span>
      </div>
    </nav>

    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <header>
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">UNIFIED SPEC · v0.1</p>
        <h1 className="font-serif-cn text-4xl md:text-5xl font-bold mb-4">知识之门 · 教学管理统一规范</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          这是面向所有建设者(教师、AI agent、前端开发)的统一流程文档。每一条都将以 .md 形式入库,
          后续并入其他项目时只需替换样式,内容与流程保持一致。注重低耦合、可迁移、可被任意端复用。
        </p>
        <Card className="mt-6 p-4 border-primary/40 bg-primary/5 flex gap-3">
          <Clock size={18} className="text-primary shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <strong>15 分钟原则:</strong>每个知识点优先在 <span className="text-primary font-semibold">5–10 分钟</span> 内完成可给学生讲解的功能第一版。先跑通,再加厚。
          </div>
        </Card>
      </header>

      {/* TOC */}
      <nav className="bg-secondary text-secondary-foreground rounded-xl p-5">
        <div className="text-xs font-semibold tracking-widest uppercase opacity-70 mb-3">目录</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm">
          {toc.map((t, i) => (
            <a key={t.id} href={`#${t.id}`} className="hover:text-primary">
              {String(i + 1).padStart(2, "0")} · {t.label}
            </a>
          ))}
        </div>
      </nav>

      <Section id="workflow" num="01" title="Skills Workflow 总流程">
        <Card className="p-5">
          <pre className="text-xs leading-relaxed font-mono whitespace-pre overflow-x-auto">
{`内容生产(Obsidian/VSCode)
    ↓ 提交 .md
Git 仓库(单一事实源)
    ↓ 触发部署
前端渲染(学生版 / 教师版 / 习题版)
    ↓ 课中
教师 + AI Agent 协同讲解
    ↓ 课后
反馈图卡导出 → 学生留存 / 分享`}
          </pre>
        </Card>
      </Section>

      <Section id="infra" num="02" title="Infra · 硬件设施层">
        <Rule n={<Cpu size={16} />}>
          <strong>双机配置:</strong>教师两台电脑 —— 一台 Obsidian 写正文,一台 VSCode + AI 写交互/习题。需要时呼唤、介入、关心学生。
        </Rule>
        <Rule n={<Users size={16} />}>
          <strong>人机协同:</strong>人工教师与 AI Agent 同步进度,Agent 实时跟随学生节奏匹配讲解深度。
        </Rule>
      </Section>

      <Section id="ai-stack" num="03" title="AI 工具流程">
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { t: "搭建层", tool: "Lovable 等", d: "视觉语言、页面框架" },
            { t: "教案层", tool: "Claude", d: "深度教案、知识结构" },
            { t: "讲解层", tool: "GPT / Gemini", d: "课中即时反应、答疑" },
          ].map((x) => (
            <Card key={x.t} className="p-4">
              <div className="text-xs text-primary font-semibold tracking-widest uppercase">{x.t}</div>
              <div className="font-serif-cn font-bold mt-1">{x.tool}</div>
              <p className="text-xs text-muted-foreground mt-2">{x.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="files" num="04" title="教学流程 · 三类文件">
        <Rule n="A">应试策略插件(覆盖在所有学科页面侧边)。</Rule>
        <Rule n="B"><strong>学生使用版</strong>:双语或英语,极简,只保留交互内容。</Rule>
        <Rule n="C"><strong>教师使用版(教案)</strong>:含教学目标、追问脚本、时间表、易错点。</Rule>
        <Rule n="D"><strong>习题册</strong>:题目 + 变式 + 解析,支持课中验证。</Rule>
      </Section>

      <Section id="prompt" num="05" title="教学思想 Prompt · 理工科 · 理解层">
        {[
          "层层拆解,多苏格拉底式追问;每提一个概念,必有题目、变式、可拆解。",
          "经济学等多联系学生日常生活,情景带入让其模拟、选择,题目须有现实意义。",
          "凡出现文字,必有交互 —— 不陈列,可修改。",
          "碎片知识结构化:多用表格;讲解兼顾演绎与归纳、发散与聚焦。",
          "费曼教学法 + 教育游戏化(撒花、超强正反馈激励)。",
          "重视时间线(上课时间 + 时钟)、阶段(课前/中/后、初学/复习)、纬度状态(今日学习状态)。",
          "学科特性:多用画画、图像;能视觉理解就不抽象理解。",
          "凡需要讲解处必带插件:可输入公式、画图的白板、希腊字母键盘等。",
          "延展类追问适度,根据时间控制;学生答对可跳过,答错则拆建,一道变式题验证即可。",
          "用大师 / 学术奠基人作为导师角色带领讲解,弱化教师角色,使其流程化。",
        ].map((t, i) => (
          <Rule key={i} n={i + 1}>{t}</Rule>
        ))}
      </Section>

      <Section id="knowledge" num="06" title="知识点理解层">
        <Rule n="·">
          每个知识点都分 <strong>拓展态</strong> 与 <strong>收缩态</strong>;表格、卡片、图谱多形态,
          且应允许学生在旁边一键转为 <strong>思维导图</strong>。
        </Rule>
      </Section>

      <Section id="expansion" num="07" title="思维拓展层">
        <Rule n="·">讲完知识点必出现「研究拓展」环节:提自己的问题、联系生活、列参考文献、教学生如何做学术检索。</Rule>
        <Rule n={<Sparkles size={16} />}>
          拓展部分(除测验外)默认折叠,学生主动点开才展开 —— 此交互可触发 <strong>积分奖励</strong>。
        </Rule>
      </Section>

      <Section id="feedback" num="08" title="参考文献 & 反馈层">
        <Rule n={<BookOpen size={16} />}>凡参考阅读,必给链接或可访问渠道(无链接不入仓)。</Rule>
        <Rule n="·">知识点与作业完成后,必能 <strong>导出图片</strong>,展示进度,可公开分享、炫耀、留存。</Rule>
      </Section>

      <Section id="tools" num="09" title="工具 · 白板 & 双语速查">
        <Card className="p-5">
          <div className="font-serif-cn font-bold mb-3 flex items-center gap-2"><Layers size={18} className="text-primary"/> 白板原则</div>
          <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li>支持手写画板。</li>
            <li>头顶或侧边可随时插入:线条、流程图、坐标轴、公式、希腊字母。</li>
            <li>图表与图标 <strong className="text-foreground">不可重合</strong>。</li>
            <li>灵活性:可拉伸、定住、收起;跨学科通用;支持保存与导出。</li>
          </ul>
        </Card>
        <Rule n={<Globe2 size={16} />}>
          双语知识点速查 / 朗读 / 搜索工具,任意页面任意位置可一键唤起。
        </Rule>
      </Section>

      <Section id="humanities" num="10" title="文科课程">
        <Rule n="·">侧重思想脉络浸润、文本细读、概念辨析、批判性讨论。</Rule>
      </Section>

      <Section id="subjects" num="11" title="学科特性">
        <div className="grid md:grid-cols-2 gap-3">
          <Card className="p-4">
            <div className="font-serif-cn font-bold mb-2">历史</div>
            <p className="text-sm text-muted-foreground leading-relaxed">凡出现历史人物必带图;讲解多用表格;阅读材料需连续;多用一手资料;涉及地点 / 贸易必上地图。</p>
          </Card>
          <Card className="p-4">
            <div className="font-serif-cn font-bold mb-2">地理</div>
            <p className="text-sm text-muted-foreground leading-relaxed">多呈现地图、图像;一个知识点配一道原题。</p>
          </Card>
        </div>
      </Section>

      <Section id="lovable" num="12" title="Lovable 开发风格规范">
        {[
          "教育开发风格统一为彩色孟菲斯(浅色),禁止深色,让人愿意看。",
          "面向学生使用,页面即教师 —— 不出现「老师可念」「教案语气」的提示。",
          "凡出现内容,必做双语版本。",
          "上下环节、首页等都要有可进入的入口,不可在单一页面停滞。",
          "模式必须区分:阅读版 / 练习交互版 / 上课版(默认交互)。",
          "冗余信息一律去掉,只保留对教学有用的最核心信息(奥卡姆剃刀)。",
          "注重定制化:可用测试、人格分类等趣味形式,让学生带身份与认同去学习。",
        ].map((t, i) => (
          <Rule key={i} n={i + 1}>{t}</Rule>
        ))}
      </Section>

      <Card className="p-5 border-amber-400/40 bg-amber-50 dark:bg-amber-950/20 flex gap-3">
        <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5"/>
        <div className="text-sm leading-relaxed">
          <strong>耦合性提醒:</strong>本规范文档将并入其他项目。所有组件、命名、文件结构需保持松耦合 ——
          风格走 token,内容走 .md,不在业务逻辑里写死任何学科或文案。
        </div>
      </Card>

      <div className="border-t border-border pt-6 flex justify-between text-sm">
        <Link to="/learn/markdown" className="text-muted-foreground hover:text-foreground">← Markdown 语法</Link>
        <Link to="/builder" className="text-primary font-semibold hover:underline">回到建设者门户 →</Link>
      </div>
    </div>
  </div>
);

export default TeachingSpec;