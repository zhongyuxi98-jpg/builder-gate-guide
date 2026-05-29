import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ExternalLink,
  LogIn,
  LogOut,
  Loader2,
  Users,
  Award,
  Scale,
  Gift,
  CheckCircle2,
  UsersRound,
  Vote,
  BadgeCheck,
  Coins,
  Bot,
  ChevronDown,
} from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import {
  sharedSupabase,
  type SharedContributor,
  type SharedContribution,
  type SharedGovernanceRule,
  ROLE_RANK,
} from "@/integrations/enterthedoor/client";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ROLE_LABEL = {
  founder: { zh: "创始人", en: "Founder" },
  committee_member: { zh: "委员会", en: "Committee" },
  core_contributor: { zh: "核心共建者", en: "Core Contributor" },
  contributor: { zh: "共建者", en: "Contributor" },
  observer: { zh: "观察者", en: "Observer" },
} as const;

const ROLE_COLOR: Record<string, string> = {
  founder: "bg-primary/15 text-primary border-primary/30",
  committee_member: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  core_contributor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  contributor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  observer: "bg-muted text-muted-foreground border-border",
};

const SOURCE_NOTE_ZH = "数据来源：enterthedoor.org 共建者协议";
const SOURCE_NOTE_EN = "Source: enterthedoor.org Builder Protocol";

// 把后端 rule_key + rule_value 翻译成人话
const RULE_PRESETS: Record<
  string,
  {
    icon: LucideIcon;
    tone: string;
    title: { zh: string; en: string };
    summary: (v: any) => { zh: string; en: string };
    badges?: (v: any) => Array<{ zh: string; en: string }>;
  }
> = {
  core_doors_free: {
    icon: Gift,
    tone: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    title: { zh: "核心学科永久免费", en: "Core Subjects Free Forever" },
    summary: () => ({
      zh: "由开源共建者建设的核心学科之门，永久对所有学生免费。",
      en: "Core subject doors built by open-source contributors stay free forever.",
    }),
    badges: (v) =>
      v?.enforced ? [{ zh: "强制执行", en: "Enforced" }] : [],
  },
  contribution_approval_quorum: {
    icon: CheckCircle2,
    tone: "text-primary bg-primary/10 border-primary/30",
    title: { zh: "贡献审核门槛", en: "Contribution Approval" },
    summary: (v) => ({
      zh: `任何贡献至少需 ${v?.min_reviewers ?? 2} 位委员会成员审核通过。`,
      en: `Any contribution needs at least ${v?.min_reviewers ?? 2} committee approvals.`,
    }),
  },
  committee_max_size: {
    icon: UsersRound,
    tone: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/30",
    title: { zh: "委员会规模上限", en: "Committee Size Cap" },
    summary: (v) => ({
      zh: `委员会最多 ${v?.max ?? 11} 人，保持决策效率。`,
      en: `Committee is capped at ${v?.max ?? 11} members to stay nimble.`,
    }),
  },
  protocol_amendment_threshold: {
    icon: Vote,
    tone: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30",
    title: { zh: "协议修改门槛", en: "Protocol Amendment" },
    summary: (v) => {
      const pct = Math.round((v?.approval_ratio ?? 0.67) * 100);
      return {
        zh: `修改协议需委员会 ${pct}% 同意（约 2/3 多数）。`,
        en: `Amending the protocol requires ${pct}% committee approval (≈2/3).`,
      };
    },
  },
  contributor_recognition: {
    icon: BadgeCheck,
    tone: "text-primary bg-primary/10 border-primary/30",
    title: { zh: "共建者公开认可", en: "Public Recognition" },
    summary: () => ({
      zh: "所有通过审核的共建者都会获得公开主页与荣誉证书资格。",
      en: "Every approved contributor gets a public profile and certificate.",
    }),
  },
  revenue_model: {
    icon: Coins,
    tone: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30",
    title: { zh: "收益分配模型", en: "Revenue Model" },
    summary: (v) => {
      const fee = Math.round((v?.platform_fee ?? 0.15) * 100);
      return {
        zh: `核心内容免费；老师可对进阶内容收费，平台抽取 ${fee}%。`,
        en: `Core content is free; teachers may charge for premium content with a ${fee}% platform fee.`,
      };
    },
  },
  ai_continuity: {
    icon: Bot,
    tone: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/30",
    title: { zh: "AI 接管机制", en: "AI Continuity" },
    summary: () => ({
      zh: "无委员会成员在线时，AI 按协议规则自动维持运行。",
      en: "When no committee members are active, AI keeps things running by protocol.",
    }),
  },
};

function describeRule(r: SharedGovernanceRule, lang: "zh" | "en") {
  const preset = RULE_PRESETS[r.rule_key];
  if (preset) {
    return {
      Icon: preset.icon,
      tone: preset.tone,
      title: preset.title[lang],
      summary: preset.summary(r.rule_value)[lang],
      badges: (preset.badges?.(r.rule_value) ?? []).map((b) => b[lang]),
    };
  }
  // 未知规则的兜底：用 description，避免再暴露 JSON
  return {
    Icon: Scale,
    tone: "text-muted-foreground bg-muted border-border",
    title: r.rule_key.replace(/_/g, " "),
    summary:
      r.description ?? (lang === "zh" ? "（暂无描述）" : "(no description)"),
    badges: [] as string[],
  };
}

export const SharedContributorsSection = () => {
  const { t, lang } = useLang();
  const [contributors, setContributors] = useState<SharedContributor[]>([]);
  const [contributions, setContributions] = useState<SharedContribution[]>([]);
  const [rules, setRules] = useState<SharedGovernanceRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    sharedSupabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = sharedSupabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const [cRes, conRes, rRes] = await Promise.all([
        sharedSupabase.from("contributors").select("*").eq("is_public", true),
        sharedSupabase
          .from("contributions")
          .select("*")
          .or("status.eq.approved,status.eq.merged")
          .order("created_at", { ascending: false })
          .limit(12),
        sharedSupabase.from("governance_rules").select("*").eq("is_active", true),
      ]);
      if (cancelled) return;
      const list = ((cRes.data as SharedContributor[]) ?? []).sort((a, b) => {
        const r = (ROLE_RANK[a.role] ?? 99) - (ROLE_RANK[b.role] ?? 99);
        if (r !== 0) return r;
        return (b.total_contribution_points ?? 0) - (a.total_contribution_points ?? 0);
      });
      setContributors(list);
      setContributions((conRes.data as SharedContribution[]) ?? []);
      setRules((rRes.data as SharedGovernanceRule[]) ?? []);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const signIn = async () => {
    const { error } = await sharedSupabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + "/builder" },
    });
    if (error) {
      toast({
        title: t("登录失败", "Sign-in failed"),
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const signOut = async () => {
    await sharedSupabase.auth.signOut();
    toast({ title: t("已退出", "Signed out") });
  };

  return (
    <section className="scroll-mt-20" id="shared">
      <SectionHeading
        id="shared-heading"
        number="00"
        title={t("共建者中心", "Builder Hub")}
        subtitle={t(
          "与 enterthedoor.org 共享数据 · 一次登录，跨项目共建",
          "Shared with enterthedoor.org · One identity across projects",
        )}
      />

      {/* Action bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <a
          href="https://enterthedoor.org/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-semibold"
        >
          <ExternalLink size={14} />
          {t("返回 enterthedoor.org 共建者中心", "Back to enterthedoor.org Hub")}
        </a>
        <div className="ml-auto">
          {session ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                {t("已登录", "Signed in as")} · {session.user.email}
              </span>
              <Button size="sm" variant="outline" onClick={signOut}>
                <LogOut size={14} /> {t("退出", "Sign out")}
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={signIn}>
              <LogIn size={14} /> {t("用 Google 登录共建者账号", "Sign in with Google")}
            </Button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16 text-muted-foreground">
          <Loader2 className="animate-spin mr-2" size={18} />
          {t("正在从 enterthedoor.org 加载共建数据…", "Loading shared data from enterthedoor.org…")}
        </div>
      ) : (
        <div className="space-y-10">
          {/* Contributors */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif-cn text-xl font-semibold text-card-foreground flex items-center gap-2">
                <Users size={18} className="text-primary" />
                {t("共建者名册", "Contributors")}
                <span className="text-xs font-normal text-muted-foreground">
                  ({contributors.length})
                </span>
              </h3>
              <span className="text-[11px] text-muted-foreground italic">
                {t(SOURCE_NOTE_ZH, SOURCE_NOTE_EN)}
              </span>
            </div>
            {contributors.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {t("暂无公开共建者。", "No public contributors yet.")}
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {contributors.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-lg border border-border bg-background/50 p-4 hover:shadow-elevated transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      {c.avatar_url ? (
                        <img
                          src={c.avatar_url}
                          alt={c.display_name}
                          className="w-10 h-10 rounded-full object-cover border border-border"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                          {c.display_name?.[0] ?? "?"}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-foreground truncate">
                            {c.display_name}
                          </span>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded border ${ROLE_COLOR[c.role] ?? ROLE_COLOR.contributor}`}
                          >
                            {lang === "zh"
                              ? ROLE_LABEL[c.role]?.zh ?? c.role
                              : ROLE_LABEL[c.role]?.en ?? c.role}
                          </span>
                        </div>
                        {c.bio && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.bio}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2 text-[11px] text-muted-foreground">
                          <span className="font-mono text-primary">
                            {c.total_contribution_points} {t("分", "pts")}
                          </span>
                          {c.github_handle && (
                            <a
                              href={`https://github.com/${c.github_handle}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary"
                            >
                              @{c.github_handle}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contributions */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif-cn text-xl font-semibold text-card-foreground flex items-center gap-2">
                <Award size={18} className="text-primary" />
                {t("最新贡献", "Recent Contributions")}
              </h3>
              <span className="text-[11px] text-muted-foreground italic">
                {t(SOURCE_NOTE_ZH, SOURCE_NOTE_EN)}
              </span>
            </div>
            {contributions.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {t("暂无已通过贡献。", "No approved contributions yet.")}
              </p>
            ) : (
              <ul className="divide-y divide-border">
                {contributions.map((co) => (
                  <li key={co.id} className="py-3 flex items-start gap-3">
                    <span
                      className={`text-[10px] mt-1 px-1.5 py-0.5 rounded border ${
                        co.status === "merged"
                          ? "bg-primary/15 text-primary border-primary/30"
                          : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                      }`}
                    >
                      {co.status}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-foreground">{co.title}</span>
                        <span className="text-[11px] text-muted-foreground">
                          · {co.contribution_type}
                        </span>
                        {co.target_name && (
                          <span className="text-[11px] text-muted-foreground">
                            → {co.target_name}
                          </span>
                        )}
                      </div>
                      {co.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {co.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                        <span className="font-mono text-primary">+{co.points}</span>
                        <span>{new Date(co.created_at).toLocaleDateString()}</span>
                        {co.evidence_url && (
                          <a
                            href={co.evidence_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary inline-flex items-center gap-0.5"
                          >
                            <ExternalLink size={10} /> {t("证据", "evidence")}
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Governance rules */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif-cn text-xl font-semibold text-card-foreground flex items-center gap-2">
                <Scale size={18} className="text-primary" />
                {t("协议规则", "Governance Rules")}
              </h3>
              <span className="text-[11px] text-muted-foreground italic">
                {t(SOURCE_NOTE_ZH, SOURCE_NOTE_EN)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              {t(
                "下面这几条规则定义了「知识之门」是怎么运转的：谁能加入、贡献怎么通过、收益怎么分。所有规则由委员会共同维护。",
                "These rules define how Knowledge Gate works: who joins, how contributions get approved, how revenue is shared. All maintained by the committee.",
              )}
            </p>
            {rules.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {t("暂无生效规则。", "No active rules.")}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {rules.map((r) => {
                  const d = describeRule(r, lang);
                  const Icon = d.Icon;
                  return (
                    <details
                      key={r.id}
                      className="group rounded-lg border border-border bg-background/50 p-4 hover:shadow-elevated transition-shadow"
                    >
                      <summary className="list-none cursor-pointer flex items-start gap-3">
                        <span
                          className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border ${d.tone}`}
                        >
                          <Icon size={18} />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-semibold text-sm text-foreground">
                              {d.title}
                            </h4>
                            {d.badges.map((b) => (
                              <span
                                key={b}
                                className="text-[10px] px-1.5 py-0.5 rounded border bg-primary/10 text-primary border-primary/30"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {d.summary}
                          </p>
                        </div>
                        <ChevronDown
                          size={14}
                          className="shrink-0 mt-2 text-muted-foreground transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <div className="mt-3 pt-3 border-t border-border/60">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                          {t("原始数据", "Raw data")} ·{" "}
                          <code className="font-mono">{r.rule_key}</code>
                        </div>
                        <pre className="text-[11px] font-mono text-foreground/70 bg-muted/40 rounded p-2 overflow-x-auto">
                          {JSON.stringify(r.rule_value, null, 2)}
                        </pre>
                      </div>
                    </details>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};