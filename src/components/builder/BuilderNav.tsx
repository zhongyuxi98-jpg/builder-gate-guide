import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const BuilderNav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const navItems = [
    { label: t("组织精神", "Spirit"), href: "#spirit" },
    { label: t("三权结构", "Tripartite"), href: "#three-powers" },
    { label: t("激励机制", "Incentives"), href: "#incentives" },
    { label: t("申请标准", "Standards"), href: "#standards" },
    { label: t("贡献渠道", "Channels"), href: "#channels" },
    { label: t("荣誉证书", "Certificate"), href: "#certificate" },
    { label: t("加入申请", "Join"), href: "#join" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="/" className="font-serif-cn text-lg font-bold text-foreground tracking-wide">
          {t("知识之门", "Knowledge Gate")}{" "}
          <span className="text-primary text-sm font-normal ml-1">{t("建设者", "Builders")}</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/tech-stack"
            className="text-sm text-primary font-semibold hover:underline"
          >
            {t("技术栈", "Tech Stack")} →
          </Link>
          <Link
            to="/thinking/essence"
            className="text-sm text-primary font-semibold hover:underline"
          >
            {t("思考", "Thinking")} →
          </Link>
          <Link
            to="/playbook/5min-sop"
            className="text-sm text-primary font-semibold hover:underline"
          >
            {t("速通 SOP", "5-min SOP")} →
          </Link>
          <a
            href="https://learn-node-link.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary font-semibold hover:underline"
          >
            {t("知识图谱", "Knowledge Graph")} ↗
          </a>
          <Link
            to="/projects"
            className="text-sm text-primary font-semibold hover:underline"
          >
            {t("项目矩阵", "Projects")} →
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher compact />
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label={open ? t("关闭菜单", "Close menu") : t("打开菜单", "Open menu")}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/tech-stack"
            onClick={() => setOpen(false)}
            className="block text-sm text-primary font-semibold"
          >
            {t("技术栈", "Tech Stack")} →
          </Link>
          <a
            href="https://learn-node-link.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block text-sm text-primary font-semibold"
          >
            {t("知识图谱", "Knowledge Graph")} ↗
          </a>
        </div>
      )}
    </nav>
  );
};
