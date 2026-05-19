"use client";

import ProjectCard from "@/app/components/ProjectCard";
import type { Project } from "@/data/projects";
import {
    motion,
    useReducedMotion,
    useTransform,
    type MotionValue,
} from "motion/react";

type ScrollProjectCardProps = Project & {
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
};

function useCardProgress(
    scrollYProgress: MotionValue<number>,
    index: number,
    total: number,
) {
    const segment = 1 / total;
    const start = index * segment;
    const end = (index + 1) * segment;

    return useTransform(scrollYProgress, [start, end], [0, 1]);
}

export default function ScrollProjectCard({
    index,
    total,
    scrollYProgress,
    ...project
}: ScrollProjectCardProps) {
    const shouldReduceMotion = useReducedMotion();
    const cardProgress = useCardProgress(scrollYProgress, index, total);

    const x = useTransform(cardProgress, [0, 1], [-140 - index * 12, 0]);
    const y = useTransform(cardProgress, [0, 1], [200 + index * 16, 0]);
    const opacity = useTransform(cardProgress, [0, 0.25, 1], [0, 0.6, 1]);
    const scale = useTransform(cardProgress, [0, 1], [0.82, 1]);
    const rotate = useTransform(cardProgress, [0, 1], [-10 - index * 2, 0]);

    if (shouldReduceMotion) {
        return (
            <div className="w-full">
                <ProjectCard {...project} />
            </div>
        );
    }

    return (
        <motion.div
            style={{ x, y, opacity, scale, rotate }}
            className="w-full will-change-transform"
        >
            <ProjectCard {...project} />
        </motion.div>
    );
}
