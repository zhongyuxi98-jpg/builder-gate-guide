import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "组织精神", href: "#spirit" },
  { label: "三权结构", href: "#three-powers" },
  { label: "激励机制", href: "#incentives" },
  { label: "申请标准", href: "#standards" },
  { label: "贡献渠道", href: "#channels" },
  { label: "荣誉证书", href: "#certificate" },
  { label: "加入申请", href: "#join" },
];

export const BuilderNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="/" className="font-serif-cn text-lg font-bold text-foreground tracking-wide">
          知识之门 <span className="text-primary text-sm font-normal ml-1">建设者</span>
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
            技术栈 →
          </Link>
          <Link
            to="/thinking/essence"
            className="text-sm text-primary font-semibold hover:underline"
          >
            思考 →
          </Link>
          <Link
            to="/playbook/5min-sop"
            className="text-sm text-primary font-semibold hover:underline"
          >
            速通 SOP →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
            技术栈 →
          </Link>
        </div>
      )}
    </nav>
  );
};
