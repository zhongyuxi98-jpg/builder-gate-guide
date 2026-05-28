import { SectionHeading } from "./SectionHeading";
import { Globe, GitBranch, Link2, Video, ExternalLink, Award } from "lucide-react";
import { useLang } from "@/lib/i18n";

const pointLevelColors = [
  "",
  "bg-muted text-muted-foreground",
  "bg-primary/10 text-primary",
  "bg-secondary text-secondary-foreground",
];

export const ContributionChannelsSection = () => {
  const { t } = useLang();
  const channels = [
    {
      icon: <Globe size={24} />,
      title: t("网页直接贡献", "Web Contribution"),
      subtitle: t("通过 Lovable 平台", "Via the Lovable platform"),
      desc: t("直接通过知识之门网页端进行内容上传、课程设计、资料编辑。无需技术背景，即可参与内容建设。", "Upload content, design courses, and edit materials directly through the Knowledge Gate web app. No technical background required."),
      points: t("基础贡献积分", "Base contribution points"),
      pointLevel: 1,
      link: "enter-the-door.lovable.app",
      tags: [t("零门槛", "Zero barrier"), t("即时上线", "Goes live instantly")],
    },
    {
      icon: <GitBranch size={24} />,
      title: t("代码贡献并入", "Code Contributions"),
      subtitle: t("GitHub / 代码仓库", "GitHub / code repositories"),
      desc: t("通过 Pull Request 提交代码改进、新功能开发、Bug 修复、插件开发等。代码贡献享受更高积分权重。", "Submit code improvements, new features, bug fixes, and plugins via pull request. Code contributions earn a higher weight."),
      points: t("高级贡献积分 ×2", "Advanced points ×2"),
      pointLevel: 3,
      link: "github.com/enter-the-door",
      tags: [t("技术贡献", "Technical"), t("高积分", "High points")],
    },
    {
      icon: <Link2 size={24} />,
      title: t("外部链接推荐", "External Resource Recommendations"),
      subtitle: t("资源整合与推荐", "Curation and recommendation"),
      desc: t("推荐优质外部学习资源链接、学术论文、开源教材等。经审核通过后获得推荐积分。", "Recommend high-quality external learning resources, papers, and open textbooks. Earn recommendation points once approved."),
      points: t("推荐贡献积分", "Recommendation points"),
      pointLevel: 1,
      link: null,
      tags: [t("资源整合", "Curation"), t("社区共建", "Community build")],
    },
    {
      icon: <Video size={24} />,
      title: t("视频会议贡献", "Video Call Contributions"),
      subtitle: t("腾讯会议 / 在线研讨", "Tencent Meeting / online seminars"),
      desc: t("参与或主持线上教学研讨、协议讨论会、培训工作坊。会议记录将被永久存档，参与者获得对应积分。", "Join or host online teaching seminars, protocol discussions, and training workshops. Records are archived permanently; participants earn matching points."),
      points: t("参与贡献积分 ×1.5", "Participation points ×1.5"),
      pointLevel: 2,
      link: t("腾讯会议号将在申请通过后发放", "Meeting ID issued after your application is approved"),
      tags: [t("协作讨论", "Collaboration"), t("实时互动", "Real-time")],
    },
  ];
  return (
  <section>
    <SectionHeading
      id="channels"
      number={t("八", "08")}
      title={t("贡献渠道与积分", "Contribution Channels & Points")}
      subtitle={t("多种参与方式，不同贡献享有不同福利积分", "Many ways to take part — different contributions earn different point weights")}
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
      <h4 className="font-serif-cn font-semibold text-foreground mb-3">{t("积分权重说明", "Point Weights")}</h4>
      <div className="grid sm:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          <span className="text-muted-foreground">{t("×1 基础积分：内容上传、资源推荐", "×1 base: uploads, recommendations")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary/50" />
          <span className="text-muted-foreground">{t("×1.5 协作积分：会议参与、协议讨论", "×1.5 collab: meetings, protocol talks")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <span className="text-muted-foreground">{t("×2 高级积分：代码贡献、核心开发", "×2 advanced: code contributions, core dev")}</span>
        </div>
      </div>
    </div>
  </section>
);
};
