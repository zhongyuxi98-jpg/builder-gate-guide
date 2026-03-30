import { SectionHeading } from "./SectionHeading";
import { InfoCard } from "./InfoCard";
import { FileText, Users, Handshake } from "lucide-react";

export const ProtocolSection = () => (
  <section>
    <SectionHeading id="protocol" number="一" title="第一版协议的产生" />

    <div className="space-y-6">
      <InfoCard icon={<FileText size={20} />} title="合法性来源">
        <p>
          第一版协议由初始委员会共同起草——至少包含创始人、技术合伙人、法律顾问三方，共同讨论、修改、签署。协议文本完全公开，任何人可以阅读、引用、质疑。合法性来源不是权威，是透明和公开承诺。
        </p>
      </InfoCard>

      <InfoCard icon={<Users size={20} />} title="初始委员会的构成">
        <div className="space-y-2 mt-2">
          <div className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">创始人</span>
            <span>知识之门发起人，产品设计者，协议起草核心</span>
          </div>
          <div className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">法律顾问</span>
            <span>确保协议在法律层面有约束力，审查合规性</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          初始委员会的唯一任务：写出第一版协议，签署它，公开它，建立扩展机制让更多人按照协议加入。完成任务后，按协议规定程序过渡到正式委员会。
        </p>
      </InfoCard>

      <InfoCard icon={<Handshake size={20} />} title="双向承诺机制" variant="highlight">
        <p className="mb-3">每一位加入者在入场时签署一份公开的双向承诺：</p>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-background/50 border border-border">
            <p className="font-semibold text-foreground text-xs mb-1">平台对你承诺</p>
            <p className="text-xs">你的贡献被永久记录，署名不被删除，收入按规则分配，离开不被惩罚，声音在协议里有位置。</p>
          </div>
          <div className="p-3 rounded-lg bg-background/50 border border-border">
            <p className="font-semibold text-foreground text-xs mb-1">你对平台承诺</p>
            <p className="text-xs">认同这个协议，在协议框架里工作，不用平台做违反协议精神的事。</p>
          </div>
        </div>
        <p className="mt-3 text-xs italic text-muted-foreground">这不是合同，是承诺。承诺是公开的，任何人可以查。</p>
      </InfoCard>
    </div>
  </section>
);
