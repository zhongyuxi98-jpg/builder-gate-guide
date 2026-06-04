import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLang } from "@/lib/i18n";

interface MobileCollapseProps {
  children: ReactNode;
  /** Pixel height of the preview "peek" before expansion. */
  peek?: number;
}

/**
 * Wraps a section so that on mobile it collapses to a short preview
 * with an "expand" button. On desktop it renders children as-is.
 */
export const MobileCollapse = ({ children, peek = 160 }: MobileCollapseProps) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLang();

  if (!isMobile) return <>{children}</>;

  return (
    <div>
      <div
        className="relative overflow-hidden transition-[max-height] duration-300"
        style={{ maxHeight: open ? 99999 : peek }}
      >
        {children}
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
        )}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary border border-primary/30 rounded-lg py-2.5 hover:bg-primary/5 active:scale-[0.99] transition"
      >
        {open ? t("收起", "Collapse") : t("展开全部", "Read more")}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
};