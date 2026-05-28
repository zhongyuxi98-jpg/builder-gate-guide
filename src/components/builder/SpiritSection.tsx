import { SectionHeading } from "./SectionHeading";
import { Sparkles, BookOpen, Scale, Lightbulb, Smile, Shield } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const SpiritSection = () => {
  const { t } = useLang();
  const beliefs = [
    { icon: <BookOpen size={18} />, text: t("知识不属于任何人。它属于所有需要它的人。", "Knowledge belongs to no one. It belongs to everyone who needs it.") },
    { icon: <Sparkles size={18} />, text: t("门永远开着。这是唯一不能谈判的条件。", "The door is always open. This is the one non-negotiable condition.") },
    { icon: <Scale size={18} />, text: t("每个人应得的，一分不少。每个人不该得的，一分不多。", "Everyone gets exactly what they deserve — no less, no more.") },
    { icon: <Shield size={18} />, text: t("协议大于作者。包括写下这份协议的人。", "The protocol outranks the author — including the person who wrote it.") },
    { icon: <Lightbulb size={18} />, text: t("探索比正确更重要。我们允许试错，我们欢迎质疑。", "Exploration matters more than being right. We allow mistakes and welcome challenges.") },
    { icon: <Smile size={18} />, text: t("轻松不是不认真，有趣不是不严肃。我们可以同时做到这两件事。", "Lightness is not unseriousness; fun is not unrigorous. We can do both at once.") },
  ];

  return (
    <section>
      <SectionHeading id="spirit" number={t("零", "00")} title={t("组织精神", "Spirit of the Org")} subtitle={t("清晰、有趣、探索", "Clear · Playful · Exploratory")} />

      <p className="text-foreground/80 leading-relaxed mb-8 text-base font-serif-cn">
        {t(
          "知识之门不是一个沉重的使命组织。它是一群相信知识应该自由流动的人，用轻松、有趣、好玩的方式，做一件想做一辈子的事。好玩不是装饰，是生产力。",
          "The Knowledge Gate is not a heavy mission-driven org. It is a group of people who believe knowledge should flow freely, doing something they want to do for a lifetime — in a light, playful, joyful way. Playfulness is not decoration; it is productivity."
        )}
      </p>

      <h3 className="font-serif-cn text-xl font-semibold text-foreground mb-5">{t("我们相信的几件事", "What We Believe")}</h3>
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
        <h4 className="font-serif-cn font-semibold text-foreground mb-2">
          {t("知识之门与创始人个人业务的分离", "Separation Between the Gate and the Founder's Personal Business")}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(
            "知识之门是一个独立的协议型组织，与创始人的个人教育业务完全分离。创始人在知识之门内以贡献者身份参与，按贡献获得应得部分，但其个人商业业务不受知识之门协议约束，知识之门的资源也不可被用于个人商业目的。这条边界保护创始人的商业自由，也保护平台的公益性。",
            "The Knowledge Gate is an independent protocol-based organization, fully separated from the founder's personal education business. The founder participates inside the Gate only as a contributor, receiving exactly what their contributions earn. Their personal commerce is not governed by the Gate's protocol, and the Gate's resources cannot be used for personal commercial purposes. This boundary protects the founder's commercial freedom and the platform's public-interest nature."
          )}
        </p>
      </div>
    </section>
  );
};
