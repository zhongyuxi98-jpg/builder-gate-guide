import { SectionHeading } from "./SectionHeading";
import { Sparkles, BookOpen, Scale, Lightbulb, Smile, Shield } from "lucide-react";

const beliefs = [
  { icon: <BookOpen size={18} />, text: "知识不属于任何人。它属于所有需要它的人。" },
  { icon: <Sparkles size={18} />, text: "门永远开着。这是唯一不能谈判的条件。" },
  { icon: <Scale size={18} />, text: "每个人应得的，一分不少。每个人不该得的，一分不多。" },
  { icon: <Shield size={18} />, text: "协议大于作者。包括写下这份协议的人。" },
  { icon: <Lightbulb size={18} />, text: "探索比正确更重要。我们允许试错，我们欢迎质疑。" },
  { icon: <Smile size={18} />, text: "轻松不是不认真，有趣不是不严肃。我们可以同时做到这两件事。" },
];

export const SpiritSection = () => (
  <section>
    <SectionHeading id="spirit" number="零" title="组织精神" subtitle="清晰、有趣、探索" />

    <p className="text-foreground/80 leading-relaxed mb-8 text-base font-serif-cn">
      知识之门不是一个沉重的使命组织。它是一群相信知识应该自由流动的人，用轻松、有趣、好玩的方式，做一件想做一辈子的事。好玩不是装饰，是生产力。
    </p>

    <h3 className="font-serif-cn text-xl font-semibold text-foreground mb-5">我们相信的几件事</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {beliefs.map((b, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
        >
          <span className="text-primary mt-0.5 shrink-0">{b.icon}</span>
          <p className="text-sm text-foreground/80">{b.text}</p>
        </div>
      ))}
    </div>

    <div className="mt-8 p-5 rounded-xl bg-muted border border-border">
      <h4 className="font-serif-cn font-semibold text-foreground mb-2">知识之门与创始人个人业务的分离</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        知识之门是一个独立的协议型组织，与创始人的个人教育业务完全分离。创始人在知识之门内以贡献者身份参与，按贡献获得应得部分，但其个人商业业务不受知识之门协议约束，知识之门的资源也不可被用于个人商业目的。这条边界保护创始人的商业自由，也保护平台的公益性。
      </p>
    </div>
  </section>
);
