"use client";

import { useRef } from "react";

import { projects } from "@/data/projects";

import ScrollProjectCard from "@/app/components/ScrollProjectCard";
import { useReducedMotion, useScroll } from "motion/react";

/** Viewport heights of scroll while the section is pinned (one beat per card). */
const SCROLL_BEATS_PER_CARD = 75;

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    if (shouldReduceMotion) {
        return (
            <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-8 lg:max-w-screen-2xl lg:px-8">
                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
                    {projects.map((project, index) => (
                        <ScrollProjectCard
                            key={project.slug}
                            index={index}
                            total={projects.length}
                            scrollYProgress={scrollYProgress}
                            {...project}
                        />
                    ))}
                </div>
            </section>
        );
    }

    const scrollTrackHeight = `calc(100dvh + ${projects.length * SCROLL_BEATS_PER_CARD}dvh)`;

    return (
        <div ref={containerRef} className="relative z-10" style={{ height: scrollTrackHeight }}>
            <section className="sticky top-5 z-10 mx-auto flex min-h-[calc(100dvh-2.5rem)] w-full max-w-7xl flex-col justify-center bg-background px-4 lg:max-w-screen-2xl lg:px-8">
                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
                    {projects.map((project, index) => (
                        <ScrollProjectCard
                            key={project.slug}
                            index={index}
                            total={projects.length}
                            scrollYProgress={scrollYProgress}
                            {...project}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
