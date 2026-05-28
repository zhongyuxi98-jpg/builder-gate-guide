## 目标
把 buildergate.org 改成中英双语国际版：浏览器语言检测（zh→中文，其他→英文），右上角语言切换器，所有页面（包括长文）双语。

## 技术方案

**轻量自研，不引第三方 i18n 库**——避免改动每个文件的 import 链路、便于审阅。

1. 新建 `src/lib/i18n.tsx`：
   - `LanguageProvider` 包裹 App，初次根据 `navigator.language` 判断（zh* → zh，否则 en），并写入 `localStorage('lang')`。
   - 暴露 `useLang()` 返回 `{ lang, setLang, t }`，其中 `t(zhText, enText)` 直接接两个字符串。
   - 同步设置 `<html lang>` 属性（SEO 必备）。
2. 新建 `src/components/LanguageSwitcher.tsx`：紧凑的 中 / EN 切换按钮，挂在 `BuilderNav` 顶部。
3. 在 `App.tsx` 用 `LanguageProvider` 包裹 `<BrowserRouter>`。

## 文案改造策略

所有组件统一改成：
```tsx
const { t } = useLang();
<h1>{t("知识之门治理协议", "The Knowledge Gate Protocol")}</h1>
```
列表/对象数据则用：
```tsx
{ cn: "...", en: "..." } // 渲染时根据 lang 选择
```

## 改造范围（分两批，本次一并提交）

**第一批 · 框架 + 核心入口（本次必交）**
- App.tsx / index.html（html lang、meta、title 切换）
- BuilderNav, BuilderHero, LanguageSwitcher
- 首页 `Index.tsx`
- BuilderPortal 所有 section 组件（Spirit / Protocol / ThreePowers / Incentive / ContentRules / Impeachment / Roadmap / ApplicationStandards / ContributionChannels / Certificate / JoinForm + InfoCard / SectionHeading / BuilderCardDownload）

**第二批 · 长文页面（同一次提交，但内容量较大）**
- ProjectsMatrix, TechStack, ObsidianGuide, MarkdownGuide, TeachingSpec, LessonTemplate, ThinkingEssence, FiveMinSOP, NotFound

## 不动的部分
- 品牌名「知识之门 / Knowledge Gate」英文版采用 "Knowledge Gate"。
- 外部链接 URL、邮箱、数字、人名保留原文。
- 公共 markdown 资源（`public/zhishimen-*.md`）暂不双语化（属于下载件，可单独建英文版）。
- shadcn ui 组件不动。

## 交付后
- 默认按浏览器语言；用户切换后记住偏好。
- `<html lang>` 与 og:locale 跟随切换，利于 SEO。
- 所有页面 100% 双语；长文按段落对照翻译。

确认后我直接开干，无需再次确认。