import Herosection from "./components/Herosection";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Herosection />

      <div className="relative z-10 flex flex-col">
        <h2 className="self-center text-5xl mb-5 font-sans italic">Projects</h2>

        <div className="flex flex-col md:flex-row gap-5">

          <ProjectCard title="Stichting Hartekind"
            previewText="
              Built a new website for a foundation supporting children with congenital heart defects focused on accessibility, 
              storytelling, and making it easy for visitors to donate and get involved.
            "
            image="/images/stichtingHartekind.png"
          />

          <ProjectCard title="Aidsfonds"
            previewText="
              Built a new website supporting their mission toward a world without AIDS clear information, accessible donation flow, 
              and personal stories that move people to act.
            "
            image="/images/aidsfonds.png"
          />

          <ProjectCard title="Plan Internationaal"
            previewText="
              Redesigned the website for a global children's rights organization for a fresher look, clearer information architecture
              and an improved user experience to better reflect their mission.
            "
            image="/images/planInternationaal.png"
          />

        </div>
      </div>
    </div>
  );
}
