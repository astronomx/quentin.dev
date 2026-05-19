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
                    start: "top top+=1.25rem",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

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
                    isFirst ? 0 : "-=0.4",
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
            <section className="relative z-20 flex min-h-[calc(100dvh-2.5rem)] w-full flex-col items-center justify-center bg-background px-4 py-16 lg:px-8">
                <div className="flex max-w-3xl flex-col gap-8">
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
                className="about-section sticky top-5 flex min-h-[calc(100dvh-2.5rem)] w-full flex-col items-center justify-center bg-background px-4 py-8 lg:px-8"
            >
              <div className="relative flex h-[min(72dvh,52rem)] w-full max-w-6xl flex-1 items-center justify-center perspective-distant">
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
