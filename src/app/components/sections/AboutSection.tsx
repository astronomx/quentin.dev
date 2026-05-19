"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { aboutParagraphs, type AboutParagraph } from "@/data/about";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** dvh of scroll per paragraph while the section stays pinned */
const SCROLL_BEATS_PER_PARAGRAPH = 90;

function AboutWords({ parts }: { parts: AboutParagraph["parts"] }) {
    return (
        <>
            {parts.map((part, partIndex) =>
                part.text.split(/(\s+)/).map((token, tokenIndex) => {
                    if (!token) return null;

                    if (/^\s+$/.test(token)) {
                        return <span key={`${partIndex}-${tokenIndex}-space`}>{token}</span>;
                    }

                    return (
                        <span
                            key={`${partIndex}-${tokenIndex}`}
                            className={`about-word inline-block${part.highlight ? " font-semibold text-(--violet)" : ""}`}
                        >
                            {token}
                        </span>
                    );
                }),
            )}
        </>
    );
}

function AboutBackground({ animated = true }: { animated?: boolean }) {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute inset-0 bg-background" />

            <div
                className={`about-bg-drop absolute inset-x-0 top-0 h-full bg-linear-to-b from-(--violet)/20 via-(--slate-blue)/12 to-background ${
                    animated ? "" : "scale-y-100"
                }`}
            />

            <div
                className={`about-bg-glow about-bg-float absolute -top-[12%] -left-[8%] h-[55%] w-[55%] rounded-full bg-(--violet)/25 blur-3xl ${
                    animated ? "" : "opacity-100"
                }`}
            />
            <div
                className={`about-bg-glow about-bg-float-delayed absolute -right-[10%] bottom-[8%] h-[45%] w-[45%] rounded-full bg-(--slate-blue)/20 blur-3xl ${
                    animated ? "" : "opacity-100"
                }`}
            />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,color-mix(in_srgb,var(--violet)_8%,transparent),transparent)]" />
        </div>
    );
}

export default function AboutSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [reduceMotion, setReduceMotion] = useState(false);

    const scrollTrackHeight = `calc(100dvh + ${aboutParagraphs.length * SCROLL_BEATS_PER_PARAGRAPH}dvh)`;

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setReduceMotion(prefersReducedMotion);
        if (prefersReducedMotion) return;

        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const paragraphs = gsap.utils.toArray<HTMLElement>(".about-paragraph", section);
        const bgDrop = section.querySelector<HTMLElement>(".about-bg-drop");
        const bgGlows = section.querySelectorAll<HTMLElement>(".about-bg-glow");

        const ctx = gsap.context(() => {
            paragraphs.forEach((block) => {
                gsap.set(block.querySelectorAll(".about-word"), {
                    opacity: 0,
                    y: 48,
                    rotateX: 20,
                    filter: "blur(6px)",
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: track,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            if (bgDrop) {
                tl.fromTo(
                    bgDrop,
                    { scaleY: 0, opacity: 0.85 },
                    { scaleY: 1, opacity: 1, duration: 0.45, ease: "power3.inOut" },
                    0,
                );
            }

            if (bgGlows.length) {
                tl.fromTo(
                    bgGlows,
                    { opacity: 0, y: -48 },
                    { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power2.out" },
                    0.05,
                );
            }

            paragraphs.forEach((block, index) => {
                const words = block.querySelectorAll<HTMLElement>(".about-word");
                const isFirst = index === 0;
                const isLast = index === paragraphs.length - 1;

                tl.fromTo(
                    words,
                    {
                        opacity: 0,
                        y: 48,
                        rotateX: 20,
                        filter: "blur(6px)",
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        filter: "blur(0px)",
                        stagger: 0.02,
                        duration: 0.9,
                        ease: "power3.out",
                    },
                    isFirst ? 0.35 : "-=0.4",
                );

                if (!isLast) {
                    tl.to(
                        words,
                        {
                            opacity: 0,
                            y: -40,
                            rotateX: -12,
                            filter: "blur(4px)",
                            stagger: 0.015,
                            duration: 0.7,
                            ease: "power3.in",
                        },
                        "+=0.55",
                    );
                }
            });
        }, track);

        const refresh = () => ScrollTrigger.refresh();
        refresh();
        requestAnimationFrame(refresh);
        window.addEventListener("load", refresh);

        return () => {
            window.removeEventListener("load", refresh);
            ctx.revert();
        };
    }, []);

    if (reduceMotion) {
        return (
            <section className="about-section relative z-20 flex h-dvh min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-4 py-16 lg:px-8">
                <AboutBackground animated={false} />
                <div className="relative z-10 flex max-w-3xl flex-col gap-8">
                    {aboutParagraphs.map((paragraph) => (
                        <p
                            key={paragraph.id}
                            className={`text-lg leading-relaxed md:text-xl ${paragraph.muted ? "opacity-80" : ""}`}
                        >
                            <AboutWords parts={paragraph.parts} />
                        </p>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <div ref={trackRef} className="relative z-20" style={{ height: scrollTrackHeight }}>
            <section
                ref={sectionRef}
                className="about-section sticky top-0 flex h-dvh min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-4 py-8 lg:px-8"
            >
                <AboutBackground />

                <div className="relative z-10 flex h-[min(72dvh,52rem)] w-full max-w-6xl flex-1 items-center justify-center perspective-distant">
                    {aboutParagraphs.map((paragraph, index) => (
                        <div
                            key={paragraph.id}
                            className={`about-paragraph absolute inset-0 flex items-center justify-center px-2 md:px-6 ${
                                paragraph.muted ? "opacity-80" : ""
                            }`}
                            style={{ zIndex: index + 1 }}
                        >
                            <p className="max-w-5xl text-center text-[clamp(1.5rem,4.5vw,3.75rem)] leading-[1.15] font-medium tracking-tight text-balance">
                                <AboutWords parts={paragraph.parts} />
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
