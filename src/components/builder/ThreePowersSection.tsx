import { SectionHeading } from "./SectionHeading";
import { Gavel, GraduationCap, TrendingUp, Bot } from "lucide-react";

const powers = [
  {
    icon: <Gavel size={22} />,
    title: "协议层（裁决）",
    desc: "知识之门的大法官。它不执行，只裁决。当商业盈利层和教育平权层发生冲突时，协议层按协议条例裁决。",
    details: [
      { label: "组成", value: "人+AI。人有最终否决权，AI 保证一致性和记录透明。" },
      { label: "精神 agent", value: "常驻协议层，有发言权，无执行权，不可删除，受委员会集体制约。" },
      { label: "错误处理", value: "协议层裁决错误时，可被推翻，需公开道歉并承担相应责任。" },
      { label: "修改程序", value: "协议可以被修改，但需要特定门槛和程序，不可被任何单一个体推翻。" },
    ],
  },
  {
    icon: <GraduationCap size={22} />,
    title: "教育平权层（内容与信誉）",
    desc: "负责基础教育内容的官方版本、平台认证和荣誉体系。它的使命是保证门永远开着，基础内容永远可及。",
    details: [
      { label: "组成", value: "委员会制，人+AI。按阶段扩展，逐步引入学生代表、技术人员、教育人员。" },
      { label: "平衡原则", value: "以人口+地方教材/文化双重平衡为原则去中心化，各委员会之间是协商关系。" },
      { label: "任期", value: "所有委员有任期限制，保证流动性，防止固化。" },
      { label: "弹劾", value: "任何委员会成员如被证明腐化或违反协议，可被联署发起弹劾，协议层裁决。" },
    ],
  },
  {
    icon: <TrendingUp size={22} />,
    title: "商业盈利层（扩张与可持续）",
    desc: "负责让平台活下去、扩张、可持续。市场自由竞争，创作者自主定价，平台抽成，财务实时公开透明。",
    details: [
      { label: "市场规则", value: "非委员会开发的内容，创作者自主决定是否收费，平台提供基础设施和流量。" },
      { label: "平台收入归属", value: "一部分用于协议层维护，一部分用于教育平权层，一部分用于贡献者薪酬。" },
      { label: "财务透明", value: "所有收入和支出实时公开，任何人可查，无黑箱。" },
      { label: "边界约束", value: "商业行为不得违反协议层裁决，不得蚕食教育平权层的基础内容免费原则。" },
    ],
  },
];

export const ThreePowersSection = () => (
  <section>
    <SectionHeading
      id="three-powers"
      number="二"
      title="三权结构"
      subtitle="三权相互制衡，没有任何一层拥有绝对权力。"
    />

    <div className="space-y-6">
      {powers.map((power, i) => (
        <div key={i} className="rounded-xl border border-border bg-card overflow-hidden shadow-card">
          <div className="flex items-center gap-3 px-6 py-4 bg-muted border-b border-border">
            <span className="text-primary">{power.icon}</span>
            <h3 className="font-serif-cn text-lg font-semibold text-foreground">{power.title}</h3>
          </div>
          <div className="px-6 py-5">
            <p className="text-sm text-foreground/80 mb-4">{power.desc}</p>
            <div className="space-y-2">
              {power.details.map((d, j) => (
                <div key={j} className="flex gap-3 text-sm">
                  <span className="font-semibold text-foreground shrink-0 w-20">{d.label}</span>
                  <span className="text-muted-foreground">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Spirit Agent callout */}
    <div className="mt-8 p-5 rounded-xl border-2 border-primary/30 bg-primary/5">
      <div className="flex items-center gap-2 mb-3">
        <Bot size={18} className="text-primary" />
        <h4 className="font-serif-cn font-semibold text-foreground">精神 Agent</h4>
      </div>
      <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside">
        <li>由初始委员会共同训练，代表协议创立时的集体精神，不代表任何单一个体的意志。</li>
        <li>训练数据由协议委员会集体维护，过程完全公开透明，任何人可以监督。</li>
        <li>当出现争议，回到创立精神，问这个决定是否符合最初的承诺。</li>
        <li>它有发言权，无执行权。它的判断被公开记录，任何人可以质疑，但任何人无法删除它。</li>
      </ul>
    </div>
  </section>
);
