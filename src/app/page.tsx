import Herosection from "./components/Herosection";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Herosection />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-8 lg:max-w-screen-2xl lg:px-8">
        <h2 className="mb-8 self-center text-4xl md:text-5xl font-sans italic lg:mb-10">Projects</h2>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">

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
