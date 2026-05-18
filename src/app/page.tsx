import { projects } from "@/data/projects";

import Herosection from "@/app/components/sections/HeroSection";
import ProjectCard from "@/app/components/ProjectCard";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Herosection />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-8 lg:max-w-screen-2xl lg:px-8">
        <h2 className="mb-8 self-center text-4xl md:text-5xl font-sans italic lg:mb-10">Projects</h2>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>

      <div className="w-full px-4 pb-16 pt-8 lg:px-8">
        <h2 className="mb-8 flex justify-center text-4xl md:text-5xl font-sans italic lg:mb-10">About me</h2>

        <AboutSection />
      </div>

      <div className="w-full px-4 pb-16 pt-8 lg:px-8">
        <h2 className="mb-8 flex justify-center text-4xl md:text-5xl font-sans italic lg:mb-10">Proffesional at</h2>

        <SkillSection />
      </div>
    </div>
  );
}
