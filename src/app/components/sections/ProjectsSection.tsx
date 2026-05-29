"use client";

import { useRef } from "react";

import { featuredProjects } from "@/data/projects";

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

    const backgroundLayer = (
        <div
            aria-hidden="true"
            className="projects-bg pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="projects-bg-grid" />
            <div className="projects-bg-square projects-bg-square-a" />
            <div className="projects-bg-square projects-bg-square-b" />
            <div className="projects-bg-square projects-bg-square-c" />
            <div className="projects-bg-square projects-bg-square-d" />
        </div>
    );

    const sectionLabel = (
        <p className="absolute top-6 left-4 z-20 font-mono text-sm md:text-base tracking-[0.16em] uppercase opacity-70 lg:left-8">
            Projects
        </p>
    );

    if (shouldReduceMotion) {
        return (
            <section className="relative z-10 flex w-full flex-col overflow-hidden bg-background pb-16 pt-8">
                {backgroundLayer}
                {sectionLabel}
                <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-6 lg:max-w-screen-2xl lg:grid-cols-3 lg:gap-10 lg:px-8">
                    {featuredProjects.map((project, index) => (
                        <ScrollProjectCard
                            key={project.slug}
                            index={index}
                            total={featuredProjects.length}
                            scrollYProgress={scrollYProgress}
                            {...project}
                        />
                    ))}
                </div>
            </section>
        );
    }

    const scrollTrackHeight = `calc(100dvh + ${featuredProjects.length * SCROLL_BEATS_PER_CARD}dvh)`;

    return (
        <div ref={containerRef} className="relative z-10" style={{ height: scrollTrackHeight }}>
            <section className="sticky top-5 z-10 flex min-h-[calc(100dvh-2.5rem)] w-full flex-col justify-center overflow-hidden bg-background">
                {backgroundLayer}
                {sectionLabel}
                <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-6 lg:max-w-screen-2xl lg:grid-cols-3 lg:gap-10 lg:px-8">
                    {featuredProjects.map((project, index) => (
                        <ScrollProjectCard
                            key={project.slug}
                            index={index}
                            total={featuredProjects.length}
                            scrollYProgress={scrollYProgress}
                            {...project}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
