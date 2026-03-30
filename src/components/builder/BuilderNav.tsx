import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "组织精神", href: "#spirit" },
  { label: "协议产生", href: "#protocol" },
  { label: "三权结构", href: "#three-powers" },
  { label: "激励机制", href: "#incentives" },
  { label: "内容归属", href: "#content-rules" },
  { label: "纠错机制", href: "#impeachment" },
  { label: "路线图", href: "#roadmap" },
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
        </div>
      )}
    </nav>
  );
};
