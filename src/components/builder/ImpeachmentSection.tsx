import { SectionHeading } from "./SectionHeading";
import { AlertTriangle, Bot, Gavel } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const ImpeachmentSection = () => {
  const { t } = useLang();
  return (
  <section>
    <SectionHeading
      id="impeachment"
      number={t("四", "04")}
      title={t("弹劾与纠错机制", "Impeachment & Correction")}
      subtitle={t("任何治理体系，进入机制和退出机制同等重要。", "In any governance system, the exit mechanism matters as much as the entry mechanism.")}
    />

    <div className="space-y-6">
      {/* Committee impeachment */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} className="text-destructive" />
          <h3 className="font-serif-cn font-semibold text-foreground">{t("委员会成员弹劾", "Committee Member Impeachment")}</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>{t("任何委员会成员如被证明腐化、违反协议、损害平台公益性，可由其他委员会成员或用户联署发起弹劾。", "Any committee member proven to be corrupt, in violation of the protocol, or harming the platform's public-interest nature may be impeached by joint petition from other members or users.")}</li>
          <li>{t("协议层负责裁决弹劾案，裁决结果公开，被弹劾者有申辩权。", "The Protocol Layer adjudicates impeachment cases. Rulings are public; the accused has the right to defense.")}</li>
          <li>{t("弹劾成立，成员被移除，贡献记录保留，但委员会资格取消。", "If sustained, the member is removed. The contribution record is preserved, but committee eligibility is revoked.")}</li>
        </ul>
      </div>

      {/* Protocol correction */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Gavel size={18} className="text-primary" />
          <h3 className="font-serif-cn font-semibold text-foreground">{t("协议层裁决的纠错", "Correcting Protocol Layer Rulings")}</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>{t("协议层裁决如果明显错误，可被委员会集体申请推翻。", "If a Protocol Layer ruling is plainly mistaken, the committee can jointly request that it be overturned.")}</li>
          <li>{t("推翻程序：需要教育平权层和商业盈利层共同申请，协议层重新审议。", "Procedure: the Equity and Commerce layers must jointly apply, and the Protocol Layer re-deliberates.")}</li>
          <li>{t("裁决被推翻后，原裁决者需公开道歉并承担相应责任。", "Once overturned, the original adjudicator must apologize publicly and bear the corresponding responsibility.")}</li>
          <li>{t("所有裁决记录永久公开，不可删除，形成判例积累。", "All rulings are permanently public and undeletable, accumulating as precedent.")}</li>
        </ul>
      </div>

      {/* Agent correction */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Bot size={18} className="text-primary" />
          <h3 className="font-serif-cn font-semibold text-foreground">{t("精神 Agent 的纠错", "Correcting the Spirit Agent")}</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>{t("如果精神 agent 的判断被认为偏离了创立精神，任何人可以公开质疑并提交委员会审议。", "If the Spirit Agent's judgment is believed to have drifted from the founding spirit, anyone can publicly challenge it and submit it to the committee.")}</li>
          <li>{t("委员会可以决定更新 agent 的训练数据，但更新过程必须完全公开透明。", "The committee can decide to update the agent's training data — but the update process must be entirely public and transparent.")}</li>
          <li>{t("agent 不可被删除，不可被沉默，但可以被纠正。", "The agent cannot be deleted or silenced — but it can be corrected.")}</li>
        </ul>
      </div>
    </div>
  </section>
);
};
