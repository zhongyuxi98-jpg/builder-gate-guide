import { SectionHeading } from "./SectionHeading";
import { Globe, GitBranch, Link2, Video, ExternalLink, Award } from "lucide-react";

const channels = [
  {
    icon: <Globe size={24} />,
    title: "网页直接贡献",
    subtitle: "通过 Lovable 平台",
    desc: "直接通过知识之门网页端进行内容上传、课程设计、资料编辑。无需技术背景，即可参与内容建设。",
    points: "基础贡献积分",
    pointLevel: 1,
    link: "enter-the-door.lovable.app",
    tags: ["零门槛", "即时上线"],
  },
  {
    icon: <GitBranch size={24} />,
    title: "代码贡献并入",
    subtitle: "GitHub / 代码仓库",
    desc: "通过 Pull Request 提交代码改进、新功能开发、Bug 修复、插件开发等。代码贡献享受更高积分权重。",
    points: "高级贡献积分 ×2",
    pointLevel: 3,
    link: "github.com/enter-the-door",
    tags: ["技术贡献", "高积分"],
  },
  {
    icon: <Link2 size={24} />,
    title: "外部链接推荐",
    subtitle: "资源整合与推荐",
    desc: "推荐优质外部学习资源链接、学术论文、开源教材等。经审核通过后获得推荐积分。",
    points: "推荐贡献积分",
    pointLevel: 1,
    link: null,
    tags: ["资源整合", "社区共建"],
  },
  {
    icon: <Video size={24} />,
    title: "视频会议贡献",
    subtitle: "腾讯会议 / 在线研讨",
    desc: "参与或主持线上教学研讨、协议讨论会、培训工作坊。会议记录将被永久存档，参与者获得对应积分。",
    points: "参与贡献积分 ×1.5",
    pointLevel: 2,
    link: "腾讯会议号将在申请通过后发放",
    tags: ["协作讨论", "实时互动"],
  },
];

const pointLevelColors = [
  "",
  "bg-muted text-muted-foreground",
  "bg-primary/10 text-primary",
  "bg-secondary text-secondary-foreground",
];

export const ContributionChannelsSection = () => (
  <section>
    <SectionHeading
      id="channels"
      number="八"
      title="贡献渠道与积分"
      subtitle="多种参与方式，不同贡献享有不同福利积分"
    />

    <div className="grid md:grid-cols-2 gap-5">
      {channels.map((ch, i) => (
        <div
          key={i}
          className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                {ch.icon}
              </div>
              <div>
                <h3 className="font-serif-cn font-semibold text-foreground text-base">{ch.title}</h3>
                <p className="text-xs text-muted-foreground">{ch.subtitle}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ch.desc}</p>

          {/* Points badge */}
          <div className="flex items-center gap-2 mb-3">
            <Award size={14} className="text-primary" />
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${pointLevelColors[ch.pointLevel]}`}>
              {ch.points}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {ch.tags.map((tag, j) => (
              <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          {ch.link && (
            <div className="flex items-center gap-1.5 text-xs text-primary">
              <ExternalLink size={12} />
              <span>{ch.link}</span>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Points explanation */}
    <div className="mt-8 p-5 rounded-xl bg-muted border border-border">
      <h4 className="font-serif-cn font-semibold text-foreground mb-3">积分权重说明</h4>
      <div className="grid sm:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          <span className="text-muted-foreground">×1 基础积分：内容上传、资源推荐</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary/50" />
          <span className="text-muted-foreground">×1.5 协作积分：会议参与、协议讨论</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <span className="text-muted-foreground">×2 高级积分：代码贡献、核心开发</span>
        </div>
      </div>
    </div>
  </section>
);
