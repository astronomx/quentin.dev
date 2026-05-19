import Herosection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Herosection />

      <ProjectsSection />

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
