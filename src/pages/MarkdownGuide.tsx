import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Row { syntax: string; render: string; note: string; }

const basics: Row[] = [
  { syntax: "# 一级标题", render: "页面 H1(每篇仅一个)", note: "网站 SEO 与目录均依赖此层级。" },
  { syntax: "## 二级 / ### 三级", render: "章节 / 小节", note: "保持嵌套不跳级,便于自动生成大纲。" },
  { syntax: "**加粗** *斜体* ~~删除~~", render: "强调", note: "教案中术语用加粗,引用古文用斜体。" },
  { syntax: "- 列表项 / 1. 有序", render: "列表", note: "知识点拆解优先用列表,避免长段落。" },
  { syntax: "> 引用", render: "引用块", note: "用于学生原话、参考文献摘录。" },
  { syntax: "`代码` / ```代码块```", render: "代码", note: "公式 / 输入示例 / 命令行。" },
  { syntax: "[文字](https://...)", render: "链接", note: "参考文献必须给链接 —— 这是教学硬规则。" },
  { syntax: "![alt](image.png)", render: "图片", note: "历史 / 地理一律配图;alt 文本即学生听屏阅读内容。" },
  { syntax: "| 列1 | 列2 |", render: "表格", note: "对比、归纳、知识结构化首选。" },
];

const yaml = `---
title: 供给与需求
subject: economics
level: A-Level
version: student-cn-en   # student | teacher | exercise
lang: [zh, en]
duration: 15             # 分钟,优先 5-10 分钟可讲完
tags: [microeconomics, 入门]
updated: 2026-05-07
---`;

const MarkdownGuide = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/tech-stack" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> 返回技术栈
        </Link>
        <span className="font-serif-cn text-lg font-bold">
          Markdown 语法 <span className="text-primary text-sm font-normal ml-1">教学版</span>
        </span>
      </div>
    </nav>

    <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      <header>
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">CONTENT TOOL · 02</p>
        <h1 className="font-serif-cn text-4xl md:text-5xl font-bold mb-4">Markdown:让教案能被网站直接读懂</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Markdown 是知识之门所有内容的最终载体。下面这套语法 + 文件头(YAML)是统一规范,
          决定了你写的 .md 能不能被前端正确渲染、归类、双语切换。
        </p>
      </header>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">基础语法速查</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3">语法</th>
                <th className="text-left p-3">效果</th>
                <th className="text-left p-3">教学使用建议</th>
              </tr>
            </thead>
            <tbody>
              {basics.map((r) => (
                <tr key={r.syntax} className="border-t border-border">
                  <td className="p-3 font-mono text-xs text-primary whitespace-nowrap align-top">{r.syntax}</td>
                  <td className="p-3 align-top">{r.render}</td>
                  <td className="p-3 text-muted-foreground align-top">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">每篇必填的文件头(YAML Front Matter)</h2>
        <p className="text-sm text-muted-foreground mb-3">
          网站靠这段元数据自动归类、生成版本切换器、判断双语显示。缺一不可。
        </p>
        <Card className="p-4 bg-muted">
          <pre className="text-xs leading-relaxed font-mono whitespace-pre overflow-x-auto">{yaml}</pre>
        </Card>
      </section>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">三种版本必须分开写</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "学生版", c: "student-cn-en", d: "双语或英语;去除冗余;以交互/讲解为主" },
            { t: "教师版(教案)", c: "teacher", d: "包含教学目标、苏格拉底追问、时间分配、易错点" },
            { t: "习题册", c: "exercise", d: "题目 + 变式 + 解析;支持课中验证与课后自测" },
          ].map((v) => (
            <Card key={v.t} className="p-4">
              <div className="font-serif-cn font-bold mb-1">{v.t}</div>
              <code className="text-xs text-primary">{v.c}</code>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{v.d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif-cn text-2xl font-bold mb-4">官方学习资源</h2>
        <div className="space-y-2">
          {[
            { l: "Markdown Guide(英文,最权威)", u: "https://www.markdownguide.org/" },
            { l: "GitHub Flavored Markdown 规范", u: "https://github.github.com/gfm/" },
            { l: "Markdown 中文教程", u: "https://markdown.com.cn/" },
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
        <Link to="/learn/obsidian" className="text-muted-foreground hover:text-foreground">← 上一篇:Obsidian</Link>
        <Link to="/teaching-spec" className="text-primary font-semibold hover:underline">下一篇:教学管理规范 →</Link>
      </div>
    </div>
  </div>
);

export default MarkdownGuide;