import { SectionHeading } from "./SectionHeading";
import { InfoCard } from "./InfoCard";
import { FileText, Users, Handshake } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const ProtocolSection = () => {
  const { t } = useLang();
  return (
  <section>
    <SectionHeading id="protocol" number={t("一", "01")} title={t("第一版协议的产生", "How Version One of the Protocol Came to Be")} />

    <div className="space-y-6">
      <InfoCard icon={<FileText size={20} />} title={t("合法性来源", "Source of Legitimacy")}>
        <p>
          {t(
            "第一版协议由初始委员会共同起草——至少包含创始人、技术合伙人、法律顾问三方，共同讨论、修改、签署。协议文本完全公开，任何人可以阅读、引用、质疑。合法性来源不是权威，是透明和公开承诺。",
            "Version one of the protocol is drafted jointly by the founding committee — including at least the founder, the technical partner, and the legal advisor — who discuss, revise, and sign together. The text is fully public; anyone may read, cite, or challenge it. Its legitimacy comes not from authority but from transparency and a public promise."
          )}
        </p>
      </InfoCard>

      <InfoCard icon={<Users size={20} />} title={t("初始委员会的构成", "Composition of the Founding Committee")}>
        <div className="space-y-2 mt-2">
          <div className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">{t("创始人", "Founder")}</span>
            <span>{t("知识之门发起人，产品设计者，协议起草核心", "Initiator of the Knowledge Gate, product designer, lead drafter of the protocol")}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">{t("法律顾问", "Legal Advisor")}</span>
            <span>{t("确保协议在法律层面有约束力，审查合规性", "Ensures the protocol is legally binding and reviews compliance")}</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {t(
            "初始委员会的唯一任务：写出第一版协议，签署它，公开它，建立扩展机制让更多人按照协议加入。完成任务后，按协议规定程序过渡到正式委员会。",
            "The sole task of the founding committee: write version one, sign it, publish it, and set up the expansion mechanism so more people can join under the protocol. Once done, transition to the formal committee per the protocol's procedure."
          )}
        </p>
      </InfoCard>

      <InfoCard icon={<Handshake size={20} />} title={t("双向承诺机制", "Mutual Commitment")} variant="highlight">
        <p className="mb-3">{t("每一位加入者在入场时签署一份公开的双向承诺：", "Every person who joins signs a public mutual commitment at entry:")}</p>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-background/50 border border-border">
            <p className="font-semibold text-foreground text-xs mb-1">{t("平台对你承诺", "The Platform Promises You")}</p>
            <p className="text-xs">{t("你的贡献被永久记录，署名不被删除，收入按规则分配，离开不被惩罚，声音在协议里有位置。", "Your contributions are permanently recorded, your credit is never deleted, income is distributed per the rules, leaving is never punished, and your voice has a place inside the protocol.")}</p>
          </div>
          <div className="p-3 rounded-lg bg-background/50 border border-border">
            <p className="font-semibold text-foreground text-xs mb-1">{t("你对平台承诺", "You Promise the Platform")}</p>
            <p className="text-xs">{t("认同这个协议，在协议框架里工作，不用平台做违反协议精神的事。", "You accept this protocol, work within its frame, and never use the platform for anything against its spirit.")}</p>
          </div>
        </div>
        <p className="mt-3 text-xs italic text-muted-foreground">{t("这不是合同，是承诺。承诺是公开的，任何人可以查。", "This is not a contract; it is a promise. And the promise is public — anyone can look it up.")}</p>
      </InfoCard>
    </div>
  </section>
);
};
