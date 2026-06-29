"use client";

import Link from "next/link";
import { ArrowRight, Clapperboard, ImageIcon, Layers3, LayoutDashboard, MessageSquareText, Server, Share2, ShieldCheck, Sparkles, Zap, type LucideIcon } from "lucide-react";

import { APP_VERSION, DOCS_URL } from "@/constant/env";
import { useConfigStore } from "@/stores/use-config-store";

type HomeFeature = {
    icon: LucideIcon;
    title: string;
    desc: string;
    href: string;
    action?: "config";
};

const features: HomeFeature[] = [
    {
        icon: ImageIcon,
        title: "AI 绘图",
        desc: "聚合 OpenAI Images、Flux、Gemini、Grok、Hunyuan 等海外标准模型，统一在 Pro Canvas 里调度。",
        href: "/image",
    },
    {
        icon: MessageSquareText,
        title: "画布助手",
        desc: "围绕选中节点和上游节点对话、生图，把结果直接插回画布，不打断创作链路。",
        href: "/canvas",
    },
    {
        icon: Clapperboard,
        title: "AI 视频",
        desc: "支持 OpenAI Video 和 Grok video chat 兼容协议，文生视频、图生视频统一入口。",
        href: "/video",
    },
    {
        icon: Server,
        title: "fishxapi 一键接入",
        desc: "粘贴 API Key 后自动拉取模型、识别类型和能力，并按模型协议生成正确请求参数。",
        href: "/settings",
        action: "config",
    },
    {
        icon: Sparkles,
        title: "模型图标与能力识别",
        desc: "模型列表自动显示 GPT、Claude、Gemini、Grok、Doubao 等图标，减少选择成本。",
        href: "/canvas",
    },
    {
        icon: Share2,
        title: "素材沉淀",
        desc: "把提示词、参考图、生成结果和画布结构沉淀在本地，下一次创作从已有经验开始。",
        href: "/assets",
    },
];

const stats = [
    { value: "40+", label: "fishxapi 模型" },
    { value: "4", label: "标准协议" },
    { value: "100+", label: "模型图标" },
    { value: "0", label: "后端数据库" },
] as const;

export default function IndexPage() {
    const openConfigDialog = useConfigStore((state) => state.openConfigDialog);
    const year = new Date().getFullYear();

    const openConfig = () => openConfigDialog(false);

    return (
        <main className="relative isolate h-full overflow-y-auto bg-background text-foreground">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.38] [mask-image:radial-gradient(ellipse_at_top,black_0%,black_42%,transparent_78%)]" />

            <section className="relative px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">
                <div className="mx-auto max-w-5xl text-center">
                    <div className="mb-8 flex justify-center">
                        <Link href="/canvas" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition hover:bg-accent">
                            <span className="inline-block size-1.5 rounded-full bg-green-500" />
                            {APP_VERSION} · Pro Canvas 已就绪
                            <ArrowRight className="size-3 text-muted-foreground" />
                        </Link>
                    </div>

                    <h1 className="text-balance text-5xl font-semibold leading-none tracking-normal text-foreground md:text-[64px] lg:text-[72px]">
                        The Foundation for
                        <br />
                        <span className="relative inline-block">
                            your AI Studio
                            <svg className="absolute -bottom-2 left-0 h-2 w-full text-foreground" viewBox="0 0 300 8" fill="none" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M2 5C50 2 100 2 150 5C200 8 250 8 298 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-8 text-muted-foreground md:text-xl">
                        fishxlab 是面向 fishxapi 用户优化的 Pro Canvas 创作工作台。把绘图、视频、对话助手、模型选择和素材沉淀放在一个干净、克制、专业的界面里。
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        <Link href="/canvas" className="group inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition active:scale-[0.98]">
                            开始创作
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                        <button type="button" onClick={openConfig} className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-foreground transition hover:bg-accent">
                            <LayoutDashboard className="size-4" />
                            快速接入 fishxapi
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="size-3.5" />
                            浏览器直连 · 数据本地保存
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Zap className="size-3.5" />
                            自动拉模型 · 自动识别能力
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Layers3 className="size-3.5" />
                            多模型 · 标准协议适配
                        </span>
                    </div>
                </div>
            </section>

            <section className="relative border-y border-border bg-background">
                <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
                    {stats.map((item, index) => (
                        <div key={item.label} className={`border-border px-6 py-8 text-center ${index > 0 ? "md:border-l" : ""} ${index % 2 === 1 ? "border-l" : ""} ${index >= 2 ? "border-t md:border-t-0" : ""}`}>
                            <div className="text-3xl font-semibold tracking-normal text-foreground md:text-4xl">{item.value}</div>
                            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative px-6 py-20 lg:py-28">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            <span className="h-px w-6 bg-muted-foreground" />
                            Features
                        </div>
                        <h2 className="text-3xl font-semibold tracking-normal text-foreground md:text-4xl">一个工作台，所有 AI 创作能力。</h2>
                        <p className="mt-3 text-base leading-7 text-muted-foreground">从绘图到视频，从模型选择到参数适配，统一的画布任务流让多模型协作像本地软件一样自然。</p>
                    </div>

                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            const inner = (
                                <>
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-foreground">
                                            <Icon className="size-4 text-foreground" />
                                        </div>
                                        <h3 className="text-base font-medium text-foreground">{feature.title}</h3>
                                    </div>
                                    <p className="text-sm leading-6 text-muted-foreground">{feature.desc}</p>
                                </>
                            );

                            if (feature.action === "config") {
                                return (
                                    <button key={feature.title} type="button" onClick={openConfig} className="group bg-background p-6 text-left transition hover:bg-accent">
                                        {inner}
                                    </button>
                                );
                            }

                            return (
                                <Link key={feature.title} href={feature.href} className="group bg-background p-6 transition hover:bg-accent">
                                    {inner}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative px-6 pb-24">
                <div className="mx-auto max-w-5xl">
                    <div className="relative overflow-hidden rounded-lg border border-border bg-background px-8 py-14 text-center md:p-14">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]" />

                        <h2 className="relative text-3xl font-semibold tracking-normal text-foreground md:text-4xl">准备好开始你的下一次创作？</h2>
                        <p className="relative mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground">不用切换工具，不用手动猜模型协议。打开浏览器，贴 API Key，然后让模型、图标和参数自动就位。</p>
                        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
                            <Link href="/canvas" className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition active:scale-[0.98]">
                                进入 Pro Canvas
                                <ArrowRight className="size-4" />
                            </Link>
                            <button type="button" onClick={openConfig} className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-foreground transition hover:bg-accent">
                                <Server className="size-4" />
                                一键接入
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="relative border-t border-border bg-background">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
                    <div>© {year} fishxlab · Pro Canvas for fishxlab</div>
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <button type="button" onClick={openConfig} className="transition hover:text-foreground">
                            设置
                        </button>
                        <Link href="/prompts" className="transition hover:text-foreground">
                            提示词库
                        </Link>
                        <a href={DOCS_URL} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
                            文档
                        </a>
                        <a href="https://canvas.best/" target="_blank" rel="noreferrer" className="transition hover:text-foreground">
                            canvas.best
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
