"use client";

import { useRef } from "react";

import ProjectCard from "@/app/components/ProjectCard";
import type { Project } from "@/data/projects";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const scrollOffset: NonNullable<Parameters<typeof useScroll>[0]>["offset"] = [
    "start end",
    "start 0.35",
];

type ScrollProjectCardProps = Project & {
    index: number;
};

export default function ScrollProjectCard({ index, ...project }: ScrollProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: scrollOffset,
    });

    const x = useTransform(scrollYProgress, [0, 1], [-140 - index * 12, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [200 + index * 16, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0.6, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-10 - index * 2, 0]);

    if (shouldReduceMotion) {
        return (
            <div ref={ref} className="w-full">
                <ProjectCard {...project} />
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            style={{ x, y, opacity, scale, rotate }}
            className="w-full will-change-transform"
        >
            <ProjectCard {...project} />
        </motion.div>
    );
}
