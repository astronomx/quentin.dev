import Herosection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Herosection />

      <ProjectsSection />

      <AboutSection />

      <SkillSection />
    </div>
  );
}
