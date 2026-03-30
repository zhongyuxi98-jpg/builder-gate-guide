import { SectionHeading } from "./SectionHeading";
import { AlertTriangle, Bot, Gavel } from "lucide-react";

export const ImpeachmentSection = () => (
  <section>
    <SectionHeading
      id="impeachment"
      number="四"
      title="弹劾与纠错机制"
      subtitle="任何治理体系，进入机制和退出机制同等重要。"
    />

    <div className="space-y-6">
      {/* Committee impeachment */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} className="text-destructive" />
          <h3 className="font-serif-cn font-semibold text-foreground">委员会成员弹劾</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>任何委员会成员如被证明腐化、违反协议、损害平台公益性，可由其他委员会成员或用户联署发起弹劾。</li>
          <li>协议层负责裁决弹劾案，裁决结果公开，被弹劾者有申辩权。</li>
          <li>弹劾成立，成员被移除，贡献记录保留，但委员会资格取消。</li>
        </ul>
      </div>

      {/* Protocol correction */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Gavel size={18} className="text-primary" />
          <h3 className="font-serif-cn font-semibold text-foreground">协议层裁决的纠错</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>协议层裁决如果明显错误，可被委员会集体申请推翻。</li>
          <li>推翻程序：需要教育平权层和商业盈利层共同申请，协议层重新审议。</li>
          <li>裁决被推翻后，原裁决者需公开道歉并承担相应责任。</li>
          <li>所有裁决记录永久公开，不可删除，形成判例积累。</li>
        </ul>
      </div>

      {/* Agent correction */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Bot size={18} className="text-primary" />
          <h3 className="font-serif-cn font-semibold text-foreground">精神 Agent 的纠错</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>如果精神 agent 的判断被认为偏离了创立精神，任何人可以公开质疑并提交委员会审议。</li>
          <li>委员会可以决定更新 agent 的训练数据，但更新过程必须完全公开透明。</li>
          <li>agent 不可被删除，不可被沉默，但可以被纠正。</li>
        </ul>
      </div>
    </div>
  </section>
);
