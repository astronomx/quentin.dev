"use client";

import type { ReactNode } from "react";

import StatCard from "@/app/components/StatCard";
import { motion } from "motion/react";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const statCardDropIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
};

const dropInTransition = (delay: number) => ({
    duration: 1,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
});

const viewport = { once: true, amount: 0.2 as const };

function AnimatedStatCard({
    delay,
    className,
    children,
}: {
    delay: number;
    className?: string;
    children: ReactNode;
}) {
    return (
        <motion.div
            className={className}
            variants={statCardDropIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={dropInTransition(delay)}
        >
            {children}
        </motion.div>
    );
}

export default function Herosection() {
    return(
        <div className="grid min-h-[calc(100dvh-2.5rem)] w-full grid-cols-1 p-14 items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
            <div className="flex flex-col gap-5 md:col-span-5 lg:col-span-5 lg:pr-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl max-w-xl">I build fast, clean <span className="text-(--violet) font-mono">digital things.</span></h2>
                <p className="opacity-80 text-md/4">
                    SE student with a passion for good software. From internship projects to personal builds,
                    I care about the details that make products feel right.
                </p>

                <div className="flex flex-row gap-3">
                    {/* <a className="flex flex-row group gap-1 items-center rounded-md px-2 md:px-3 py-1 md:py-2 bg-foreground text-background underline-none
                        border-2 border-foreground ease-in-out transition-colors duration-300 hover:bg-background hover:text-foreground
                        text-xs md:text-lg cursor-pointer"
                        href="/"
                    >
                        View my work
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 text-background transition-colors duration-300 group-hover:text-foreground" />
                    </a> */}
        
                    <a
                        href="/cv/quentin-resume.pdf"
                        download
                        className="flex group flex-row gap-1 items-center rounded-md px-2 md:px-3 py-1 md:py-2 border-2 border-foreground text-foreground
                            ease-in-out transition-colors duration-300 hover:bg-foreground hover:text-background cursor-pointer
                            text-xs md:text-lg"
                    >
                        Download CV
                        <ArrowDownTrayIcon className="h-4 w-4 text-foreground transition-colors duration-300 group-hover:text-background" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col gap-3 md:col-span-7 lg:col-span-7">
                <div className="flex flex-col md:flex-row w-full gap-3">
                    <AnimatedStatCard delay={0} className="w-full">
                        <StatCard content="3" contentInfo="Projects shipped" icon="none" />
                    </AnimatedStatCard>
                    <AnimatedStatCard delay={0.1} className="w-full">
                        <StatCard content="1" contentInfo="Interships done" icon="X" />
                    </AnimatedStatCard>
                </div>

                <AnimatedStatCard delay={0.2}>
                    <StatCard
                        title="Internship"
                        content="
                    At US Media I worked on various projects including Aidsfonds, Stichting Hartekind, 
                    and Plan Internationaal. Here, I learned how a project is set up from absolutely nothing, a lot about how important workflows are, 
                    how to handle meetings and how to meet deadlines. The main thing I worked with was Wordpress BUT with a twist. We used ACF Custom fields, 
                    Twig and SCSS (with a little Typescript for logic) to create custom themes and block the NGO's could use all in their in own style.
                    "
                        contentInfo="US media"
                        role="Intern / Junior dev"
                        icon="Square"
                        period={{ startDate: "Feb 2025", endDate: "Jun 2025" }}
                    />
                </AnimatedStatCard>

                <AnimatedStatCard delay={0.3}>
                    <StatCard
                        title="Programming languages / Tools"
                        icon="none"
                        items={["NextJs", "Typescript", "Tailwind", "VueJs", "Java", "SQL", "Figma", "Git", "Linux"]}
                    />
                </AnimatedStatCard>
            </div>
        </div>
    )
}
