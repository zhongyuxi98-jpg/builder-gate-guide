import { Award, ShieldCheck, Fingerprint, Download } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const CertificateSection = () => (
  <section>
    <SectionHeading
      id="certificate"
      number="十"
      title="荣誉证书与建设者身份卡"
      subtitle="每一位建设者都将获得独一无二的认证"
    />

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* Certificate preview */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-elevated">
        <div className="flex items-center gap-2 mb-4">
          <Award size={20} className="text-primary" />
          <h3 className="font-serif-cn font-semibold text-foreground">荣誉证书</h3>
        </div>

        {/* Certificate mockup */}
        <div className="rounded-lg border-2 border-primary/20 bg-background p-6 relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

          <div className="text-center space-y-3 py-4">
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">知识之门 · Enter the Door</p>
            <h4 className="font-serif-cn text-xl font-bold text-foreground">建设者荣誉证书</h4>
            <p className="text-sm text-muted-foreground">Certificate of Builder Honor</p>
            <div className="w-12 h-px bg-primary mx-auto my-2" />
            <p className="text-sm text-foreground/70">兹证明</p>
            <p className="font-serif-cn text-lg font-bold text-foreground">[ 你的姓名 ]</p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
              为知识之门项目的第 <span className="text-primary font-bold">N</span> 位建设者，对平台开源建设做出了宝贵贡献。
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono">
                <Fingerprint size={12} />
                ETD-2026-XXXX-XXXX
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-1">此编号唯一，不可复制，与建设者身份永久绑定</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {[
            "每份证书拥有唯一防伪编号（ETD-年份-序列号）",
            "编号与建设者身份永久绑定，不可转让或复制",
            "证书记录在平台贡献系统中，可随时验证真伪",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <ShieldCheck size={12} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Builder card preview */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-elevated">
        <div className="flex items-center gap-2 mb-4">
          <Download size={20} className="text-primary" />
          <h3 className="font-serif-cn font-semibold text-foreground">建设者身份卡</h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          提交申请后，你将即时获得一张可导出的专属建设者身份卡，包含你的名字、申请编号和知识之门的寄语。
        </p>

        {/* Card mockup */}
        <BuilderCardPreview name="建设者" number={42} />

        <ul className="mt-4 space-y-2">
          {[
            "一键导出为高清图片，可用于社交媒体分享",
            "包含专属申请编号：「第 N 位建设者」",
            "附有知识之门的寄语与祝福",
            "每张卡片设计独一无二，彰显建设者身份",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <ShieldCheck size={12} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export const BuilderCardPreview = ({ name, number }: { name: string; number: number }) => {
  const formattedNum = String(number).padStart(4, "0");
  const code = `ETD-2026-${formattedNum}`;

  return (
    <div className="builder-card-preview rounded-xl overflow-hidden shadow-elevated border border-primary/20">
      {/* Card with dark gradient background */}
      <div className="bg-hero-gradient p-6 relative">
        {/* Decorative grid dots */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gold-light text-[10px] tracking-[0.2em] uppercase">知识之门 · Enter the Door</p>
              <p className="text-secondary-foreground/50 text-[10px]">Builder Identity Card</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-gold-light/30 flex items-center justify-center">
              <Award size={14} className="text-gold-light" />
            </div>
          </div>

          {/* Name */}
          <p className="text-secondary-foreground/50 text-[10px] mb-0.5">建设者</p>
          <p className="font-serif-cn text-xl font-bold text-secondary-foreground mb-1">{name}</p>

          {/* Number */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold text-sm font-bold font-serif-cn">第 {number} 位</span>
            <span className="text-secondary-foreground/40 text-xs">申请者</span>
          </div>

          {/* Quote */}
          <div className="border-t border-secondary-foreground/10 pt-3">
            <p className="text-xs text-secondary-foreground/60 italic leading-relaxed font-serif-cn">
              "门永远开着。你的到来，让这扇门更加明亮。"
            </p>
          </div>

          {/* Code at bottom */}
          <div className="flex items-center justify-between mt-4">
            <span className="font-mono text-[10px] text-gold-light/60 tracking-widest">{code}</span>
            <span className="text-[10px] text-secondary-foreground/30">enter-the-door.lovable.app</span>
          </div>
        </div>
      </div>
    </div>
  );
};
