"use client";

import { projects } from "@/data/projects";

import ScrollProjectCard from "@/app/components/ScrollProjectCard";

export default function ProjectsSection() {
    return (
        <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-8 lg:max-w-screen-2xl lg:px-8">
            <h2 className="mb-8 self-center text-4xl font-sans italic md:text-5xl lg:mb-10">Projects</h2>

            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
                {projects.map((project, index) => (
                    <ScrollProjectCard key={project.slug} index={index} {...project} />
                ))}
            </div>
        </section>
    );
}
