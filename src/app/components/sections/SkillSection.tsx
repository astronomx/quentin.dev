"use client";

import { useLayoutEffect, useRef, useState } from "react";

import {
    SiArchlinux,
    SiFigma,
    SiGit,
    SiHyprland,
    SiNextdotjs,
    SiPostgresql,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SkillItem = {
    name: string;
    Icon: IconType;
    large?: boolean;
};

const leftCarouselSkills: SkillItem[] = [
    { name: "Next.js", Icon: SiNextdotjs, large: true },
    { name: "Tailwind CSS", Icon: SiTailwindcss, large: true },
    { name: "TypeScript", Icon: SiTypescript, large: true },
];

const rightCarouselSkills: SkillItem[] = [
    { name: "Vue.js", Icon: SiVuedotjs },
    { name: "Supabase", Icon: SiSupabase },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Git", Icon: SiGit },
    { name: "Figma", Icon: SiFigma },
];

const SCROLL_BEATS = 50;

const cellBase =
    "skill-cell flex aspect-square items-center justify-center p-4";

function SkillIcon({ Icon, large }: { Icon: IconType; large?: boolean }) {
    const size = large ? "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" : "h-10 w-10 sm:h-12 sm:w-12";
    return <Icon className={size} aria-hidden />;
}

export default function SkillSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [reduceMotion, setReduceMotion] = useState(false);

    const scrollTrackHeight = `calc(100dvh + ${SCROLL_BEATS}dvh)`;

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setReduceMotion(prefersReducedMotion);
        if (prefersReducedMotion) return;

        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const fromLeft = section.querySelectorAll<HTMLElement>(".skill-from-left");
        const fromRight = section.querySelectorAll<HTMLElement>(".skill-from-right");

        const ctx = gsap.context(() => {
            gsap.set([...fromLeft, ...fromRight], {
                opacity: 0,
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

            tl.fromTo(
                fromLeft,
                {
                    x: -220,
                    rotate: -95,
                    opacity: 0,
                    transformOrigin: "center center",
                },
                {
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                    stagger: 0.12,
                    duration: 1,
                    ease: "back.out(1.35)",
                },
                0,
            );

            tl.fromTo(
                fromRight,
                {
                    x: 220,
                    rotate: 95,
                    opacity: 0,
                    transformOrigin: "center center",
                },
                {
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                    stagger: { each: 0.1, from: "end" },
                    duration: 1,
                    ease: "back.out(1.35)",
                },
                0.15,
            );
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

    const backgroundLayer = (
        <div
            aria-hidden="true"
            className="skills-bg pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="skills-bg-grid" />
            <div className="skills-bg-shape skills-bg-square" />
            <div className="skills-bg-shape skills-bg-circle" />
            <div className="skills-bg-shape skills-bg-diamond" />
            <div className="skills-bg-shape skills-bg-triangle" />
            <div className="skills-bg-shape skills-bg-ring" />
            <div className="skills-bg-shape skills-bg-hex" />
        </div>
    );

    const grid = (
        <div className="relative z-10 grid w-fit max-w-full grid-cols-6">
            {leftCarouselSkills.map(({ name, Icon, large }) => (
                <div
                    key={name}
                    className={`${cellBase} skill-from-left col-span-2`}
                    title={name}
                >
                    <SkillIcon Icon={Icon} large={large} />
                </div>
            ))}

            {rightCarouselSkills.map(({ name, Icon }) => (
                <div
                    key={name}
                    className={`${cellBase} skill-from-right`}
                    title={name}
                >
                    <SkillIcon Icon={Icon} />
                </div>
            ))}

            <div className={`${cellBase} skill-from-right`} title="Arch Linux / Hyprland">
                <div className="flex flex-row items-center gap-1">
                    <SiArchlinux className="h-4 w-4 sm:h-12 sm:w-12" aria-hidden />
                    <span className="text-xs sm:text-xl opacity-80">X</span>
                    <SiHyprland className="h-4 w-4 sm:h-12 sm:w-12" aria-hidden />
                </div>
            </div>
        </div>
    );

    if (reduceMotion) {
        return (
            <section className="relative z-20 flex h-dvh min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background px-4">
                {backgroundLayer}
                <p className="absolute top-6 left-4 z-20 font-mono text-sm md:text-base tracking-[0.16em] uppercase opacity-70 lg:left-8">
                    Skills
                </p>
                <div className="relative z-10 flex justify-center">{grid}</div>
            </section>
        );
    }

    return (
        <div ref={trackRef} className="relative z-20" style={{ height: scrollTrackHeight }}>
            <section
                ref={sectionRef}
                className="sticky top-0 flex h-dvh min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background px-4"
            >
                {backgroundLayer}
                <p className="absolute top-6 left-4 z-20 font-mono text-sm md:text-base tracking-[0.16em] uppercase opacity-70 lg:left-8">
                    Skills
                </p>
                <div className="relative z-10 flex flex-1 items-center justify-center">{grid}</div>
            </section>
        </div>
    );
}
