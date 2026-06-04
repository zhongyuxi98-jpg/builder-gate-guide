import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n";
import { Layers, Users } from "lucide-react";

export const WhatIsThisSection = () => {
  const { t } = useLang();

  return (
    <section>
      <SectionHeading
        id="what-is-this"
        number={t("引", "Intro")}
        title={t("这是什么", "What This Is")}
        subtitle={t("30 秒读完", "30-second read")}
      />

      <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-card">
        <p className="font-serif-cn text-lg md:text-xl text-foreground leading-relaxed">
          {t("知识之门是一份 ", "The Knowledge Gate is an ")}
          <span className="text-primary font-semibold">{t("开放教育协议", "open educational protocol")}</span>
          {t(" + 一个 ", " + a ")}
          <span className="text-primary font-semibold">{t("三权分立的治理结构", "tripartite governance structure")}</span>
          {t(" + 一组 ", " + a family of ")}
          <span className="text-primary font-semibold">{t("可被任何人按协议建造的实现", "implementations any team can build")}</span>
          {t(" —— 让年轻人在数字时代拥有 ", " — so that young people may have ")}
          <span className="text-gradient-gold font-bold">{t("认知自由", "cognitive freedom")}</span>
          {t("。", " in the digital age.")}
        </p>
      </div>

      <div className="space-y-4 text-foreground/80 leading-relaxed mb-8 font-serif-cn">
        <p>{t("它不是又一个教育产品。", "This is not another education product.")}</p>
        <p>
          {t("它是一份 ", "It is a ")}
          <strong>{t("协议规范", "protocol specification")}</strong>
          {t(
            " —— 像蒙台梭利, 像 W3C, 像 IETF —— 任何团队按这份协议都可以建造自己的实现。",
            " — like Montessori, like W3C, like IETF — any team can build their own implementation under it."
          )}
        </p>
        <p>
          {t(
            "协议守护:学生 学什么 / 信什么 / 是谁 / 见谁 / 走多快 / 何时退出,都由 ta 自己决定。",
            "The protocol safeguards: what students learn / believe / are / meet / pace / exit — all decided by themselves."
          )}
        </p>
        <p>
          {t("我们称这个为 ", "We call this ")}
          <strong className="text-primary">{t("认知自由 (Cognitive Freedom)", "Cognitive Freedom")}</strong>
          {t("。", ".")}
        </p>
      </div>

      <div className="bg-muted border border-border rounded-xl p-6">
        <h4 className="font-serif-cn font-semibold text-foreground mb-4 flex items-center gap-2">
          <Layers size={18} className="text-primary" />
          {t("结构关系", "Structural Relations")}
        </h4>

        <div className="flex justify-center mb-4">
          <div className="px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-serif-cn font-semibold shadow-elevated">
            {t("协议 · Protocol", "Protocol")}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { zh: "协议层 · 裁决", en: "Protocol · Adjudication" },
            { zh: "平权层 · 内容&信誉", en: "Equity · Content & Reputation" },
            { zh: "商业层 · 扩张&可持续", en: "Commerce · Expansion" },
          ].map((layer, i) => (
            <div
              key={i}
              className="text-center px-3 py-2.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground"
            >
              {t(layer.zh, layer.en)}
            </div>
          ))}
        </div>

        <div className="text-center text-muted-foreground text-xs mb-2">
          {t("↓ 实现 Implementations ↓", "↓ Implementations ↓")}
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs">
            {t("第一参考实现 · Alicia 版", "Reference v1 · Alicia")}
          </div>
          <div className="text-center px-3 py-2 rounded-lg bg-muted border border-border text-xs text-muted-foreground italic">
            {t("第二实现 · 待你建", "Implementation #2 · awaiting")}
          </div>
          <div className="text-center px-3 py-2 rounded-lg bg-muted border border-border text-xs text-muted-foreground italic">
            …
          </div>
        </div>

        <div className="text-center text-muted-foreground text-xs mb-2">
          {t("↓ 谁来用 Who Uses ↓", "↓ Who Uses ↓")}
        </div>
        <div className="flex justify-center">
          <div className="px-5 py-2 rounded-lg bg-card border border-border text-xs font-medium text-foreground flex items-center gap-2">
            <Users size={14} className="text-primary" />
            {t("学生 · 造门者 · 守门者", "Students · Door-makers · Door-keepers")}
          </div>
        </div>
      </div>
    </section>
  );
};